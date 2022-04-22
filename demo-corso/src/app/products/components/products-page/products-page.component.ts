import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  myproducts: Product[] = [];
  specialProducts: Product[] = [];

  constructor(private service: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.service.getObservableProductsFromApi().subscribe(prodotti => this.myproducts = prodotti);
  //  this.service.getProduct(1).subscribe(prodotto => console.log(prodotto));
  }

  showDetails(product: Product): void {
    this.router.navigate(['/products', product.id]);
  }

}
