import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth-service';
import { environment } from '../../environments/environment.development';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor (private authService: AuthService, private http:HttpClient) {}

  PRODUCT_URL = environment.API_GATEWAY_URL + "/products";

  postProduct(product:Product): Observable<any> {
    const customerJson = localStorage.getItem("customer");
    if (customerJson)
    {
      const customer = JSON.parse(customerJson)
      product.userId = customer.id;
    }
    console.log(product.userId)

    return this.http.post(this.PRODUCT_URL, product)
  }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.PRODUCT_URL);
  }

  
}
