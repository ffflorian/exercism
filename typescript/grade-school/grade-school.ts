export default class GradeSchool {
  private readonly roster: Map<string, string[]>;

  constructor() {
    this.roster = new Map<string, string[]>();
  }

  addStudent(name: string, grade: number): void {
    const entries = this.roster.get(grade.toString()) || [];
    entries.push(name);
    this.roster.set(grade.toString(), entries.sort());
  }

  studentRoster(): Map<string, string[]> {
    const map = new Map();
    [...this.roster.keys()].forEach(value => map.set(value, this.studentsInGrade(parseInt(value, 10))));
    return map;
  }

  studentsInGrade(grade: number): string[] {
    const entry = this.roster.get(grade.toString());
    if (typeof entry === 'undefined') {
      return [];
    }
    return [...entry.sort()];
  }
}
