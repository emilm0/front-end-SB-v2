import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongDetailsComponent } from './song-details/song-details.component';

const songsRoutes: Routes = [
  { path: 'songs', component: SongsListComponent },
  { path: 'song/:id', component: SongDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(songsRoutes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
