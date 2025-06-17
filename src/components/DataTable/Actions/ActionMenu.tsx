import MenuTable from '../MenuTable';
import CustomIcon from '@/components/Icon/Icon';
import { Typography } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useCallback } from 'react';

export interface MenuActionsProps {
	options: {
		text: string;
		icon: string;
		link: string;
		disabled?: boolean;
		action: () => void;
		color: string;
		lucide?: boolean;
		iconColor?: string;
	}[];
	item: GridRenderCellParams;
	avatarRef: React.RefObject<HTMLButtonElement>;
	isOpen: boolean;
	onClose: () => void;
	onClick?: () => void;
}

const ActionMenu = ({
	avatarRef,
	isOpen,
	onClose,
	options,
	onClick,
}: MenuActionsProps) => {
	const handleOptionClick = useCallback(
		(action: () => void) => {
			onClick && onClick();
			action();
		},
		[onClick],
	);

	return (
		<MenuTable.Root open={isOpen} onClose={onClose} anchor={avatarRef}>
			{options.map((option, index) => (
				<MenuTable.Item
					data-testid={`${option.text}-option-action`}
					key={index}
					onPress={() => handleOptionClick(option.action)}
					disabled={option.disabled}
					isLastItem={index === options.length - 1}
				>
					<CustomIcon
						color={option.iconColor ?? option.color}
						icon={option.icon}
						name={option.icon}
						size={24}
					/>
					<Typography
						sx={{ textAlign: 'center', marginLeft: 1 }}
						variant="button_md"
						color={option.color}
					>
						{option.text}
					</Typography>
				</MenuTable.Item>
			))}
		</MenuTable.Root>
	);
};

export default ActionMenu;
