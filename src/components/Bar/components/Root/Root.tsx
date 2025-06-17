import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { AppBar, AppBarProps, Toolbar } from '@mui/material';

interface BarProps extends AppBarProps {
	children: React.ReactNode;
}

const BarRoot = ({ children }: BarProps) => {
	return (
		<AppBar
			sx={{
				backgroundColor: defaultColors.grey[50],
				height: 80,
				position: 'relative !important',
			}}
		>
			<Toolbar>{children}</Toolbar>
		</AppBar>
	);
};

export default BarRoot;
