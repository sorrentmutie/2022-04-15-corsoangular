import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  getList(): Observable<string[]> {
    return of(['item1', 'item2', 'item3']);
  }
}
