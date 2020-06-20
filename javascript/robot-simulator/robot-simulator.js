const DIRECTION = {
  NORTH: 'north',
  EAST: 'east',
  SOUTH: 'south',
  WEST: 'west',
};

const INSTRUCTION = {
  ADVANCE: 'advance',
  TURN_LEFT: 'turnLeft',
  TURN_RIGHT: 'turnRight',
};

export class InvalidInputError extends Error {
  constructor() {
    super();
    this.message = 'Invalid Robot Bearing';
  }
}

export class Robot {
  constructor(coordinateX, coordinateY, direction = '') {
    if (direction && !Object.values(DIRECTION).includes(direction)) {
      throw new InvalidInputError();
    }
    this.place({x: coordinateX, y: coordinateY, direction});
  }

  place(position) {
    this.coordinates = [position.x || 0, position.y || 0];
    this.bearing = position.direction || DIRECTION.NORTH;
  }

  orient(direction) {
    if (!Object.values(DIRECTION).includes(direction)) {
      throw new InvalidInputError();
    }
    this.bearing = direction;
  }

  at(x, y) {
    this.coordinates = [x, y];
  }

  advance() {
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

  turnLeft() {
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

  turnRight() {
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

  static instructions(letters) {
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

  evaluate(input) {
    const instructions = Robot.instructions(input);
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
}
