module.exports = {
  roots: ['<rootDir>/src'],
  verbose: true,
  setupFiles: ['<rootDir>/tests/jest.init.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp)$': '<rootDir>/tests/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '^lodash-es$': 'lodash',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.test.json',
      babelConfig: require('./babel.config.js'),
      diagnostics: true,
    },
  },
};
