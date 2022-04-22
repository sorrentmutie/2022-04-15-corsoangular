import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address, Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
    console.log("sono nel constructor:");
  }

  getProducts() : Product[] {
    const products: Product[] = [];
    const address: Address = {
      street: "Via del Pino",
      city: "Napoli",
      postalCode: "80100"
    }
    products.push( {
     id: 1, Name: "Frigorifero", Code: 100, Price: 500,
     Address: address,
     ReleaseDate: new Date(), Image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
    } )
    products.push( {
      id: 2, Name: "Frigorifero Lux", Code: 200, Price: 1500,
      Address: address,
      ReleaseDate: new Date(), Image: "https://th.bing.com/th/id/OIP.qEZnrWcytrn3GH4phNhzcAHaHa?pid=ImgDet&rs=1"
     } )

    return products;
  }

  getObservableProducts(): Observable<Product[]> {
    return of(this.getProducts());
  }

  getObservableProductsFromApi() : Observable<Product[]> {
    return this.http.get<Product[]>(environment.urlProducts);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.urlProducts + "/" + id);
  }


}
