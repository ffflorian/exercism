export default class List<T = number> {
  public items: T[];

  constructor(items?: T[]) {
    this.items = items || [];
  }
  get values(): T[] {
    return this.items;
  }

  append(list: List<T>): List<T> {
    for (let itemsIndex = this.items.length, appendIndex = 0; appendIndex < list.items.length; appendIndex++) {
      this.items[itemsIndex] = list.items[appendIndex];
      itemsIndex++;
    }
    return this;
  }

  concat(list: List<T | List<T>>): List<T> {
    const concatenated = this.duplicate<T | T[]>(this.items);
    for (let index = 0; index < list.items.length; index++) {
      const itemOrList = list.items[index];
      concatenated[index + concatenated.length] = itemOrList instanceof List ? itemOrList.items : itemOrList;
    }
    const flattened = this.flatten(concatenated);
    return new List(flattened).filter(item => typeof item !== 'undefined');
  }

  filter(validateFn: (item: T) => boolean): List<T> {
    const filtered = [];
    for (let itemsIndex = 0, filteredIndex = 0; itemsIndex < this.items.length; itemsIndex++) {
      if (validateFn(this.items[itemsIndex])) {
        filtered[filteredIndex] = this.items[itemsIndex];
        filteredIndex++;
      }
    }
    return new List(filtered);
  }

  foldl<V = T>(foldFn: (accumulator: V, item: T) => V, initialValue: V): V {
    let accumulator = initialValue;
    for (let index = 0; index < this.items.length; index++) {
      accumulator = foldFn(accumulator, this.items[index]);
    }
    return accumulator;
  }

  foldr<V = T>(foldFn: (accumulator: V, item: T) => V, initialValue: V): V {
    let accumulator = initialValue;
    for (let index = this.items.length - 1; index >= 0; index--) {
      accumulator = foldFn(accumulator, this.items[index]);
    }
    return accumulator;
  }

  length(): number {
    return this.items.length;
  }

  map(modifierFn: (item: T) => T): List<T> {
    const mapped = [];
    for (let index = 0; index < this.items.length; index++) {
      mapped[index] = modifierFn(this.items[index]);
    }
    return new List(mapped);
  }

  reverse(): List<T> {
    const reversed = [];
    for (let reversedIndex = 0, itemsIndex = this.items.length - 1; reversedIndex < this.items.length; itemsIndex--) {
      reversed[reversedIndex] = this.items[itemsIndex];
      reversedIndex++;
    }
    return new List(reversed);
  }

  private duplicate<U>(array: U[]): U[] {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result[i] = array[i];
    }
    return result;
  }

  private flatten<U>(array: Array<U | U[]>, result?: U[]): U[];
  private flatten<U>(array: Array<U[] | U[][]>, result: U[] = []): U[] {
    for (let i = 0, length = array.length; i < length; i++) {
      const value = array[i];
      if (Array.isArray(value)) {
        this.flatten(value, result);
      } else {
        result.push(value);
      }
    }
    return result;
  }
}
