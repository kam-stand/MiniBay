import { Navbar } from "../navbar/navbar";
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service/productservice';
import { CommonModule } from "@angular/common";

interface Product {
  id?: string;       // optional, set by backend
  userId: number;
  name: string;
  brand: string;
  categories: string[];
  price: number;
}




@Component({
  selector: 'app-products',
  imports: [Navbar, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {

  products: Product[] = [];

  // Array of emojis to pick randomly
  emojis = ['📦','🛒','🎁','💎','📱','💻','🎮','🖼️','🛍️','🔧'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => console.error('Error fetching products:', err)
    });
  }

  getRandomEmoji(): string {
    return this.emojis[Math.floor(Math.random() * this.emojis.length)];
  }
}
