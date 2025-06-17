import { Box, Grid } from '@mui/material';
import Image from 'next/image';

const ReportLayout = async ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return (
		<Grid container component="main" sx={{ height: '100vh' }}>
			<Grid xs={12} sm={8} md={6} lg={4} justifyContent="center" item>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						height: '100vh',
						textAlign: 'center',
						overflowY: 'auto',
					}}
				>
					<Grid sx={{ height: '670px', width: '100%' }}>{children}</Grid>

					<Box sx={{ pb: 3 }}>
						<Image
							data-cy="image_logo_footer"
							src="/svg/aiva-logo.svg"
							alt="Logo da AIVA Rodape"
							width={300}
							height={40}
							quality={100}
							priority={false}
						/>
					</Box>
				</Grid>
			</Grid>

			<Grid
				item
				data-cy="image_main"
				xs={false}
				sm={4}
				md={6}
				lg={8}
				sx={{
					backgroundImage: 'url("/images/feedback.avif")',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundColor: '#DBFF99',
				}}
				data-testid="image_main"
			/>
		</Grid>
	);
};

export default ReportLayout;
