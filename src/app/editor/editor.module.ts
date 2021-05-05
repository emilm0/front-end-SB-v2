import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';

import { EditorDashboardComponent } from './editor-dashboard/editor-dashboard.component';
import { LyricsEditorComponent } from './lyrics-editor/lyrics-editor.component';
import { FormEditorComponent } from './form-editor/form-editor.component';


@NgModule({
  declarations: [
    EditorDashboardComponent,
    LyricsEditorComponent,
    FormEditorComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule
  ]
})
export class EditorModule { }
