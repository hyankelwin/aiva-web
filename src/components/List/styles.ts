'use client';

import layout from '@/constants/layout.constant';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { styled } from '@mui/material/styles';
import MuiListItemButton from '@mui/material/ListItemButton';
import MuiList from '@mui/material/List';

export const Button = styled(MuiListItemButton)(({ theme }) => ({
	minHeight: layout.drawer.iconSize,
	padding: theme.spacing(2, 3),
	'.MuiListItemText-root, .MuiListItemIcon-root, .MuiListItemText-root svg': {
		color: theme.palette.grey[500],
	},

	'&.Mui-selected, &.Mui-selected .MuiListItemText-root, &.Mui-selected:hover, &.Mui-selected .MuiListItemIcon-root, &:hover, &:hover .MuiListItemIcon-root, &:hover > .MuiListItemText-root > span':
		{
			color: defaultColors.primary.dark,
			backgroundColor: defaultColors.background.main,
		},
}));

export const List = styled(MuiList)({
	display: 'flex',
	flexDirection: 'column',
	height: '100%',
	padding: 0,
});
