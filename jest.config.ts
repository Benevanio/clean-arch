module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',

  transform: {
    '^.+\\.ts$': 'ts-jest',
  },

  moduleFileExtensions: ['ts', 'js', 'json'],

  testRegex: '.*\\.spec\\.ts$',

  clearMocks: true,
}
