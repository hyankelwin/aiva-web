import React from 'react';
import * as S from '../styles';
import { BoxProps, IconButton, Typography } from '@mui/material';
import { LuChevronLeft } from 'react-icons/lu';

interface ModalHeaderProps extends BoxProps {
	title: string;
	onBack?: () => void;
	showBackButton?: boolean;
	showCloseButton?: boolean;
	backButton?: React.ReactNode;
	closeButton?: React.ReactNode;
	fontSize?: number;
	children?: React.ReactNode;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
	title = '',
	onBack,
	showBackButton,
	showCloseButton,
	fontSize = 20,
	children,
	...rest
}) => {
	return (
		<S.ModalHeader {...rest}>
			{showBackButton && onBack && (
				<IconButton onClick={onBack} sx={{ marginRight: 2 }}>
					<LuChevronLeft />
				</IconButton>
			)}
			<Typography fontSize={fontSize} fontWeight={400}>
				{title}
			</Typography>
			{showCloseButton && <>{children}</>}
		</S.ModalHeader>
	);
};

export default ModalHeader;
