module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.svg$|\\.png$': '<rootDir>/__mocks__/imgMock.js',
    '^@root(.*)$': '<rootDir>/src$1',
    '^@components(.*)$': '<rootDir>/src/components$1'
  }
};
