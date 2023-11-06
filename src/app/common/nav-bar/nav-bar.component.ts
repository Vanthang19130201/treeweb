import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  logoImage = 'Image/Cay-kim-ngan-thuy-sinh-to-dep-420x420.jpg';
  constructor() { }

  ngOnInit() {
  }

}
