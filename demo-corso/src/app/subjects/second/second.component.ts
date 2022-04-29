import { Component } from '@angular/core';
import { Customer } from '../customers';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent  {

  lastcustomer: Customer | undefined = undefined;
  constructor(private service: SubjectsService) {
    this.service.subjectObservable$?.subscribe(
      (newCustomer) => {
         this.lastcustomer = newCustomer;
      }
    );
  }

}
