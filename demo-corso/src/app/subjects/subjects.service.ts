import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Customer } from './customers';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {

  private customers: Customer[] = [];
  private myInterval: any;
  private subject$: Subject<Customer> | null = null;
  subjectObservable$: Observable<Customer> | null = null;
  constructor() {
    this.subject$ = new Subject();
    this.subjectObservable$ = this.subject$.asObservable();
  }

  start(){
    this.myInterval = setInterval( () => {
      const lunghezza = this.customers.length;
      const nuovoCustomer = { name: "nome: " + lunghezza, city: "citta: " + lunghezza  };
      this.customers.push(nuovoCustomer);
      this.subject$?.next(nuovoCustomer);
    }, 3000);
  }

  stop(){
    clearInterval(this.myInterval);
  }
}
