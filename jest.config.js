const jestConfig = {
  moduleNameMapper: {
    '\\.(gif|jpg|jpeg|png)$':
      '<rootDir>/src/__test__/__transformers__/images.transformers.tsx'
  },
  setupFilesAfterEnv: ['./src/__test__/jest.setup.tsx'],
  testEnvironment: 'jsdom'
};

module.exports = jestConfig;
