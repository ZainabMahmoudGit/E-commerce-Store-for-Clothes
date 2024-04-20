import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink,CommonModule,FormsModule,HeaderComponent
    
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) {}
  gameFormControls = {
    email : 'Hulk',
    pasaword: '',
   
  }

  handelForm(form :any){
    if(form.valid) {
      console.log(this.gameFormControls)
    
    }
  }
  goToSignup()
  {
    this.router.navigate(['signUp']);
  }
}



