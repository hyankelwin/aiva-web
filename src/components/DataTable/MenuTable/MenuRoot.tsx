import { ReactNode, RefObject } from 'react';
import { Menu, MenuProps, useTheme } from '@mui/material';

interface MenuRootProps extends MenuProps {
	children: ReactNode;
	open: boolean;
	onClose?: () => void;
	anchor?: RefObject<HTMLElement> | null | undefined;
}

const MenuRoot = ({ children, open, onClose, anchor }: MenuRootProps) => {
	const theme = useTheme();

	return (
		<Menu
			id="menu-appbar"
			anchorEl={anchor?.current}
			open={open}
			onClose={onClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			sx={{
				borderRadius: 8,
				borderColor: theme.palette.grey[200],
			}}
		>
			{children}
		</Menu>
	);
};

export default MenuRoot;
