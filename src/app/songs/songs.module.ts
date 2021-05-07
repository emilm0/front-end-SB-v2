import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';

// components
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongDetailsComponent } from './song-details/song-details.component';


@NgModule({
  declarations: [
    SongsListComponent,
    SongDetailsComponent,
  ],
  imports: [
    CommonModule,
    SongsRoutingModule
  ]
})
export class SongsModule { }
