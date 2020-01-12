import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tech-events',
  templateUrl: './tech-events.component.html',
  styleUrls: ['./tech-events.component.css']
})
export class TechEventsComponent implements OnInit {


  constructor(private router : Router) { }

  ngOnInit() {
  }

  onOpenNav(){
    this.router.navigate(['navigation']);
  }

}
