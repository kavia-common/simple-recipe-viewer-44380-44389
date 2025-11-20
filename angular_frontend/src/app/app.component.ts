import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Root application component setting up router outlet and common template features.
 * PUBLIC_INTERFACE
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  // Add a minimal header for root + router outlet to prevent blank preview and satisfy spec expectations
  template: `
    <h1>Hello, angular</h1>
    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {}
