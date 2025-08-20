import { Component } from '@angular/core';
import { AuctionService } from '../service/auction-service';
import { Auction } from '../models/auction';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-auctions',
  imports: [MatIconModule],
  templateUrl: './auctions.html',
  styleUrl: './auctions.css'
})
export class Auctions {

  auctionList: Auction[] = [];

  auction: any;

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

  view : string = ''



  handleView(option: string, id:string){

    this.view = option
    console.log("the view is ", this.view)
    console.log("the auction is: ", id)
    this.auction = this.auctionService.getAuctionById(id, this.auctionList)!;

    

  }

  

}
