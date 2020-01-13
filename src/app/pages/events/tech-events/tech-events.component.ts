import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;


@Component({
  selector: 'app-tech-events',
  templateUrl: './tech-events.component.html',
  styleUrls: ['./tech-events.component.css']
})
export class TechEventsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
    $(function () {
      $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
          card.removeClass('mc-active');

          window.setTimeout(function () {
            icon
              .removeClass('fa-arrow-left')
              .removeClass('fa-spin-fast')
              .addClass('fa-bars');

          }, 800);
        } else {
          card.addClass('mc-active');

          window.setTimeout(function () {
            icon
              .removeClass('fa-bars')
              .removeClass('fa-spin-fast')
              .addClass('fa-arrow-left');

          }, 800);
        }
      });
    });
  }

  onOpenNav() {
    this.router.navigate(['navigation']);
  }

}
