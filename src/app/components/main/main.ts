import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Body } from '../body/body';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [Header, RouterOutlet, CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
  isDarkMode = false;
}
