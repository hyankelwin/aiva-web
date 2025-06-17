'use client';

import { useDrawerStore } from '@/store/DrawerStore';
import { ReactNode } from 'react';
import { DrawerContainer } from '../style';

const Container = ({ children }: Readonly<{ children: ReactNode }>) => {
	const { drawer } = useDrawerStore();
	const { isOpen } = drawer;

	return (
		<DrawerContainer
			variant="permanent"
			open={isOpen}
			data-testid="drawer-container"
		>
			{children}
		</DrawerContainer>
	);
};

export default Container;
