import { Component, EventEmitter, Input, Output } from '@angular/core';

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

}
