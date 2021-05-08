import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingsListComponent } from './meetings-list/meetings-list.component';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { MeetingAddingComponent } from './meeting-adding/meeting-adding.component';

const meetingsRoutes: Routes = [
  { path: 'meetings', component: MeetingsListComponent },
  { path: 'meeting/:id', component: MeetingDetailsComponent },
  { path: 'meeting-adding', component: MeetingAddingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(meetingsRoutes)],
  exports: [RouterModule]
})
export class MeetingsRoutingModule { }
