//@ts-check

/**
 * @template T
 */
export class LinkedList {
  constructor() {
    /** @type {T[]} */
    this.elements = [];
  }

  /**
   * @param {T} element
   */
  push(element) {
    this.elements.push(element);
  }

  /**
   * @returns {T | undefined}
   */
  pop() {
    return this.elements.pop();
  }

  /**
   * @returns {T | undefined}
   */
  shift() {
    return this.elements.shift();
  }

  /**
   * @param {T} element
   */
  unshift(element) {
    this.elements.unshift(element);
  }

  /**
   * @param {T} value
   */
  delete(value) {
    for (let index = 0; index < this.count(); index++) {
      if (this.elements[index] === value) {
        this.elements.splice(index, 1);
        break;
      }
    }
  }

  /**
   * @returns {number}
   */
  count() {
    return this.elements.length;
  }
}
