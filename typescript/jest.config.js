module.exports = {
  modulePathIgnorePatterns: [
    'package.json',
  ],
  projects: [
    '<rootDir>'
  ],
  testMatch: [
    "**/**/__tests__/**/*.[jt]s?(x)",
    "**/**/test/**/*.[jt]s?(x)",
    "**/**/?(*.)+(spec|test).[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    '/(?:production_)?node_modules/',
    '.d.ts$',
    '<rootDir>/test/fixtures',
    '<rootDir>/test/helpers',
    '__mocks__'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};
