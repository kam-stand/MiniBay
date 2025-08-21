import { Navbar } from "../navbar/navbar";
import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { ProductService } from "../service/product-service";
import { Product } from "../models/product";
import {ChangeDetectionStrategy} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { ProductCard } from "../product-card/product-card";



@Component({
  selector: 'app-products',
  imports: [Navbar, CommonModule, MatCardModule, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

  constructor(private http:HttpClient, private productService: ProductService) {}

  productList : Product[] = [];


  ngOnInit() : void{

    this.productService.getProduct().subscribe({
      next: (response) => {
        console.log("Received products: ", response)
        this.productList = response;
      },
      error: (err) => {
        console.log("error ", err);
        alert("Cant get products");
      }
    })

  }

}
