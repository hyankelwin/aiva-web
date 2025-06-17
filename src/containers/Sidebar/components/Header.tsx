'use client';

import layout from '@/constants/layout.constant';
import { useDrawerStore } from '@/store/DrawerStore';
import { Fade, IconButton } from '@mui/material';
import Image from 'next/image';
import { LuMenu } from 'react-icons/lu';
import { HeaderContent } from '../style';

const Header = () => {
	const { drawer } = useDrawerStore();
	const { isOpen, toggle } = drawer;

	return (
		<HeaderContent data-testid="header-content-container">
			<IconButton data-cy="hamburguer_menu " onClick={toggle}>
				<LuMenu />
			</IconButton>
			<Fade
				in={isOpen}
				timeout={{
					enter: layout.drawer.duration,
					exit: layout.drawer.duration,
				}}
			>
				<Image
					src="/svg/aiva-logo.svg"
					alt="AIVA Logo"
					width={150}
					height={35}
					quality={100}
					priority={false}
					style={{ marginLeft: 5, opacity: isOpen ? 1 : 0 }}
					data-testid="header-content-logo"
				/>
			</Fade>
		</HeaderContent>
	);
};

export default Header;
