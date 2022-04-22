import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RandomUsersResponse } from '../models/randomuser';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(private http: HttpClient) { }

  getData(howmany: number): Observable<RandomUsersResponse>{
    return this.http.get<RandomUsersResponse>(environment.urlRandomUsers + howmany);
  }
}
