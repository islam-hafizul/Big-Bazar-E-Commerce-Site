import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: any = {
    email: '',
    password: ''
  }

  constructor(private router: Router) {}
  
  onLogin() {
    if (this.loginObj.email == "admin" && this.loginObj.password == "12341234") {
      this.router.navigateByUrl('/products');
    } else{
      console.log('Invalid credentials');
    }
  }
}
