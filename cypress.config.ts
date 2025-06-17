import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		supportFile: 'cypress/support/e2e.ts',
	},
	env: {
		ESCUELAJS_API_URL: 'https://api.escuelajs.co/api/v1',
	},
});
