import { Component } from '@angular/core';
import { AuctionService } from '../service/auction-service';
import { Auction } from '../models/auction';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.html',
  styleUrl: './auctions.css'
})
export class Auctions {

  auctionList: Auction[] = [];

  constructor (private auctionService: AuctionService) {}

  ngOnInit() : void {
    this.auctionService.getAuctions().subscribe ({
      next: (auctions: Auction[]) => {
        console.log("We got auctions ", auctions);
        this.auctionList = auctions;
      },
      error: (err) => {
        console.log("Error getting auctions ", err)
      }
    })
  }

  

}
