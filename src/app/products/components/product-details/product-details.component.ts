import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: any;
  data: any = {};


  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    
  ) {
    this.id= this.route.snapshot.paramMap.get("id")
   }

  ngOnInit() {

    this.getProduct();
  }

  getProduct() {
    this.productService.getProductById(this.id)
      .subscribe((res:any) => {
        this.data = res;
      },
        error => {
          alert(error)
        }
      );
  }

  

  
  

}
