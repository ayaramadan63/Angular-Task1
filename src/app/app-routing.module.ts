import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/services/auth.guard';
import { LoginComponent } from './auth/components/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { ProductFormComponent } from './products/components/product-form/product-form.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',canActivate:[AuthGuard], component: HomeComponent },
  {path:'product-details/:id',component:ProductDetailsComponent},
  {path:'product-list',component:ProductListComponent},
  { path: 'product-form', component: ProductFormComponent },
  { path: '**', redirectTo: 'login' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
