import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../models/note.model';
import { NoteService } from '../../../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() index: number;
  @Input() note: Note;
  availableGradients: number;
  expanded: boolean;
  gradientClass: string;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.initComponentState();
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  cardClassList(): any {
    return {
      [this.gradientClass]: true,
      'card--expanded': this.expanded
    };
  }

  removeNote(event: any): void {
    if (this.expanded) {
      event.preventDefault();
      this.noteService.remove(this.note);
    }
  }

  private initComponentState(): void {
    this.expanded = false;
    this.availableGradients = 5;
    this.gradientClass = this.buildGradientClass();
  }

  private buildGradientClass(): string {
    return 'card--gradient-' + (this.index % this.availableGradients);
  }

}
