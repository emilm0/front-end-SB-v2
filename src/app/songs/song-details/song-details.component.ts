import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SongService } from '../song.service';
import { Song } from '../song';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Line } from '../Line';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {

  song$: Observable<Song>;
  songLines: Line[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private songService: SongService,
  ) { }

  ngOnInit(): void {
    this.song$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.songService.getSong(params.get('id')))
    );
  }

  gotoSongs(song: Song): void {
    const songId = song ? song.id : null;
    this.router.navigate(['/songs', { id: songId }]);
  }

}
