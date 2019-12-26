export class LinkedList {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }

  shift() {
    return this.elements.shift();
  }

  unshift(element) {
    this.elements.unshift(element);
  }

  delete(value) {
    for (let index = 0; index < this.count(); index++) {
      if (this.elements[index] === value) {
        this.elements.splice(index, 1);
        break;
      }
    }
  }

  count() {
    return this.elements.length;
  }
}
