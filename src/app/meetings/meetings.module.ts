import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MeetingsRoutingModule } from './meetings-routing.module';

import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingAddingComponent } from './meeting-adding/meeting-adding.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMeetingsDataService } from './in-memory-meetings-data.service';


@NgModule({
  declarations: [
    MeetingsListComponent,
    MeetingDetailsComponent,
    MeetingAddingComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryMeetingsDataService, { dataEncapsulation: false }
    ),
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
