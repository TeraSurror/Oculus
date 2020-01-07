import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onOpenNav(){
    this.router.navigate(['navigation']);
  }

  toHome(){
    this.router.navigate(['home']);
  }

}
