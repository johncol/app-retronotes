import { Component, Input } from '@angular/core';
import { Note } from '../../models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html'
})
export class NotesListComponent {
  @Input() notes: Note[];
}
