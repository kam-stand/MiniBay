import { Bid } from "./bid";
import { Comment } from "./comment";
import { Product } from "./product";
export class Auction {
    public id: string = ''
    public datePosted: Date = new Date()
    public dateEnd: Date = new Date()
    public product: Product = new Product()
    public currentBid: number = 0
    public comments: Comment[] = []
    public bids: Bid[] = []
}