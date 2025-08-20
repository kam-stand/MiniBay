import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../service/product-service';
import { Product } from '../models/product';
import { Auctions } from '../auctions/auctions';

@Component({
  selector: 'app-home',
  imports: [Navbar, MatIconModule, FormsModule, Auctions],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  view: string = 'sell';


  categoriesText ="";

  product: Product = new Product();

  constructor(private http: HttpClient, private productService: ProductService) {}

  handleView(option: string): void {
    console.log('the view is now: ', option);
    this.view = option;
  }

  submitProduct(event: Event) {
    event.preventDefault();
    console.log("the product being posted: ", this.product)
    this.product.categories = this.product.splitCategories(this.categoriesText)

    this.productService.postProduct(this.product).subscribe(
      {
        next: (response) => {
          console.log("Succes product uplaoded: ", response);
        },
        error: (err) => {
          console.log("Cannot upload product: ", err);
        }
      }
    )
    
  }
}
