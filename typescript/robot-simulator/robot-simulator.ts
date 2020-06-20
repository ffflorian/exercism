enum DIRECTION {
  NORTH = 'north',
  EAST = 'east',
  SOUTH = 'south',
  WEST = 'west',
}

enum INSTRUCTION {
  ADVANCE = 'advance',
  TURN_LEFT = 'turnLeft',
  TURN_RIGHT = 'turnRight',
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

  public at(x: number, y: number): void {
    this.coordinates = [x, y];
  }

  public evaluate(input: string): void {
    const instructions = this.instructions(input);

    for (const instruction of instructions) {
      switch (instruction) {
        case INSTRUCTION.ADVANCE: {
          this.advance();
          break;
        }
        case INSTRUCTION.TURN_LEFT: {
          this.turnLeft();
          break;
        }
        case INSTRUCTION.TURN_RIGHT: {
          this.turnRight();
          break;
        }
      }
    }
  }

  public instructions(letters: string): INSTRUCTION[] {
    return letters.split('').map(letter => {
      switch (letter) {
        case 'A': {
          return INSTRUCTION.ADVANCE;
        }
        case 'L': {
          return INSTRUCTION.TURN_LEFT;
        }
        case 'R': {
          return INSTRUCTION.TURN_RIGHT;
        }
        default: {
          throw new Error('Invalid direction');
        }
      }
    });
  }

  public orient(direction: string): void {
    if (!Object.values(DIRECTION).includes(direction as DIRECTION)) {
      throw new Error('Invalid Robot Bearing');
    }
    this.bearing = direction as DIRECTION;
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
}
