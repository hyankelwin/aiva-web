import { Box, Grid, Theme, Typography } from '@mui/material';
import ReportForm from '../containers/Form/Report/ReportForm.client';
import { IUser } from '@/interfaces/user.interface';

interface Props {
	theme: Theme;
	user: IUser;
}

export const ReportView = ({ theme, user }: Props) => {
	return (
		<Box sx={{ px: { xs: 5, sm: 7, md: 5, lg: 10, xl: 13.5 }, mt: 19 }}>
			<Grid container direction="column" justifyContent="center" sx={{ mb: 2 }}>
				<Typography
					variant="title_lg"
					color={theme.palette.grey[800]}
					sx={{ mb: 3, mt: 5 }}
				>
					Feedback
				</Typography>
				<Typography variant="body_md" color={theme.palette.grey[500]}>
					Olá, {user?.name}
				</Typography>
			</Grid>
			<ReportForm user={user} />
		</Box>
	);
};
