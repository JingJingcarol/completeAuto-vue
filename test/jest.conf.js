/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: ['js', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  setupFiles: ['<rootDir>/test/setup'],
  // mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  testMatch: [ //匹配测试用例的文件
    '<rootDir>/test/unit/*.spec.js'
  ],
}
