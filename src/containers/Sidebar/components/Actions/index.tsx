'use client';

import { List } from '@/components/List';
import layout from '@/constants/layout.constant';
import { navigateWithRedirect } from '@/utils/navigation.utils';
import { useRouter } from 'next/navigation';
import Menu from '@/components/Menu/Menu';
import Item from '@/components/Menu/Item';
import { ActionsProps } from './interfaces';
import { menuActionsEnum } from '@/enums/menuActions.enum';
import { Divider } from '@mui/material';
import * as S from './styles';
import { useLogout } from '@/hooks/useLogout';

const Actions = ({
	isOpen = false,
	onClose,
	options,
	anchor,
}: ActionsProps) => {
	const router = useRouter();
	const { logout } = useLogout();

	const handleClick = async (action: string, link: string) => {
		switch (action) {
			case menuActionsEnum.LOGOUT:
				await logout();
				break;
			case menuActionsEnum.ROUTE:
				navigateWithRedirect(router, link);
				break;
			case menuActionsEnum.DIVIDER:
			default:
				break;
		}
	};

	return (
		<Menu
			open={isOpen}
			onClose={onClose}
			anchorEl={anchor}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right',
			}}
			transformOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			data-testid="actions-container"
		>
			{options.map((option, id) => {
				return option.action === menuActionsEnum.DIVIDER ? (
					<Divider key={id} sx={{ my: 0.5 }} data-testid="actions-divider" />
				) : (
					<Item
						key={id}
						onClick={() => handleClick(option.action, option.link)}
						sx={{ width: 286 }}
						data-testid="actions-item"
					>
						<List.Icon
							icon={{
								name: option.icon,
								size: layout.drawer.iconSize,
								color: option.color,
							}}
							src={option.isSvg ? option.icon : ''}
							data-testid="actions-list-icon"
						/>

						<S.SubmenuLabel
							color={option.color}
							data-testid="actions-submenu-label"
						>
							{option.text}
						</S.SubmenuLabel>
					</Item>
				);
			})}
		</Menu>
	);
};

export default Actions;
