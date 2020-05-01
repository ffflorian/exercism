enum DIRECTION {
  NORTH = 'north',
  EAST = 'east',
  SOUTH = 'south',
  WEST = 'west',
}

export default class Robot {
  public bearing: DIRECTION;
  public coordinates: [number, number];

  constructor(coordinateX?: number, coordinateY?: number, direction: string = '') {
    if (direction && !Object.values(DIRECTION).includes(direction as DIRECTION)) {
      throw new Error('Invalid Robot Bearing');
    }
    this.bearing = (direction as DIRECTION) || DIRECTION.NORTH;
    this.coordinates = [coordinateX || 0, coordinateY || 0];
  }

  public orient(direction: string): void {
    if (!Object.values(DIRECTION).includes(direction as DIRECTION)) {
      throw new Error('Invalid Robot Bearing');
    }
    this.bearing = direction as DIRECTION;
  }

  public at(x: number, y: number): void {
    this.coordinates = [x, y];
  }

  public advance(): void {
    switch (this.bearing) {
      case DIRECTION.NORTH: {
        this.coordinates[1]++;
        break;
      }
      case DIRECTION.EAST: {
        this.coordinates[0]++;
        break;
      }
      case DIRECTION.SOUTH: {
        this.coordinates[1]--;
        break;
      }
      case DIRECTION.WEST: {
        this.coordinates[0]--;
        break;
      }
    }
  }

  public turnLeft(): void {
    switch (this.bearing) {
      case DIRECTION.NORTH: {
        this.bearing = DIRECTION.WEST;
        break;
      }
      case DIRECTION.EAST: {
        this.bearing = DIRECTION.NORTH;
        break;
      }
      case DIRECTION.SOUTH: {
        this.bearing = DIRECTION.EAST;
        break;
      }
      case DIRECTION.WEST: {
        this.bearing = DIRECTION.SOUTH;
        break;
      }
    }
  }

  public turnRight(): void {
    switch (this.bearing) {
      case DIRECTION.NORTH: {
        this.bearing = DIRECTION.EAST;
        break;
      }
      case DIRECTION.EAST: {
        this.bearing = DIRECTION.SOUTH;
        break;
      }
      case DIRECTION.SOUTH: {
        this.bearing = DIRECTION.WEST;
        break;
      }
      case DIRECTION.WEST: {
        this.bearing = DIRECTION.NORTH;
        break;
      }
    }
  }

  public instructions(letter: string): void {
    switch (letter) {
      case 'A': {
        this.advance();
        break;
      }
      case 'L': {
        this.turnLeft();
        break;
      }
      case 'R': {
        this.turnRight();
      }
    }
  }

  public evaluate(instructions: string): void {
    instructions.split('').forEach(letter => this.instructions(letter));
  }
}
