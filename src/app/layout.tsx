import type { Metadata } from 'next';

import './globals.css';
import { defaultTheme } from '@/styles/theme';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';

import { instrumentSans } from '@/styles/fonts';

export const metadata: Metadata = {
	title: 'AIVA',
	description: 'Solução para IA',
	icons: {
		icon: '/svg/favicon.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<Head>
				<meta charSet="utf-8" />
			</Head>
			<body className={instrumentSans.variable}>
				<AppRouterCacheProvider>
					<ToastContainer autoClose={4000} position="top-right" />
					<ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
