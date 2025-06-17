import { MenuItem as MenuItemMui, useTheme } from '@mui/material';
import { ReactNode } from 'react';

interface MenuItemProps {
	width?: number;
	height?: number;
	onPress: () => void;
	disabled?: boolean;
	children: ReactNode;
	isLastItem?: boolean;
}

const MenuItem = ({
	onPress,
	width,
	height,
	children,
	disabled,
	isLastItem = false,
	...rest
}: MenuItemProps) => {
	const theme = useTheme();

	const styles = {
		width: width ?? 287,
		height: height ?? 64,
		background: theme.palette.background.light,
		...(isLastItem && {
			borderTop: `1px solid ${theme.palette.grey[200]}`,
		}),
	};

	return (
		<MenuItemMui onClick={onPress} sx={styles} disabled={disabled} {...rest}>
			{children}
		</MenuItemMui>
	);
};

export default MenuItem;
