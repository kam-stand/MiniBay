import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { Auction } from '../models/auction';
import { HttpClient } from '@angular/common/http';
import { AuctionService } from '../service/auction-service';
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 
@Component({
  selector: 'app-profile',
  imports: [Navbar, MatTabsModule, MatTableModule, MatButtonToggleModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {

  auctionList: Auction[] = [];

  // tell the table what columns to render
  displayedColumns: string[] = ['id', 'name', 'price', 'currentBid', 'delete', 'accept'];

  constructor(private http: HttpClient, private auctionService: AuctionService) {}

  ngOnInit(): void {
    this.auctionService.getAuctionByUserId().subscribe({
      next: (response: Auction[]) => {
        console.log("We got auction by user id ", response);
        this.auctionList = response;   // bind the data to the table
      },
      error: (err) => {
        console.log("err ", err);
      }
    });
  }

    // Handle delete click
  onDelete(auction: Auction): void {
    console.log("Deleting auction", auction);
    // TODO: call delete service here
  }

  // Handle toggle change
  onAcceptToggle(auction: Auction, event: any): void {
    const accepted = event.checked;
    console.log("Auction accepted?", auction.id, accepted);
    // TODO: update backend if needed
  }


}
