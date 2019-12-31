import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    
  }

  onOpenNav(){
    //window.location.href = '/navigation';
    this.router.navigate(['navigation']);
  }

}
