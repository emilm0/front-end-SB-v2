import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataLinesService implements InMemoryDbService{

  createDb(): any {
    const songs = [

    ];
    return {songs};
  }

  getFirstTitleLetter(song: Song): string {
    return song.titlePl.slice(0, 1);
  }

  // !!!!!!!!!!  check this feature  !!!!!!!!
  findTheHighestIdNumber(songs: Song[]): number {
    return songs.length > 0 ? Math.max(...songs.map(song => +song.id.slice(1))) + 1 : 1;
  }

  genId(song: Song, songs: Song[]): string {
    return this.getFirstTitleLetter(song) + this.findTheHighestIdNumber(songs).toString();
  }

}
