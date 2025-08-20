import { Navbar } from "../navbar/navbar";
import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";



@Component({
  selector: 'app-products',
  imports: [Navbar, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}
