import { Component, inject } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';
import { HeadertwoComponent } from '../../../headertwo/headertwo.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HeadertwoComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  sharedService=inject(SharedService);
  deletefromcart(item:any)
  {
    this.sharedService.delete(item);
  }
 
  counter :number=0;
  constructor(private counterservice :SharedService){}
    ngOnInit(){

      this.counterservice.getcount().subscribe((value)=>this.counter=value);
   
    }
    decrese(){
      this.counterservice.Updatacount(this.counter -1)
      
    }
    increse(){
      this.counterservice.Updatacount(this.counter +1)
    }
   
}
