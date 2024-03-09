import { Component, inject } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  sharedService=inject(SharedService);
  deletefromcart(item:any)
  {
    this.sharedService.delete(item);
  }
 
}
