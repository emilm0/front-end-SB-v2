import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingsRoutingModule } from './meetings-routing.module';

import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingAddingComponent } from './meeting-adding/meeting-adding.component';


@NgModule({
  declarations: [
    MeetingsListComponent,
    MeetingDetailsComponent,
    MeetingAddingComponent],
  imports: [
    CommonModule,
    MeetingsRoutingModule
  ]
})
export class MeetingsModule { }
