import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})
export class AboutUsPageComponent implements OnInit {

  constructor(private router : Router) {}


  ngOnInit() {
  }
  onOpenNav(){
    this.router.navigate(['navigation']);
  }

  toHome(){
    this.router.navigate(['home']);
  }
}
