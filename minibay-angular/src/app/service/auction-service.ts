import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Bid } from '../models/bid';
import { Auction } from '../models/auction';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root',
})
export class AuctionService {
  constructor(private http: HttpClient) {}
  AUCTION_URL = environment.API_GATEWAY_URL + '/products' + '/auctions';

  getAuctions(): Observable<Auction[]> {
    return this.http.get<Auction[]>(this.AUCTION_URL);
  }

  updateComment(id: string, comment: Comment): Observable<Auction> {
    const customerJson = localStorage.getItem("customer");
    if (customerJson)
    {
      const customer = JSON.parse(customerJson)

      comment.userId = customer.id;
      comment.username = customer.username;
    }
    
    return this.http.put<Auction>(`${this.AUCTION_URL}/${id}/comment`, comment);
  }

  updateBid(id: string, bid: Bid): Observable<Auction> {
    const customerJson = localStorage.getItem("customer");
    if (customerJson)
    {
      const customer = JSON.parse(customerJson)

      bid.userId = customer.id;
      bid.username = customer.username;
    }
    return this.http.put<Auction>(`${this.AUCTION_URL}/${id}/bid`, bid);
  }

  getAuctionById(id: string, auctionList: Auction[]): Auction | undefined {
  return auctionList.find(a => a.id === id);
}

}
