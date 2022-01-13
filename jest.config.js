const jestConfig = {
  setupFilesAfterEnv: ['./src/__test__/jest.setup.tsx'],
  testEnvironment: 'jsdom'
};

module.exports = jestConfig;
