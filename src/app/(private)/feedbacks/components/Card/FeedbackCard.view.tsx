'use client';

import { Avatar, Grid, Paper, Typography } from '@mui/material';

interface FeedbackCardProps {
	avatarUrl: string;
	title: string;
	message: string;
}

const FeedbackCard = ({ avatarUrl, title, message }: FeedbackCardProps) => {
	return (
		<Paper
			elevation={2}
			sx={{
				p: 3,
				borderRadius: 2,
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				width: '100%',
				maxWidth: 300,
				overflowWrap: 'anywhere',
			}}
		>
			<Grid container alignItems="center" spacing={2}>
				<Grid item>
					<Avatar src={avatarUrl} sx={{ width: 48, height: 48 }} />
				</Grid>
				<Grid item>
					<Typography variant="h6" color="text.primary">
						{title}
					</Typography>
				</Grid>
			</Grid>

			<Typography variant="body2" color="text.secondary">
				{message}
			</Typography>
		</Paper>
	);
};

export default FeedbackCard;
