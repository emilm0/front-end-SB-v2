import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsRoutingModule } from './songs-routing.module';

// http modules
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';

// components
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongDetailsComponent } from './song-details/song-details.component';

// services
import { InMemoryDataService } from '../in-memory-data.service';
import { LyricsComponent } from './lyrics/lyrics.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    SongsListComponent,
    SongDetailsComponent,
    LyricsComponent,
  ],
  imports: [
    SharedModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    SongsRoutingModule,
  ]
})
export class SongsModule { }
