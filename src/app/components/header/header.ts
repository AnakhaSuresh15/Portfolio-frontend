import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}
  selectedTab = 'home';

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        let path = event.urlAfterRedirects.split('/')[1];
        this.selectedTab = path || 'home';
      });
  }
  handleTabSelection(tab: string) {
    this.selectedTab = tab;
    this.navigateToRoute(this.selectedTab);
  }

  navigateToRoute(selectedTab: string) {
    this.router.navigate(['/' + selectedTab]);
  }
}
