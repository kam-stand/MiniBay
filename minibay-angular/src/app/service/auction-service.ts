import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Bid } from '../models/bid';
import { Auction } from '../models/auction';

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
    return this.http.put<Auction>(`${this.AUCTION_URL}/${id}/comment`, comment);
  }

  updateBid(id: string, bid: Bid): Observable<Auction> {
    return this.http.put<Auction>(`${this.AUCTION_URL}/${id}/bid`, bid);
  }
}
