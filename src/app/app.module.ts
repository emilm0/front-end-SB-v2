import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SongsModule } from './songs/songs.module';
import { EditorModule } from './editor/editor.module';
import { MeetingsModule } from './meetings/meetings.module';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SongsModule,
    EditorModule,
    MeetingsModule,
    AppRoutingModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
