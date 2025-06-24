import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './views/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'SystemManagerCar';
}
