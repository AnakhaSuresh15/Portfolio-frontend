import { Component } from '@angular/core';
import { Home } from '../home/home';

@Component({
  selector: 'app-body',
  imports: [Home],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {}
