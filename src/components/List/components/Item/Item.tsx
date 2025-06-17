import { ListItem, CircularProgress, ListItemProps } from '@mui/material';
import { Button } from '@/components/List/styles';

interface ItemProps extends ListItemProps {
	children?: React.ReactNode;
	secondaryAction?: React.ReactNode;
	onClick?: () => void;
	loading?: boolean;
	dataCy?: string;
}

const Item: React.FC<ItemProps> = ({
	children,
	onClick,
	secondaryAction,
	loading = false,
	dataCy,
	...rest
}) => {
	return (
		<ListItem
			{...rest}
			disablePadding
			secondaryAction={secondaryAction}
			data-testid="list-item"
		>
			<Button
				onClick={onClick}
				disabled={loading}
				data-cy={dataCy}
				data-testid="list-item-button"
			>
				{children}
				{loading && <CircularProgress size={24} sx={{ marginLeft: 2 }} />}
			</Button>
		</ListItem>
	);
};

export default Item;
