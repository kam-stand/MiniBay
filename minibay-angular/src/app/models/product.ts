export class Product {

constructor(
    public name: string = '',
    public userId: number = 0,
    public brand: string = '',
    public categories: string[] = [],
    public price: number = 0,
    public auction: boolean = true
  ) {}

    splitCategories(categories: string): string[] {
        return categories.split(" ");
        
    }

    
}