import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: [
		'../src/**/*.mdx',
		'../src/components/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'storybook-css-modules',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	typescript: {
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			compilerOptions: {
				allowSyntheticDefaultImports: false,
				esModuleInterop: false,
			},
			shouldExtractLiteralValuesFromEnum: true,
			shouldRemoveUndefinedFromOptional: true,
			propFilter: (prop) =>
				prop.parent
					? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
					: true,
		},
	},
	staticDirs: ['../public'],
	docs: {
		autodocs: true,
	},
};
export default config;
