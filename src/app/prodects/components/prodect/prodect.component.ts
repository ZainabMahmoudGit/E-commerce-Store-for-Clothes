import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

import { Router, provideRouter, RouterLink } from '@angular/router';
@Component({
  selector: 'app-prodect',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './prodect.component.html',
  styleUrl: './prodect.component.css'
})
export class ProdectComponent {
  @Input() data2:any={}
@Output() item=new EventEmitter()

  add(){
this.item.emit(this.data2)
  }

  counter :number=0;
  constructor(private counterservice :SharedService ,private router:Router){}
    ngOnInit(){

      this.counterservice.getcount().subscribe((value)=>this.counter=value);
   
    }
    decrese(){
      this.counterservice.Updatacount(this.counter -1)
      
    }
    increse(){
      this.counterservice.Updatacount(this.counter +1)
    }
    handNavigetor(id:string ){
      this.router.navigate(['/prodect-details',id])
  
    }
}
