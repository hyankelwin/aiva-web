import { Box, Grid } from '@mui/material';
import Image from 'next/image';

const LayoutLogin = async ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	return (
		<Grid container component="main" sx={{ height: '100vh' }}>
			<Grid
				xs={12}
				sm={8}
				md={6}
				lg={4}
				justifyContent="center"
				rowSpacing={3}
				item
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						height: '100vh',
						textAlign: 'center',
						overflowY: 'auto',
					}}
				>
					<Box sx={{ mt: { xs: 5, sm: 16 } }}>
						<Image
							data-cy="image_logo_top_blue"
							src="/svg/aiva-logo.svg"
							alt="Logo da AIVA"
							width={400}
							height={80}
							quality={100}
							priority={false}
						/>
					</Box>

					<Box sx={{ height: '670px', width: '100%' }}>{children}</Box>

					<Box sx={{ pb: 3 }}>
						<Image
							data-cy="image_logo_footer"
							src="/svg/aiva-logo.svg"
							alt="Logo da AIVA Rodape"
							width={300}
							height={40}
							quality={100}
							priority={false}
							style={{ filter: 'grayscale(100%) brightness(50%)' }}
						/>
					</Box>
				</Box>
			</Grid>

			<Grid
				item
				data-cy="image_main"
				xs={false}
				sm={4}
				md={6}
				lg={8}
				sx={{
					backgroundImage: 'url("/images/aiva-person.avif")',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundColor: '#7e9746',
				}}
				data-testid="image_main"
			/>
		</Grid>
	);
};

export default LayoutLogin;
