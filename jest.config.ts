import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	coverageProvider: 'v8',
	coverageDirectory: '<rootDir>/coverage',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'/constants/',
		'/enums/',
		'/interfaces/',
		'/store/',
		'styles.ts$',
		'style.ts$',
	],
};

module.exports = createJestConfig(config);
