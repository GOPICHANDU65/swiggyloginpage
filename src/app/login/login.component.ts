import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  onLogin() {
    const { email, password } = this.loginData;

    // Simulate checking against hardcoded credentials
    if (email === 'gopichandnaidu65@gmail.com' && password === '7893118151  ') {
      alert('Login successful!');
      // Navigate to a different page, e.g., home page
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}