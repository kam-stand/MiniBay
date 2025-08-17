import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('minibay-angular');

  
}
