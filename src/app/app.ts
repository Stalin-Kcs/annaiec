import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
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
    (AOS as any).init({
      duration: 1000,
      once: true
    });
  }
}
