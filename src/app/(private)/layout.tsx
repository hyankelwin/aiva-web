'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Sidebar } from '@/containers/Sidebar';
import { useMediaQuery, useTheme } from '@mui/material';

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	return (
		<Box sx={{ display: 'flex', height: '100%' }}>
			{!isMobile && (
				<Sidebar.Container>
					<Sidebar.Header />
					<Sidebar.Menu />
				</Sidebar.Container>
			)}

			<Box component="main" sx={{ flexGrow: 1, height: '100vh' }}>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
