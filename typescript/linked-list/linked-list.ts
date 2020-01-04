export default class LinkedList<T> {
  private readonly elements: T[];

  constructor() {
    this.elements = [];
  }

  count(): number {
    return this.elements.length;
  }

  delete(value: T): void {
    for (let index = 0; index < this.count(); index++) {
      if (this.elements[index] === value) {
        this.elements.splice(index, 1);
        break;
      }
    }
  }

  pop(): T | undefined {
    return this.elements.pop();
  }

  push(element: T): void {
    this.elements.push(element);
  }

  shift(): T | undefined {
    return this.elements.shift();
  }

  unshift(element: T): void {
    this.elements.unshift(element);
  }
}
