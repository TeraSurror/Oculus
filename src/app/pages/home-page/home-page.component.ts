import { Component, OnInit } from '@angular/core';
declare var Rellax : any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    var introImgRellax = new Rellax('.intro-img',{
      speed : 5,
      center : true
    });
    var introTextRellax = new Rellax('.intro-txt',{
      speed : -2,
      center : true
    });
    var mockUpImgRellax = new Rellax('.ad-img',{
      speed : 5,
      center : true,      
    });
  }
}
