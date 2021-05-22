import { Component, OnInit, Input } from '@angular/core';
import { LineService } from '../line.service';
import { Line } from '../Line';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.css']
})
export class LyricsComponent implements OnInit {

  @Input() songId: string;
  lines: Line[];

  constructor(
    private lineService: LineService
  ) { }

  ngOnInit(): void {
    console.log(this.songId);
    this.lineService.getLinesFromSong(this.songId)
      .subscribe(lines => this.lines = lines);
  }

}
