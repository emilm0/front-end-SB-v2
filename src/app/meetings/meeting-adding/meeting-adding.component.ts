import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-meeting-adding',
  templateUrl: './meeting-adding.component.html',
  styleUrls: ['./meeting-adding.component.css']
})
export class MeetingAddingComponent implements OnInit {

  author: string;
  minDate: Date;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.minDate = new Date();
  }

  gotoMeetings(): void {
    this.router.navigate(['meetings']);
  }
}
