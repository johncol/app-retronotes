import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewNoteFormComponent } from '../../../new-note/components/new-note-form/new-note-form.component';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent {
  @Input() items: number;

  constructor(
    private dialog: MatDialog
  ) { }

  displayDialog(): void {
    let dialogRef = this.dialog.open(NewNoteFormComponent, {
      width: '600px',
    });
  }

}
