import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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

  getSong(id: string): Observable<Song> {
    return this.getSongs().pipe(
      map((songs: Song[]) => songs.find(song => song.id === id))
    );
  }
}
