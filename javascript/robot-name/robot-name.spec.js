const Robot = require('./robot-name');

describe('Robot', () => {
  // NOTE: The 'beforeEach()' and 'afterEach()' act as setup/teardown for this
  // test suite. See more: http://jasmine.github.io/2.0/introduction.html
  let robot;

  beforeEach(() => {
    robot = new Robot();
  });

  afterEach(() => {
    robot = null;
  });

  it('has a name', () => {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/);
  });

  it('name is the same each time', () => {
    expect(robot.name).toEqual(robot.name);
  });

  it('different robots have different names', () => {
    const differentRobot = new Robot();
    expect(differentRobot.name).not.toEqual(robot.name);
  });

  it('there can be lots of robots with different names each', () => {
    let i;
    const numRobots = 10000;
    const usedNames = {};

    for (i = 0; i < numRobots; i++) {
      const newRobot = new Robot();
      usedNames[newRobot.name] = true;
    }

    expect(Object.keys(usedNames).length).toEqual(numRobots);
  });

  it('is able to reset the name', () => {
    const originalName = robot.name;
    robot.reset();
    const newName = robot.name;
    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/);
    expect(originalName).not.toEqual(newName);
  });

  it('should set a unique name after reset', () => {
    let i;
    const numResets = 10000;
    const usedNames = {};

    usedNames[robot.name] = true;

    for (i = 0; i < numResets; i++) {
      robot.reset();
      usedNames[robot.name] = true;
    }

    expect(Object.keys(usedNames).length).toEqual(numResets + 1);
  });
});
