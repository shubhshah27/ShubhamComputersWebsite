import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../app/app/shared/navbar/navbar';
import { Footer } from '../app/app/shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  template: `
    <app-navbar></app-navbar>
    <main><router-outlet></router-outlet></main>
    <app-footer></app-footer>
  `,
  styles: [`
    main { min-height: calc(100vh - 120px); display: block; }
  `]
})
export class App {}
