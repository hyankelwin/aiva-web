'use client';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { styled } from '@mui/material/styles';
import MuiTypography from '@mui/material/Typography';

export const Title = styled(
	MuiTypography,
	{},
)(({ prop }: { prop?: { maxSize?: number } }) => ({
	color: defaultColors.grey[800],
	lineHeight: '30px',
	fontWeight: 700,
	fontSize: '24px',

	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	maxWidth: prop?.maxSize || '100%',
}));
