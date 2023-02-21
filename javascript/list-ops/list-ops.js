export class List {
  constructor(items) {
    this.items = items || [];
  }

  get values() {
    return this.items;
  }

  _duplicate(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = array[i];
    }
    return result;
  }

  _flatten(array, result = []) {
    for (let i = 0, length = array.length; i < length; i++) {
      const value = array[i];
      if (Array.isArray(value)) {
        this._flatten(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  }

  append(list) {
    for (let appendIndex = 0, itemsIndex = this.items.length; appendIndex < list.items.length; appendIndex++) {
      this.items[itemsIndex] = list.items[appendIndex];
      itemsIndex++;
    }
    return this;
  }

  concat(list) {
    const concatenated = this._duplicate(this.items);
    for (let index = 0; index < list.items.length; index++) {
      const itemOrList = list.items[index];
      concatenated[index + concatenated.length] = itemOrList instanceof List ? itemOrList.items : itemOrList;
    }
    const flattened = this._flatten(concatenated);
    return new List(flattened).filter(item => typeof item !== 'undefined');
  }

  filter(validateFn) {
    const filtered = [];
    for (let filteredIndex = 0, itemsIndex = 0; itemsIndex < this.items.length; itemsIndex++) {
      if (validateFn(this.items[itemsIndex])) {
        filtered[filteredIndex] = this.items[itemsIndex];
        filteredIndex++;
      }
    }
    return new List(filtered);
  }

  map(modifierFn) {
    const mapped = [];
    for (let index = 0; index < this.items.length; index++) {
      mapped[index] = modifierFn(this.items[index]);
    }
    return new List(mapped);
  }

  length() {
    return this.items.length;
  }

  foldl(foldFn, initialValue) {
    let accumulator = initialValue;
    for (let index = 0; index < this.items.length; index++) {
      accumulator = foldFn(accumulator, this.items[index]);
    }
    return accumulator;
  }

  foldr(foldFn, initialValue) {
    let accumulator = initialValue;
    for (let index = this.items.length - 1; index >= 0; index--) {
      accumulator = foldFn(accumulator, this.items[index]);
    }
    return accumulator;
  }

  reverse() {
    const reversed = [];
    for (let itemsIndex = this.items.length - 1, reversedIndex = 0; reversedIndex < this.items.length; itemsIndex--) {
      reversed[reversedIndex] = this.items[itemsIndex];
      reversedIndex++;
    }
    return new List(reversed);
  }
}
