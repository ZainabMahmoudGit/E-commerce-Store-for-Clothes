import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLinkActive,RouterLink,HeaderComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent { gameForm: FormGroup;

  constructor() {
     this.gameForm = new FormGroup({
        fname: new FormControl('', [
         Validators.required,
         Validators.minLength(3),
         
       ]), 
       lname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
         ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      birthday: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/),
      ])
    });
  }
  handelForm() {

    console.log(this.gameForm);
  }

}

 


