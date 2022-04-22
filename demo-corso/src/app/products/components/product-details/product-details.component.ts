import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  product: Product | null = null;
  subscription: Subscription | null = null;

  constructor(private route: ActivatedRoute, private service: ProductsService,
    private router: Router) {
    const id : string | null = this.route.snapshot.paramMap.get('id');

    if(id !== null) {
      this.subscription = this.service.getProduct(parseInt(id)).subscribe(
        product => {
          console.log(product);
          this.product = product; }
      );
    }
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();;
  }

  ngOnInit(): void {
  }

  backToList(): void {
    this.router.navigate(['/products']);
  }

}
