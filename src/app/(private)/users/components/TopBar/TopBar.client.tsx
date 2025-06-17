'use client';

import { useTheme } from '@mui/material';
import { Paths } from '@/constants/paths.constant';
import { useRouter } from 'next/navigation';
import TopBarView from './TopBar.view';

const TopBarPage = () => {
	const theme = useTheme();
	const router = useRouter();

	return <TopBarView theme={theme} router={router} path={Paths.Users.create} />;
};

export default TopBarPage;
