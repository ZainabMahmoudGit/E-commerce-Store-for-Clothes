import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CartComponent } from './cats/components/cart/cart.component';
import { ProdectDetailsComponent } from './prodects/components/prodect-details/prodect-details.component';
import { AllProductsComponent } from './prodects/components/all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    { path:"header", component:HeaderComponent},
    { path:"carts", component:CartComponent},
    { path:"login", component:LoginComponent},
    { path:"", component:SignUpComponent},
    { path:"prodects", component:AllProductsComponent},
    { path:"details", component:AllProductsComponent},
    { path:"**", component:HeaderComponent},


];
