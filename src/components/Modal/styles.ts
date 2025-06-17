import { Box, Modal, Typography } from '@mui/material';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { styled } from '@mui/material/styles';

export const ModalRoot = styled(Modal)`
	border-radius: 25px;
`;

export const ModalContainer = styled(
	Box,
	{},
)(({ prop }: { prop?: { size?: string } }) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width:
		prop?.size === 'small'
			? '25vw'
			: prop?.size === 'medium'
				? '552px'
				: '60vw',
	backgroundColor: 'white',
	boxShadow: '24px',
	outline: 'none',
	borderRadius: '8px',
}));

export const ModalHeader = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 24px;
	border-bottom: 1px solid #e0e0e0;
	background-color: ${defaultColors.background.main};
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
	border-bottom: none;
	margin-bottom: 20px;
`;

export const Title = styled(Typography)`
	flex-grow: 1;
	text-align: left;
	font-weight: 400;
	font-size: 20px;
`;

export const ModalContent = styled(Box)`
	padding: 0px 16px 26px 16px;
	display: flex;
	flex-direction: column;
	gap: 16px;
	overflow-x: none !important;
	::-webkit-scrollbar {
		width: 4px;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background-color: ${defaultColors.grey[700]};
	}
	::-webkit-scrollbar-thumb:hover {
		background-color: ${defaultColors.grey[800]};
	}
`;
