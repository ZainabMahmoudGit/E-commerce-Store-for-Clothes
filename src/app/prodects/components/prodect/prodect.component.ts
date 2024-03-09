import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../../../shared/services/shared.service';

@Component({
  selector: 'app-prodect',
  standalone: true,
  imports: [],
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
