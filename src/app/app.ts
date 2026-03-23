import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import AOS from 'aos';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
    ngAfterViewInit() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
}
