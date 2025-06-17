import type { Preview } from '@storybook/react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { defaultTheme } from '../src/styles/theme';

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: defaultTheme,
			dark: defaultTheme,
		},
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
	}),
];

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
