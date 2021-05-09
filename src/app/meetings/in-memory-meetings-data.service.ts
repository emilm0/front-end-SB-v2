import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { SONGS } from '../songs/SONGS';
import { Meeting } from './meeting';

@Injectable({
  providedIn: 'root'
})
export class InMemoryMeetingsDataService implements InMemoryDbService {

  createDb(): {} {
    const meetings = [
      { id: 1, author: 'Janusz', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(0, 3) },
      { id: 2, author: 'Grażyna', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(3, 6) },
      { id: 3, author: 'Bolek', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(7, 11) },
      { id: 4, author: 'Fred', meetingDate: new Date(), addingDate: new Date(), songsList: SONGS.slice(9, 13) },
    ];
    return {meetings};
  }

  genId(meetings: Meeting[]): number {
    return meetings.length > 0 ? Math.max(...meetings.map(meeting => meeting.id)) + 1 : 1;
  }
}
