export default {
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.js'],
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**'
  ],
  testMatch: [
    '**/__tests__/**/*.test.js',
    '**/tests/**/*.test.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
