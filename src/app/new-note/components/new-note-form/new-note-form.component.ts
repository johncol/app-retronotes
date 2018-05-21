import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoteType } from '../../../dashboard/models/note-type';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../dashboard/models/note.model';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-note-form',
  templateUrl: './new-note-form.component.html',
  styleUrls: ['./new-note-form.component.scss']
})
export class NewNoteFormComponent implements OnInit {
  formWasSubmitted: boolean = false;
  form: FormGroup;
  types: NoteType[];

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    public wrapperDialog: MatDialogRef<NewNoteFormComponent>
  ) { }

  ngOnInit() {
    this.types = NoteType.all();
    this.form = this.configureForm();
  }

  submit(): void {
    this.formWasSubmitted = true;
    if (this.form.valid) {
      const note: Note = Note.fromFormValue(this.form.value);
      this.noteService.addNew(note);
      this.wrapperDialog.close();
    }
  }

  private configureForm(): FormGroup {
    return this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      type: [NoteType.HAPPY, Validators.required]
    });
  }

}
