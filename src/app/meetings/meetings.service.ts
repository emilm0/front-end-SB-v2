import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MEETINGS } from './MEETINGS';
import { Meeting } from './meeting';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {

  constructor() { }

  getMeetings(): Observable<Meeting[]> {
    return of(MEETINGS);
  }

  getMeeting(id: number): Observable<Meeting> {
    return this.getMeetings().pipe(
      map((meetings: Meeting[]) => meetings.find(meeting => meeting.id === id))
    );
  }
}
