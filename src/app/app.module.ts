import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductFormComponent } from './products/components/product-form/product-form.component';
import { ProductsService } from './products/services/products.service';
import { AuthService } from './auth/services/auth.service';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/services/auth.guard';
import { ProductItemComponent } from './products/components/product-list/product-item/product-item/product-item.component';
import { ObjectToArrPipe } from './products/services/objectToArr.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    HomeComponent,
    HeaderComponent,
    ProductItemComponent,
    ObjectToArrPipe,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  providers: [
    ProductsService,
    AuthService,
    AuthGuard


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
