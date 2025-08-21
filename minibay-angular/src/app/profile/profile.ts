import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { Auction } from '../models/auction';
import { HttpClient } from '@angular/common/http';
import { AuctionService } from '../service/auction-service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { AuthService } from '../auth/auth-service';

@Component({
  selector: 'app-profile',
  imports: [
    Navbar,
    MatTabsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  auctionList: Auction[] = [];

  // tell the table what columns to render
  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'currentBid',
    'delete',
    'accept',
  ];

 email: string = '';
username: string = '';

constructor(
  private http: HttpClient,
  private auctionService: AuctionService,
  private authService: AuthService
) {}

ngOnInit(): void {
  // initialize email & username here
  const user = this.authService.getUser();
  this.email = user?.email ?? '';
  this.username = user?.username ?? '';

  this.auctionService.getAuctionByUserId().subscribe({
    next: (response: Auction[]) => {
      console.log('We got auction by user id ', response);
      this.auctionList = response;
    },
    error: (err) => {
      console.log('err ', err);
    },
  });
}


  // Handle delete click
  onDelete(auction: Auction): void {
    console.log('Deleting auction', auction);
    // TODO: call delete service here
  }

  // Handle toggle change
  onAcceptToggle(auction: Auction, event: any): void {
    const accepted = event.checked;
    console.log('Auction accepted?', auction.id, accepted);
    // TODO: update backend if needed
  }
}
