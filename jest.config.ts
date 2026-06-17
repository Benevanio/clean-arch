module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  moduleFileExtensions: ['ts', 'js', 'json'],

  testRegex: '.*\\.spec\\.ts$',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  clearMocks: true,

  collectCoverage: true,

  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/main.ts',
    '!src/**/*.spec.ts',
    '!src/**/__tests__/**',
    '!src/**/*.module.ts',
  ],

  coverageDirectory: 'coverage',

  coverageReporters: ['text', 'lcov', 'html'],
}
