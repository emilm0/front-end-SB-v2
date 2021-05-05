import { Component, OnInit } from '@angular/core';
import { SONGS } from '../SONGS';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  songs = [];

  constructor(private songService: SongService) { }


  getSongs(): void {
    this.songService.getSongs().subscribe(songs =>
      this.songs = songs);
  }

  ngOnInit(): void {
    this.getSongs();
  }



}
