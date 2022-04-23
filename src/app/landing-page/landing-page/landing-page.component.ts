import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./scss/landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  imageSrc = 'assets/images/bakery'
  constructor() { }

  ngOnInit(): void {
  }

}
