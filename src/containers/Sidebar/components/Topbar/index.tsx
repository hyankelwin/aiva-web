'use client';

import { Bar } from '@/components/Bar';
import Title from './components/Title';
import Actions from './components/Actions';
import { useMediaQuery, useTheme } from '@mui/material';

const Topbar = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	return (
		<Bar.Root>
			<Title />
			{isMobile && <Actions />}
		</Bar.Root>
	);
};

export default Topbar;
