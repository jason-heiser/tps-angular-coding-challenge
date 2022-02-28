import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';

import { User } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  public currentUser$ = this.httpClient.get<User>('assets/current-user.json').pipe(shareReplay(1));

}
