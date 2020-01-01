import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}

  onOpenNav(){
    //window.location.href = '/navigation';
    this.router.navigate(['navigation']);
  }


  onClickTech(){
    this.router.navigate(['events/technical']);
  }

  onClickFun(){
    this.router.navigate(['events/fun']);
  }

  onClickPArts(){
    this.router.navigate(['events/performing-arts']);
  }

  onClickLit(){
    this.router.navigate(['events/literary']);
  }

  onClickFeat(){
    this.router.navigate(['events/featured']);
  }
}
