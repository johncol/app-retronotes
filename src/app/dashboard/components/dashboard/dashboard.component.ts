import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  notes: Note[];
  
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.notes.subscribe(notes => this.notes = notes);
  }
}
