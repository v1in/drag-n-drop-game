module.exports = {
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!jest.config.js',
  ],
  displayName: 'TESTS',
  setupFiles: ['<rootDir>/setupTests.js'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/public/', '/node_modules/'],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  moduleNameMapper: {
    '.\\.svg$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {'^.+\\.(t|j)sx?$': 'ts-jest'},
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
