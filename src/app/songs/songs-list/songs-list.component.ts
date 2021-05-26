import { Component, OnInit } from '@angular/core';
import { SongService } from '../song.service';
import { Song } from '../song';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K',
              'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'Z'];

  selected = 'A';
  songs: Song[] = [];

  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  getSongs(): void {
    this.songService.getSongs()
      .subscribe(songs => this.songs = songs);
  }

  onSelect(character: string): void {
    this.selected = character;
  }

  isTheSameFirstLetter(song: Song): boolean {
    return (song.titlePl.slice(0, 1) === this.selected);
  }

}
