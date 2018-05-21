import { NoteType } from "./note-type";

export class Note {
  private constructor(
    public readonly timestamp: number,
    public readonly type: NoteType,
    public readonly title: string,
    public readonly description: string
  ) { }

  static fromFormValue(value: { type: NoteType, title: string, description: string }): Note {
    return new Note(new Date().getTime(), value.type, value.title, value.description);
  }

  static fromStorageValue(value: { timestamp: number, type: { type: string }, title: string, description: string }): Note {
    return new Note(value.timestamp, NoteType.fromValue(value.type.type), value.title, value.description);
  }

  static happy(title: string, description: string): Note {
    return new Note(new Date().getTime(), NoteType.HAPPY, title, description);
  }

  static unhappy(title: string, description: string): Note {
    return new Note(new Date().getTime(), NoteType.UNHAPPY, title, description);
  }

  isEqualTo(other: Note): boolean {
    return this.timestamp === other.timestamp &&
      this.title === other.title &&
      this.description === other.description;
  }

  clone(): Note {
    return new Note(this.timestamp, this.type, this.title, this.description);
  }
}
