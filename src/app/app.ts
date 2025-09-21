import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Body } from './components/body/body';
import { Main } from './components/main/main';

@Component({
  selector: 'app-root',
  imports: [Main],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('portfolio');
}
