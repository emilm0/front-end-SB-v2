import { NgModule } from '@angular/core';
import { MeetingsRoutingModule } from './meetings-routing.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


// http modules
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

// components
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingAddingComponent } from './meeting-adding/meeting-adding.component';

// services
import { InMemoryDataService } from '../in-memory-data.service';
import { SharedModule } from '../shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



const dataPickerModules = [
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  declarations: [
    MeetingsListComponent,
    MeetingDetailsComponent,
    MeetingAddingComponent],
  imports: [
    SharedModule,
    dataPickerModules,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
