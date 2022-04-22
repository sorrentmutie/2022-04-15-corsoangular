import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent  {

  @Input() products: Product[] = [];
  @Output() notify: EventEmitter<Product> = new EventEmitter<Product>();
  constructor() {
    const myObservable = of(1,2,3,4,5,6,7,8,9,10);

    const myObserver = {
      next: (x:number): void => console.log('Observer ha ricevuto un nuovo valore: ' + x),
      error: (err: Error) => console.log('Errore: ' + err.message),
      complete: () => console.log('Notifiche completate')
    }

    myObservable.subscribe(myObserver);


  }

  showDetails(selectedProduct: Product): void {
    console.log(selectedProduct);
   // this.router.navigate(['/products', selectedProduct.Id]);
    this.notify.emit(selectedProduct);
  }

}
