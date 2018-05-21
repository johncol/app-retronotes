export class NoteType {
  static readonly HAPPY: NoteType = new NoteType('HAPPY');
  static readonly UNHAPPY: NoteType = new NoteType('UNHAPPY');

  static all(): NoteType[] {
    return [NoteType.HAPPY, NoteType.UNHAPPY];
  }

  static fromValue(value: string): NoteType {
    if (value === NoteType.HAPPY.type) {
      return NoteType.HAPPY;
    }
    if (value === NoteType.UNHAPPY.type) {
      return NoteType.UNHAPPY;
    }
    throw new Error('unknown value: ' + value);
  }

  private constructor(public readonly type: string) { }

  isHappy(): boolean { return this === NoteType.HAPPY; }
  isUnhappy(): boolean { return this === NoteType.UNHAPPY; }
}
