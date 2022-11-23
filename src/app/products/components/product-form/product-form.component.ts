import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { addProduct, Product } from '../../model/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {


  products: Product[] = []; 
  model!: addProduct;
  allmodelproduct: any;
  modelList: any;

  form!: FormGroup;

  constructor(private router:Router, private build:FormBuilder,private productService: ProductsService,) { }

  ngOnInit(): void {

     this.form = this.build.group({
      title: ['', Validators.required],
      price: ['',Validators.required],
      category: ['',Validators.required]
      
     }) 
    this.getProducts()
    
  }


   


  AddProduct() {
    const model = {
      title: this.form.value.title,
      price:this.form.value.price,
      category:this.form.value.category,
      
    }
    this.productService.createProduct(model)
      .subscribe((res: any) => {
        this.form.reset()
      })
      //alert("Add product successfully..")

  }

  update(item: any) {
    this.form.patchValue({
      title: item.title,
      price: item.price,
      category: item.category
    })
    this.productService.updateProduct(item,this.model).subscribe((res) => {
      alert("Data Updated");
  
    })

  } 


  getProducts() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.products = res['products'];
      console.log(res)
      console.log("sucess")

    }, error => {
      console.log(error.message)
    })
  }


  Delete(id: number) {
    this.productService.deleteProduct(id).subscribe(res => {
      alert('product deleted !')
    })
  }



}
