import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { SongsListComponent } from './songs/songs-list/songs-list.component';
import { SongComponent } from './songs/song/song.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'songs-list', component: SongsListComponent },
  { path: 'song/:id', component: SongComponent },
  { path: '', redirectTo: '/songs-list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
