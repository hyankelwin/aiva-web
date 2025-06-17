import { Grid, Theme, Typography } from '@mui/material';
import { Button } from '@/components';
import { useRouter } from 'next/navigation';

type RouterType = ReturnType<typeof useRouter>;

interface Props {
	path: string;
	router: RouterType;
	theme: Theme;
}

const TopBarView = ({ path, router, theme }: Props) => {
	return (
		<Grid item container alignItems={'center'} justifyContent={'space-between'}>
			<Typography
				variant="title_lg"
				color={theme.palette.grey[800]}
				sx={{ mb: 3, mt: 5 }}
			>
				Gestão de usuários
			</Typography>

			<Button
				variant="contained"
				data-testid="create-user-button"
				onClick={() => router.push(path)}
			>
				<Typography color={theme.palette.primary.contrastText}>
					Criar usuário
				</Typography>
			</Button>
		</Grid>
	);
};

export default TopBarView;
