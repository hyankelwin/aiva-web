'use client';
import React from 'react';
import layout from '@/constants/layout.constant';
import { List } from '@/components/List';
import {
	menuSidebar,
	MenuSidebarProps,
} from '@/constants/navigationItems.constant';
import { useDrawerStore } from '@/store/DrawerStore';
import { Fade, ListItemText } from '@mui/material';
import { useRouter } from 'next/navigation';
import { navigateWithRedirect } from '@/utils/navigation.utils';

import User from './User';
import { ItemsContainer } from '../style';

const Menu = () => {
	const { drawer } = useDrawerStore();
	const { isOpen } = drawer;
	const router = useRouter();

	const handleClick = (item: MenuSidebarProps) => {
		navigateWithRedirect(router, item.link, item.externalLink);
	};

	const menu = menuSidebar();

	return (
		<List.Root data-cy="ul_left_menu">
			<ItemsContainer data-testid="menu-item-container">
				{menu.map((item, id) => {
					return (
						<List.Item key={id} onClick={() => handleClick(item)}>
							<List.Icon
								icon={{
									size: layout.drawer.iconSize,
									name: item.icon,
								}}
								data-testid={item.dataTestId}
							/>
							<Fade
								in={isOpen}
								timeout={{
									enter: layout.drawer.duration,
									exit: layout.drawer.duration,
								}}
								appear={false}
							>
								<ListItemText
									sx={{ opacity: isOpen ? 1 : 0 }}
									primary={item.text}
								/>
							</Fade>
						</List.Item>
					);
				})}
			</ItemsContainer>
			<User data-cy="user_profile_menu" data-testid="menu-user" />
		</List.Root>
	);
};

export default Menu;
