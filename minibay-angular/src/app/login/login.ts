import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface login {
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


  loginRequest: login = {
    username: '',
    password: ''
  }

  submitLogin(event:Event) {
    event.preventDefault();
    console.log('Form submitted')
    console.log('Password: ' + this.loginRequest.password);
    console.log('Username ' + this.loginRequest.username);
  }

}
