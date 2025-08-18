import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface signup {
  username:string;
  email:string;
  password:string;
  phonenumer: string;
}
@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {


   signupRequest: signup = {
    username: '',
    password: '',
    email: '',
    phonenumer: ''
  }

  submitLogin(event:Event) {
    event.preventDefault();
    console.log('Form submitted')
    console.log('Username ' + this.signupRequest.username);
    console.log('Email: ' + this.signupRequest.email);
    console.log('Phone number ' + this.signupRequest.phonenumer);
    console.log('Password: ' + this.signupRequest.password);
  }

}
