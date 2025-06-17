import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { styled } from '@mui/material/styles';
import { FormHelperText } from '@mui/material';
import { LuCircleAlert as L } from 'react-icons/lu';

export const CustomFormHelperText = styled(FormHelperText)(() => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	gap: 8,
	marginTop: 5,
	marginBottom: 2,
	marginLeft: 14,
	marginRight: 14,
	fontWeight: 400,
	fontSize: '0.75rem',
	lineHeight: 'normal',
	letterSpacing: '0.03333em',
	textAlign: 'left',
}));

export const LuCircleAlert = styled(L)(() => ({
	'&.error': {
		color: defaultColors.error.main,
	},
}));
