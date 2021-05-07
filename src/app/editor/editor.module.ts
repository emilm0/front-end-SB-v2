// modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorRoutingModule } from './editor-routing.module';

// components
import { EditorDashboardComponent } from './editor-dashboard/editor-dashboard.component';
import { SongEditorComponent } from './song-editor/song-editor.component';


@NgModule({
  declarations: [
    EditorDashboardComponent,
    SongEditorComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
