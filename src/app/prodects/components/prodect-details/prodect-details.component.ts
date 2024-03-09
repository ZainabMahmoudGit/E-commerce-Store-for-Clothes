import { Component } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-prodect-details',
  standalone: true,
  imports: [],
  templateUrl: './prodect-details.component.html',
  styleUrl: './prodect-details.component.css'
})
export class ProdectDetailsComponent {

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
