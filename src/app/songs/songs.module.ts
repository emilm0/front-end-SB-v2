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



@NgModule({
  declarations: [
    SongsListComponent,
    SongDetailsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    SongsRoutingModule,
  ]
})
export class SongsModule { }
