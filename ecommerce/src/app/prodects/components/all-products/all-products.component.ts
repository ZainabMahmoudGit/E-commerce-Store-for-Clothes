import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProdectsService } from '../../services/prodects.service';
import { SelectedComponent } from '../../../shared/selcted/selected.component';
import { ProdectComponent } from '../prodect/prodect.component';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule,SelectedComponent,ProdectComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent {
  sharedService=inject(SharedService);
 
  products:any;
  constructor(private prodect: SharedService){}
  ngOnInit(){
     this.prodect.getAllprodect().subscribe((res)=>{ this.products=res});

  }
  
  Addtocart(prodect:any){
    this.sharedService.Addtocart(prodect)

  }
}
