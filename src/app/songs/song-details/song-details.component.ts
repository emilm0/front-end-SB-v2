import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { SongService } from '../song.service';
import { Song } from '../song';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Line } from '../Line';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height: '0',
        overflow: 'hidden',
        opacity: '0',
        visibility: 'hidden'
      })),
      state('final', style({
        overflow: 'hidden'
      })),
      transition('initial<=>final', animate(250))
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)'})),
      state('rotated', style({ transform: 'rotate(180deg)'})),
      transition('default<=>rotated', animate('250ms'))
    ])
  ]
})
export class SongDetailsComponent implements OnInit {

  song$: Observable<Song>;
  songLines: Line[];
  isVisibleDetails = false;
  isLogIn = true;
  faAngleDown = faAngleDown;

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

  changeVisibleDetails(): boolean {
    return this.isVisibleDetails = !this.isVisibleDetails;
  }
}
