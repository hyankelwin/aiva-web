import React from 'react';
import { IconButton } from '@mui/material';
import { LucideEllipsisVertical } from 'lucide-react';
import { GridRenderCellParams } from '@mui/x-data-grid';
import ActionMenu from './ActionMenu';

interface ActionsCellProps {
	item: GridRenderCellParams;
	options: {
		text: string;
		icon: string;
		link: string;
		action: () => void;
		color: string;
		lucide?: boolean;
	}[];
	onClickOption?: () => void;
}
const Actions = ({ item, options, onClickOption }: ActionsCellProps) => {
	const ref = React.useRef(null);
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOpen = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const handleClickOption = () => {
		handleClose();
		onClickOption && onClickOption();
	};
	return (
		<>
			<IconButton ref={ref} onClick={handleOpen} data-testid="button-actions">
				<LucideEllipsisVertical />
			</IconButton>
			<ActionMenu
				options={options}
				item={item}
				avatarRef={ref}
				isOpen={isOpen}
				onClose={handleClose}
				onClick={handleClickOption}
			/>
		</>
	);
};

export default Actions;
