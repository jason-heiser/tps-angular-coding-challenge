import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

import { Project } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  public allProjects$ = this.httpClient.get<Project[]>('assets/projects.json').pipe(shareReplay(1));

}
