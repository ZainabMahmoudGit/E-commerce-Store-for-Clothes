import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  counter :number=0;
  constructor(private counterservice :SharedService){}
    ngOnInit(){

      this.counterservice.getcount().subscribe((value)=>this.counter=value);
      
    }


}
