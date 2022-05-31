export class GradeSchool {
  private readonly _roster: Record<number, string[]>;

  constructor() {
    this._roster = {};
  }

  add(name: string, grade: number): void {
    for (const gradeIndex in this._roster) {
      const nameIndex = this._roster[gradeIndex].findIndex(entry => entry === name);
      if (nameIndex !== -1) {
        this._roster[gradeIndex].splice(nameIndex);
      }
    }

    const entries = this._roster[grade] || [];
    entries.push(name);
    this._roster[grade] = entries.sort();
  }

  grade(grade: number): string[] {
    const entry = this._roster[grade];
    if (typeof entry === 'undefined') {
      return [];
    }
    return [...entry.sort()];
  }

  roster(): Record<number, string[]> {
    return JSON.parse(JSON.stringify(this._roster));
  }
}
