import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
  ]
})
export class SharedModule { }
