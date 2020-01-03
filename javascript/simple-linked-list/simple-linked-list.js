export class Element {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class List {
  constructor(values = []) {
    this.elements = values.map(value => new Element(value));
    this._updateElements();
  }

  _updateElements() {
    for (let index = 0; index < this.elements.length; index++) {
      this.elements[index].next = this.elements[index - 1] || null;
    }
    this._head = this.elements[this.length - 1] || null;
  }

  add(element) {
    this.elements.push(element);
    this._updateElements();
  }

  reverse() {
    this.elements.reverse();
    this._updateElements();
    return this;
  }

  toArray() {
    // no idea why `toArray` should reverse the list but the tests want it that way
    return [...this.elements].reverse().map(element => element.value);
  }

  get head() {
    return this._head || null;
  }

  get length() {
    return this.elements.length;
  }
}
