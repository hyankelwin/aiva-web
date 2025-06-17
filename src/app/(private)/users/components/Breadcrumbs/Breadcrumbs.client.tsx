'use client';

import { useTheme } from '@mui/material';
import { Paths } from '@/constants/paths.constant';
import { LucideHome } from 'lucide-react';
import { Breadcrumbs } from '@/components';

const CustomBreadcrumbs = () => {
	const theme = useTheme();

	return (
		<Breadcrumbs
			items={[
				{
					label: 'Início',
					link: Paths.Home,
					icon: <LucideHome size={22} color={theme.palette.grey[400]} />,
				},
				{ label: 'Gestão de usuários', active: true },
			]}
		/>
	);
};

export default CustomBreadcrumbs;
