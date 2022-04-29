import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from '../customers';
import { SubjectsService } from '../subjects.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnDestroy  {

  customers: Customer[] = [];
  subscription: Subscription | undefined = undefined;

  constructor(private service: SubjectsService) {
    this.service.start();
    this.subscription = this.service.subjectObservable$?.subscribe(
      (newCustomer) => {
          this.customers.push(newCustomer);
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  stop() {
    this.service.stop();
  }


}
