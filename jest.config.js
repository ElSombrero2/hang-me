/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest", {}],
  },
  collectCoverageFrom: ["**/*.ts", "!**/node_modules/**", "!**/dist/**"],
  modulePathIgnorePatterns: ["regex/", "main.ts", "index.ts", "mock.ts"],
  testMatch: ["**/src/**/*.spec.ts"],
};
