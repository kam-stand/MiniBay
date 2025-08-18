import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

interface customerLogin {
  username:string;
  password:string;
}

interface customerRequest {
  email: string;
  phoneNumber: string;
  username:string;
  password:string
}

interface customerResponse {

  Id: number;
  email: string;
  username: string

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_GATEWAY_URL;
  constructor(private http: HttpClient) {}
  

  loginUser(loginRequest: customerLogin): Observable<customerResponse> {
    console.log("Making request to: " + this.API_URL);
    console.log("Sending body: " + loginRequest);
    const LOGIN_URL = `${this.API_URL}/customers/login`;
    return this.http.post<customerResponse>(LOGIN_URL, loginRequest);
  }

  registerUser(signupRequest: customerRequest) : Observable<customerResponse> {
    console.log("Making request to: " + this.API_URL);
    console.log("Sending body: " + signupRequest);
    const SIGNUP_URL = `${this.API_URL}/customers/signin`;
    return this.http.post<customerResponse>(SIGNUP_URL, signupRequest);
    
  }


    // store user after login
  saveUser(user: customerResponse): void {
    localStorage.setItem('customer', JSON.stringify(user));
  }

  // get user from local storage

  getUser(): customerResponse | null {
    const stored = localStorage.getItem('customer');
    return stored ? JSON.parse(stored) : null;
  }

  // remove user from storage

  logout(): void {
    localStorage.removeItem('customer');
  }
}
