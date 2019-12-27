import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var Rellax : any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePageComponent implements OnInit {
  constructor(private router : Router) {}
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
    var event1 = new Rellax('.circle1',{
      speed : 5,
      center : true, 
    });
    
    var event2 = new Rellax('.circle2',{
      speed : -2,
      center : true, 
    });
    
    var event3 = new Rellax('.circle3',{
      speed : 5,
      center : true, 
    });
    
    var event4 = new Rellax('.circle4',{
      speed : -2,
      center : true, 
    });
    
    var event5 = new Rellax('.circle5',{
      speed : 5,
      center : true, 
    });
  }

  onOpenNav(){
    //window.location.href = '/navigation';
    this.router.navigate(['navigation']);
  }
}
