import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorDashboardComponent } from './editor-dashboard/editor-dashboard.component';
import { SongEditorComponent } from './song-editor/song-editor.component';

const editorRoutes: Routes = [
  { path: 'editor-dashboard', component: EditorDashboardComponent },
  { path: 'song-editor/:id', component: SongEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(editorRoutes)],
  exports: [RouterModule]
})
export class EditorRoutingModule { }
