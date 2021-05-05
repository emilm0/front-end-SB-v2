import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongComponent } from './songs/song/song.component';


@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
