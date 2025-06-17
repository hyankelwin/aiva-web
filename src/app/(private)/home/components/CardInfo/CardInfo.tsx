import { Paper, Typography } from '@mui/material';

interface CardInfoProps {
	title: string;
	value: number | string;
}

const CardInfo = ({ title, value }: CardInfoProps) => {
	return (
		<Paper
			elevation={2}
			sx={{
				p: 3,
				borderRadius: 2,
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'flex-start',
				maxWidth: 220,
			}}
		>
			<Typography variant="body1" color="text.secondary" gutterBottom>
				{title}
			</Typography>
			<Typography variant="h4" fontWeight={600}>
				{value}
			</Typography>
		</Paper>
	);
};

export default CardInfo;
