import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SONGS } from './SONGS';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor() { }

  getSongs(): Observable<Song[]>{
    return of(SONGS);
  }
}
