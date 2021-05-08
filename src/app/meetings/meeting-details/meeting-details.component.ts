import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MeetingsService } from '../meetings.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent implements OnInit {

  meeting$: Observable<Meeting>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private servive: MeetingsService,
  ) { }

  ngOnInit(): void {
    this.meeting$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.servive.getMeeting(+params.get('id')))
    );
  }

  gotoMeetings(meeting: Meeting): void {
    const meetingId = meeting ? meeting.id : null;
    this.router.navigate(['/meetings', { id: meetingId }]);
  }

}
