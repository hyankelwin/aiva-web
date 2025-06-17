import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import layout from '@/constants/layout.constant';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';

export const HeaderContent = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	padding: theme.spacing(0.5, 2),
	...theme.mixins.toolbar,
}));

export const ItemsContainer = styled('div')({
	flex: 1,
	display: 'flex',
	flexDirection: 'column',
});

export const DrawerContainer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: layout.drawer.width,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	'.MuiPaper-root': {
		borderRight: 0,
		backgroundColor: defaultColors.drawer,
	},
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
}));

const commonStyles = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: layout.drawer.duration,
	}),
});

const drawerCommonStyles = (theme: Theme): CSSObject => ({
	...commonStyles(theme),
	overflowX: 'hidden',
});

const openedMixin = (theme: Theme): CSSObject => ({
	...drawerCommonStyles(theme),
	width: layout.drawer.width,
});

const closedMixin = (theme: Theme): CSSObject => ({
	...drawerCommonStyles(theme),
	width: `${theme.spacing(9)}`,
});
