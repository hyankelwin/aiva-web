import { styled } from '@mui/material/styles';
import { Box, Link } from '@mui/material';

export const BreadcrumbsContainer = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	border: '1px solid #e4e7ec',
	width: 'max-content',
	borderRadius: '5px',
});

export const BreadcrumbsLink = styled(Link)({
	display: 'flex',
	alignItems: 'center',
	margin: 0,
	padding: 0,
	fontSize: 16,

	'svg:nth-of-type(1)': {
		marginRight: '8px',
	},
});

export const BreadcrumbsContent = styled(Box)({
	background: '#f2f4f7',
	padding: '10px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',

	'svg:nth-of-type(2)': {
		marginRight: '10px',
		marginLeft: '17px',
	},
});
