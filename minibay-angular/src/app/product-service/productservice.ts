import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

interface Product {
  id?: string;       // optional, set by backend
  userId: number;
  name: string;
  brand: string;
  categories: string[];
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private API_URL = environment.API_GATEWAY_URL;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/products`);
  }
}
