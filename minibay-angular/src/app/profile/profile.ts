import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClient } from '@angular/common/http';
import { AuctionService } from '../service/auction-service';
import { ProductService } from '../service/product-service';
import { AuthService } from '../auth/auth-service';
import { Auction } from '../models/auction';
import { Product } from '../models/product';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-profile',
  imports: [
    Navbar,
    MatTabsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule, 
    MatSlideToggle, 
    MatCardModule, 
    MatChipsModule
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  auctionList: Auction[] = [];
  productList: Product[] = [];

  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'currentBid',
    'delete',
    'accept'
  ];

  productColumns: string[] = [
    'name',
    'price',
    'brand',
    'averageRating',
    'delete',
    'accept',
    'reviews'
  ];

  email: string = '';
  username: string = '';

  constructor(
    private http: HttpClient,
    private auctionService: AuctionService,
    private productService: ProductService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize user info
    const user = this.authService.getUser();
    this.email = user?.email ?? '';
    this.username = user?.username ?? '';

    // Load auctions
    this.auctionService.getAuctionByUserId().subscribe({
      next: (response: Auction[]) => {
        console.log('We got auction by user id', response);
        this.auctionList = response;
      },
      error: (err) => console.log('Error fetching auctions', err)
    });

    // Load products
    this.productService.getProductByUserId().subscribe({
      next: (response: Product[]) => {
        console.log('We got products by user id', response);
        this.productList = response;
      },
      error: (err) => console.log('Error fetching products', err)
    });
  }

  // Auction handlers
  onDeleteAuction(auction: Auction) {
    console.log('Deleting auction', auction);
    // TODO: call auctionService.deleteAuction(auction.id)
  }

  onAcceptAuction(auction: Auction, event: any) {
    const accepted = event.checked;
    console.log('Auction accepted?', auction.id, accepted);
  }

  // Product handlers
  onDeleteProduct(product: Product) {
    console.log('Deleting product', product);
    // TODO: call productService.deleteProduct(product.id)
  }

  onAcceptProduct(product: Product, event: any) {
    const accepted = event.checked;
    console.log('Product accepted?', product.name, accepted);
  }
}
