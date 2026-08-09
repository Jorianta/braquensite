import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBarComponent } from "./nav-bar/app-tool-bar.component";
import { BannerComponent } from './components/banner.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavBarComponent, BannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('braquen');
}
