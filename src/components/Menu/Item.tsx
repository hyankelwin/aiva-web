import { MenuItem, MenuItemProps } from '@mui/material';

interface ItemProps extends MenuItemProps {
	children?: React.ReactNode;
	secondaryAction?: React.ReactNode;
	onClick?: () => void;
}

const Item: React.FC<ItemProps> = ({ children, onClick, ...rest }) => {
	return (
		<MenuItem onClick={onClick} {...rest} data-testid="item-container">
			{children}
		</MenuItem>
	);
};

export default Item;
