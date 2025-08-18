import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth-service';
import { Router } from '@angular/router';
interface customerRequest {
  email: string;
  phoneNumber: string;
  username:string;
  password:string
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {


   signupRequest: customerRequest = {
    username: '',
    password: '',
    email: '',
    phoneNumber: ''
  }
  constructor (private authService: AuthService, private router:Router) {}

  submitSignUp(event:Event) {
    event.preventDefault();
    console.log('Form submitted')
    console.log('Username ' + this.signupRequest.username);
    console.log('Email: ' + this.signupRequest.email);
    console.log('Phone number ' + this.signupRequest.phoneNumber);
    console.log('Password: ' + this.signupRequest.password);

    this.authService.registerUser(this.signupRequest).subscribe({
      next: (response) => {
        console.log("register success: ", response);
        this.authService.saveUser(response);
        this.router.navigate(['/home'])
      },
      error: (err) => {
        console.log("Register fail", err)
        alert("Cannot register user exists with email or username");
      }
    })
    

  }

}
