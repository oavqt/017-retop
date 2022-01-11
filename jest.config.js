const jestConfig = {
  setupFilesAfterEnv: ['./src/__test__/jest.setup.tsx'],
  testEnvironment: 'jsdom',
  verbose: true
};

module.exports = jestConfig;
