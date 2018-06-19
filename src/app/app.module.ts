import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MarkdownEditorComponent } from './md-editor/md-editor.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkdownEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MarkdownEditorComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
