import { Reviews } from "./reviews";

export class Product {

constructor(
    public name: string = '',
    public userId: number = 0,
    public brand: string = '',
    public categories: string[] = [],
    public price: number = 0,
    public auction: boolean = true,
    public averageRating: number = 0,
    public description: string = '',
    public reviews: Reviews[] = []
    
  ) {}

    splitCategories(categories: string): string[] {
        return categories.split(" ");
        
    }

    
}