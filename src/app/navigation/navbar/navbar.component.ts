import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  onClose(){
    this.router.navigate(['home']);
  }

  onHomeClick(){
    this.router.navigate(['home']);
  }

  onAboutUsClick(){
    this.router.navigate(['about-us']);
  }

  onSponsorsClick(){
    this.router.navigate(['sponsors']);
  }

  onEventsClick(){
    this.router.navigate(['events']);
  }

  

}
