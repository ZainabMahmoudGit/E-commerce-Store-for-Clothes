import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { CartComponent } from './cats/components/cart/cart.component';
import { ProdectDetailsComponent } from './prodects/components/prodect-details/prodect-details.component';
import { AllProductsComponent } from './prodects/components/all-products/all-products.component';

export const routes: Routes = [
    { path:"header", component:HeaderComponent},
    { path:"carts", component:CartComponent},
    { path:"ProdectDetails", component:ProdectDetailsComponent},
    { path:"prodects", component:AllProductsComponent},
    { path:"**", component:HeaderComponent},


];
