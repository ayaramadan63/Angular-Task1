import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  p: number = 1;
  count: number = 6;

  constructor(private productSerice:ProductsService) { }

  ngOnInit(): void {


    this.getProducts();
  }
 

  getProducts() {
    this.productSerice.getAllProducts().subscribe((res: any) => {
      this.products = res['products'];
      console.log(res)
      console.log("sucess")

    }, error => {
      console.log(error.message)
    })
  }

 







}
