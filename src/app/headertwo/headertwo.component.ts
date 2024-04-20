import { Component } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-headertwo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headertwo.component.html',
  styleUrl: './headertwo.component.css'
})
export class HeadertwoComponent {
  counter :number=0;
  constructor(private counterservice :SharedService){}
    ngOnInit(){

      this.counterservice.getcount().subscribe((value)=>this.counter=value);
      
    }
}
