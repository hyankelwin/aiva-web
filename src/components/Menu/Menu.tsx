import { Menu as MenuMUI, MenuProps } from '@mui/material';

interface RootProps extends MenuProps {
	children?: React.ReactNode;
}

const Menu: React.FC<RootProps> = ({ children, ...rest }) => {
	return (
		<MenuMUI {...rest} data-testid="menu">
			{children}
		</MenuMUI>
	);
};

export default Menu;
