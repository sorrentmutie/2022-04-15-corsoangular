import { Component } from '@angular/core';
import { Address, Product } from './products/models/product';
import { ProductsService } from './products/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo-corso';
}
