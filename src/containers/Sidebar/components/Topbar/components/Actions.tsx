'use client';

import { Paths } from '@/constants/paths.constant';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { Grid, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';

const Actions = () => {
	const router = useRouter();

	return (
		<Grid
			container
			sx={{
				width: 'auto',
				display: 'flex',
				flex: 'auto',
				justifyContent: 'space-evenly',
			}}
		>
			<Typography
				variant="body_md"
				color={defaultColors.grey[500]}
				sx={{ cursor: 'pointer' }}
				onClick={() => router.push(Paths.Feedbacks)}
			>
				Feedback
			</Typography>
			<Typography
				variant="body_md"
				color={defaultColors.grey[500]}
				sx={{ cursor: 'pointer' }}
				onClick={() => router.push(Paths.Users.list)}
			>
				Users
			</Typography>
		</Grid>
	);
};

export default Actions;
