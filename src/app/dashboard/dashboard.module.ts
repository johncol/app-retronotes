import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { NoteComponent } from './components/note/note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ZeroNotesComponent } from './components/zero-notes/zero-notes.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    NoteComponent,
    NotesListComponent,
    ToolBarComponent,
    DashboardComponent,
    ZeroNotesComponent
  ]
})
export class DashboardModule { }
