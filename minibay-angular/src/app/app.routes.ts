import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Landing } from './landing/landing';
import { Home } from './home/home';
import { Products } from './products/products';
import { Profile } from './profile/profile';
import { Orders } from './orders/orders';

export const routes: Routes = [
    {path: '', component:Landing},
    {path: 'login', component:Login},
    {path: 'signup', component:Signup},
    {path: 'home', component:Home},
    {path: 'products', component:Products},
    {path: 'profile', component:Profile},
    {path: 'orders', component:Orders},
    
      
];
