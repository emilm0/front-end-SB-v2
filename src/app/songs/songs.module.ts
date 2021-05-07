import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';

// components
import { SongComponent } from './song/song.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { LyricsComponent } from './lyrics/lyrics.component';


@NgModule({
  declarations: [
    SongComponent,
    SongsListComponent,
    SongDetailsComponent,
    LyricsComponent
  ],
  imports: [
    CommonModule,
    SongsRoutingModule
  ]
})
export class SongsModule { }
