import { Box, Grid, Theme, Typography } from '@mui/material';

interface Props {
	theme: Theme;
}

export const ReportNotFoundView = ({ theme }: Props) => {
	return (
		<Box sx={{ px: { xs: 5, sm: 7, md: 5, lg: 10, xl: 13.5 }, mt: 19 }}>
			<Grid container direction="column" justifyContent="center" sx={{ mb: 2 }}>
				<Typography
					variant="title_lg"
					color={theme.palette.grey[800]}
					sx={{ mb: 3, mt: 5 }}
				>
					Este usuário nao existe em nossa base de dados
				</Typography>
			</Grid>
		</Box>
	);
};
