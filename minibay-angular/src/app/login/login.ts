import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth-service';
import { Router } from '@angular/router';
interface customerLogin {
  username:string;
  password:string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {


  loginRequest: customerLogin = {
    username: '',
    password: ''
  }

  constructor (private authService: AuthService, private router: Router) {}

  submitLogin(event:Event) {
    event.preventDefault();
    console.log('Form submitted')
    console.log('Password: ' + this.loginRequest.password);
    console.log('Username: ' + this.loginRequest.username);
    console.log('LoginRequest object: ' + this.loginRequest);
    this.authService.loginUser(this.loginRequest).subscribe({
    next: (response) => {
      console.log("Login success:", response);
      this.authService.saveUser(response);
      this.router.navigate(['/home'])
      
      
    },
    error: (err) => {
      console.error("Login failed:", err);
      alert("Invalid credentials!");
    }
  });

  }

}
