import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    name: '',
    email: '',
    password: ''
  };

  onRegister() {
    console.log('Register Data:', this.registerData);
    // Add your registration logic here
  }
}