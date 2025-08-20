import { Component } from '@angular/core';
import { AuctionService } from '../service/auction-service';
import { Auction } from '../models/auction';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, NgForm } from "@angular/forms";
import { NgFor } from '@angular/common';
import { Bid } from '../models/bid';
import { Comment } from '../models/comment';
import { from } from 'rxjs';

@Component({
  selector: 'app-auctions',
  imports: [MatIconModule, FormsModule],
  templateUrl: './auctions.html',
  styleUrl: './auctions.css'
})
export class Auctions {

  auctionList: Auction[] = [];
  auction: any;

  bid: Bid = {
    userId : 0,
    username: '',
    bidAmount: 0
  }

  comment: Comment = {
    userId:   0,
    username: '',
    comment:  '',
  }

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

submitBid(event: Event, bidForm: NgForm) {
  event.preventDefault();

  this.auctionService.updateBid(this.auction.id, this.bid).subscribe({
    next: (response) => {
      console.log("Bid updated", response);

      // ✅ Refresh everything
      this.auctionService.getAuctions().subscribe({
        next: (auctions: Auction[]) => {
          this.auctionList = auctions;
          this.auction = this.auctionList.find(a => a.id === this.auction.id)!;
          bidForm.resetForm(); // clear input
        }
      });
    },
    error: (err) => {
      console.log("Error updating bid", err);
    }
  });
}

submitComment(event: Event, commentForm: NgForm) {
  event.preventDefault()
  this.auctionService.updateComment(this.auction.id, this.comment).subscribe({
    next: (response) => {
      console.log("comment updated", response);

      // ✅ Refresh everything
      this.auctionService.getAuctions().subscribe({
        next: (auctions: Auction[]) => {
          this.auctionList = auctions;
          this.auction = this.auctionList.find(a => a.id === this.auction.id)!;
          commentForm.resetForm(); // clear input
        }
      });
    },
    error: (err) => {
      console.log("Error updating bid", err);
    }
  });
}


  

}
