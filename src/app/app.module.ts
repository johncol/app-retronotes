import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StorageServiceModule } from 'angular-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NewNoteModule } from './new-note/new-note.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewNoteFormComponent } from './new-note/components/new-note-form/new-note-form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    NewNoteModule,
    StorageServiceModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  entryComponents: [NewNoteFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
