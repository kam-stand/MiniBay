import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
interface Product {
  userId: number;
  name: string;
  brand: string;
  categories: string[];
  price: number;
}

@Component({
  selector: 'app-home',
  imports: [Navbar, MatIconModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  view: string = 'sell';

  product: Product = {
    userId: 0,
    name: '',
    brand: '',
    categories: [],
    price: 0,
  };

  categoriesText ="";

  constructor(private http: HttpClient) {}

  handleView(option: string): void {
    console.log('the view is now: ', option);
    this.view = option;
  }

  submitProduct(event: Event) {
    event.preventDefault();

    // Get customer from localStorage
    const customerJson = localStorage.getItem('customer');
    if (!customerJson) return;

    const customer = JSON.parse(customerJson);
    this.product.userId = customer.id; // lowercase 'id'

    console.log('Sending product:', this.product);

    // Split categoriesText by spaces into an array
    this.product.categories = this.categoriesText.trim().split(/\s+/);

    console.log('Sending product:', this.product);

    const PRODUCT_URL = environment.API_GATEWAY_URL + '/products';
    this.http.post<Product>(PRODUCT_URL, this.product).subscribe({
      next: (response) => console.log('Product created successfully:', response),
      error: (err) => console.error('Error creating product:', err),
    });
  
  }
}
