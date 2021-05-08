import { Component, OnInit } from '@angular/core';
import { MeetingsService } from '../meetings.service';
import { Meeting } from '../meeting';

@Component({
  selector: 'app-meetings-list',
  templateUrl: './meetings-list.component.html',
  styleUrls: ['./meetings-list.component.css']
})
export class MeetingsListComponent implements OnInit {

  meetings: Meeting[];

  constructor(private service: MeetingsService) { }

  getSongs(): void {
    this.service.getMeetings().subscribe(
      meetings => this.meetings = meetings
    );
  }

  ngOnInit(): void {
    this.getSongs();
  }

}
