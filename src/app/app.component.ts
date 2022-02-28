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

    this.filterResults$ = combineLatest([projects$, filter$]).pipe(
      map(([projects, filter]) => projects.filter(project => project.projectName.toUpperCase().indexOf(filter) !== -1 ))
    );

  }

}
