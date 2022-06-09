// modules
import { NgModule } from '@angular/core';
import { EditorRoutingModule } from './editor-routing.module';

// components
import { EditorDashboardComponent } from './editor-dashboard/editor-dashboard.component';
import { SongEditorComponent } from './song-editor/song-editor.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    EditorDashboardComponent,
    SongEditorComponent
  ],
  imports: [
    SharedModule,
    EditorRoutingModule,
  ]
})
export class EditorModule { }
