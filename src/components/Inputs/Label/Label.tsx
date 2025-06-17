import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { Skeleton, Typography } from '@mui/material';

interface LabelProps {
	title: string;
	data?: string;
	isLoading?: boolean;
}

const Label = ({ title, data, isLoading }: LabelProps) => {
	return (
		<>
			<Typography fontSize={16} fontWeight={700}>
				{title}
			</Typography>
			<Typography
				fontSize={14}
				fontWeight={400}
				color={defaultColors.grey[500]}
			>
				{isLoading ? (
					<Skeleton
						variant="text"
						data-testid="skeleton"
						width={100}
						height={30}
					/>
				) : (
					data
				)}
			</Typography>
		</>
	);
};

export default Label;
