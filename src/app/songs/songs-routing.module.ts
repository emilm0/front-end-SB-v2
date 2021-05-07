import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongComponent } from './song/song.component';

const songsRoutes: Routes = [
  { path: 'songs-list', component: SongsListComponent },
  { path: 'song/:id', component: SongComponent },
];

@NgModule({
  imports: [RouterModule.forChild(songsRoutes)],
  exports: [RouterModule]
})
export class SongsRoutingModule { }
