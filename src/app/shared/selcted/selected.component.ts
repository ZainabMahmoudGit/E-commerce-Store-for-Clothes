import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selected',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selected.component.html',
  styleUrl: './selected.component.css'
})
export class SelectedComponent {

  @Input() title:any;
  @Input() data:any;
  @Output() sendToParent = new EventEmitter <string>();

detectchange(event :any){
  this.sendToParent.emit(event)

}
}
