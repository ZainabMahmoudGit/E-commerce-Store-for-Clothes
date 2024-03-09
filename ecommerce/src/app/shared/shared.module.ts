import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SelectedComponent } from './selcted/selected.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,HeaderComponent,SelectedComponent,HttpClientModule, 
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
