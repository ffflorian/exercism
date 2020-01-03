export class Element {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class List {
  constructor(values = []) {
    this.head = null;
    values.forEach(value => this.add(new Element(value)));
  }

  *[Symbol.iterator]() {
    let pointer = this.head;
    while (pointer) {
      yield pointer;
      pointer = pointer.next;
    }
  }

  add(element) {
    if (this.head === null) {
      this.head = element;
    } else {
      element.next = this.head;
      this.head = element;
    }
  }

  reverse() {
    return new List(this.toArray());
  }

  toArray() {
    return Array.from(this).map(element => element.value);
  }

  get length() {
    return Array.from(this).length;
  }
}
