import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { addProduct, deleteProductRes, Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  
  constructor(private http:HttpClient,) { }

  ngOnInit() {


  }

  getAllProducts() {
    return this.http.get(environment.baseApi + 'products');
    

  }

  //this show how to simulate a POST,update and delete requests,, not add to server 

              

  createProduct(model: addProduct) {
    const authentiatetoken = new HttpHeaders({
      'authenticationKey':'test'
    });
  
    return this.http.post(environment.baseApi + 'products/add',model,{headers:authentiatetoken})
  }

  deleteProduct(id:number) {
    return this.http.delete(environment.baseApi+  'products/'+ id)
  }

  updateProduct(id:any,data:any)
  {
    return this.http.put(environment.baseApi+  'products/'+id, data);
  }


  getProductById(id:any) { 
    return this.http.get(environment.baseApi+  'products/'+ id); 
  }

}
