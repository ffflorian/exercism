enum DIRECTION {
  EAST = 'east',
  NORTH = 'north',
  SOUTH = 'south',
  WEST = 'west',
}

enum INSTRUCTION {
  ADVANCE = 'advance',
  TURN_LEFT = 'turnLeft',
  TURN_RIGHT = 'turnRight',
}

interface Coordinates {
  direction?: string;
  x?: number;
  y?: number;
}

export class InvalidInputError extends Error {
  constructor() {
    super();
    this.message = 'Invalid Robot Bearing';
  }
}

export class Robot {
  public bearing?: DIRECTION;
  public coordinates?: [number, number];

  constructor() {
    this.place();
  }

  public advance(): void {
    if (typeof this.coordinates === 'undefined') {
      return;
    }

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
    return [...letters].map(letter => {
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

  public place(coordinates?: Coordinates): void {
    if (coordinates?.direction && !Object.values(DIRECTION).includes(coordinates?.direction as DIRECTION)) {
      throw new InvalidInputError();
    }
    this.bearing = (coordinates?.direction as DIRECTION) || DIRECTION.NORTH;
    this.coordinates = [coordinates?.x || 0, coordinates?.y || 0];
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
