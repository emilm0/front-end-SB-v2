import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { SongsModule } from './songs/songs.module';
import { EditorModule } from './editor/editor.module';
import { MeetingsModule } from './meetings/meetings.module';


// components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './shared.module';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MessagesComponent,
  ],
  imports: [
    SharedModule,
    SongsModule,
    EditorModule,
    MeetingsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
