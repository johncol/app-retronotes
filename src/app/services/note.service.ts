import { Injectable, Inject } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { StorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

import { Note } from '../dashboard/models/note.model';

const STORAGE_KEY: string = 'retro-note';

@Injectable({ providedIn: 'root' })
export class NoteService {
  private list: Note[];
  public notes: Subject<Note[]>; // expose as observable
  
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    this.list = this.gerFromStorage();
    this.notes = new BehaviorSubject(this.list);
  }

  addNew(note: Note): void {
    this.updateList(() => this.list.push(note.clone()));
  }

  remove(noteToRemove: Note): void {
    const index: number = this.list.findIndex(note => note.isEqualTo(noteToRemove));
    if (index !== -1) {
      this.updateList(() => this.list.splice(index, 1));
    }
  }

  private updateList(update: () => void): void {
    update();
    this.notifyUpdate();
    this.updateStorage(this.list);
  }

  private notifyUpdate(): void {
    this.notes.next(this.list.map(note => note.clone()));
  }

  private updateStorage(list: Note[]): void {
    this.storage.set(STORAGE_KEY, list);
  }

  private gerFromStorage(): Note[] {
    const data: any = this.storage.get(STORAGE_KEY);
    if (data == null) {
      this.updateStorage([]);
    }
    return <Array<any>>this.storage.get(STORAGE_KEY)
      .map(rawNote => Note.fromStorageValue(rawNote));
  }
}
