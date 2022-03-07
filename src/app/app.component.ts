import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { Project } from './interfaces';
import { ProjectsService } from './projects.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private static DefaultFilter = '';

  public filterControl = new FormControl(AppComponent.DefaultFilter);

  public userName$ = this.userService.currentUser$.pipe(
    map(currentUser => currentUser.userName)
  );

  public filterResults$!: Observable<Project[]>;

  constructor(
    private userService: UserService,
    projectsService: ProjectsService,
  ) {

    const projects$ = projectsService.allProjects$;

    const filter$ = this.filterControl.valueChanges.pipe(
      startWith(AppComponent.DefaultFilter),
      map(filter => filter.trim().toUpperCase() as string),
    );

    const userId$ = userService.currentUser$.pipe(
      map(currentUser => currentUser.userId)
    );

    this.filterResults$ = combineLatest([projects$, filter$, userId$]).pipe(
      map(([projects, filter, userId]) => {
        const check = (field: string) => field.toUpperCase().indexOf(filter) !== -1;
        return projects.filter(project => [project.projectName, project.projectSize, project.projectManagerName].some(check))
                       .sort(project => project.projectManagerId === userId ? -1 : 0)
      })
    );

  }

}
