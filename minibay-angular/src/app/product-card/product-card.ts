import { Component, Input, ChangeDetectionStrategy, Signal, signal } from '@angular/core';
import { Product } from '../models/product';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion'; 
 @Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatDividerModule, MatExpansionModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCard {
  @Input() productList: Product[] = [];
    readonly panelOpenState = signal(false);
}
