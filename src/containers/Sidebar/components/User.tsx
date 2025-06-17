'use client';

import layout from '@/constants/layout.constant';
import { useDrawerStore } from '@/store/DrawerStore';
import { Box, Fade, IconButton, Typography } from '@mui/material';
import { List } from '@/components/List';
import { useRef, useState } from 'react';
import Actions from './Actions';
import { menuOptions } from '@/constants/navigationItems.constant';
import { Title } from '@/components/Title';
import { Avatar } from '@/components';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import Icon from '@/components/Icon/Icon';
import { useAuthStore } from '@/store/AuthStore';

const User = () => {
	const { drawer } = useDrawerStore();
	const { isOpen } = drawer;
	const options = menuOptions;
	const [open, setOpen] = useState(false);
	const { user } = useAuthStore();
	const iconRef = useRef<HTMLButtonElement>(null);

	const handleToggle = () => {
		setOpen(() => !open);
	};

	return (
		<List.Item
			onClick={handleToggle}
			data-testid="user-profile-menu"
			dataCy="user_profile_menu"
			sx={{
				'& .MuiListItemSecondaryAction-root': {
					right: '0 !important',
				},
				paddingBottom: '8px',
			}}
			secondaryAction={
				<IconButton
					ref={iconRef}
					onClick={handleToggle}
					sx={{ right: '0px !important', opacity: isOpen ? 1 : 0 }}
					data-testid="user-profile-menu-icon"
				>
					<Icon name="LuEllipsisVertical" size={layout.drawer.iconSize} />
				</IconButton>
			}
		>
			<List.Avatar>
				<Avatar
					data-cy="image_profile"
					alt="Usuário"
					src={user.avatar ? user.avatar : ''}
					sx={{
						width: layout.drawer.menuUser.avatarSize,
						height: layout.drawer.menuUser.avatarSize,
						transition: 'transform 0.3s ease',
						transform: isOpen ? 'translateX(0)' : 'translateX(-8px)',
					}}
				>
					<Icon name="LuUser" />
				</Avatar>
			</List.Avatar>
			<Fade
				in={isOpen}
				timeout={{
					enter: layout.drawer.duration,
					exit: layout.drawer.duration,
				}}
				appear={false}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<Title
						text={user?.name ? user.name : ''}
						skWidth={130}
						skHeight={20}
						maxSize={155}
						sx={{
							fontWeight: 700,
							lineHeight: 1.25,
							fontSize: 16,
							color: defaultColors.grey[600],
						}}
					/>
					<Typography
						sx={{
							fontWeight: 400,
							lineHeight: 0.938,
							fontSize: 12,
							color: defaultColors.grey[500],
						}}
					>
						{user?.email}
					</Typography>
				</Box>
			</Fade>
			<Actions isOpen={open} options={options} anchor={iconRef.current} />
		</List.Item>
	);
};

export default User;
