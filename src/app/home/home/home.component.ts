import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/model/product';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService:ProductsService ) {}

  ngOnInit(): void {
  }


    

}
