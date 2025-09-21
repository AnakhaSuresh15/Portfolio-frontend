import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  navigateToProject(index: Number) {
    if (index === 1) {
      window.open('https://anakhasuresh15.github.io/Tic-Tac-Toe/', '_blank');
    } else if (index === 2) {
      window.open('https://github.com/AnakhaSuresh15/FoodDash', '_blank');
    } else if (index === 3) {
      window.open('https://github.com/AnakhaSuresh15/WeTalk', '_blank');
    }
  }
}
