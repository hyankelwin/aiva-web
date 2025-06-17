import {
	Avatar as AvatarMUI,
	AvatarProps,
	Grid,
	Skeleton,
} from '@mui/material';
import { LuUser } from 'react-icons/lu';

interface Props extends AvatarProps {
	isLoading?: boolean;
	iconSize?: number;
}

const Avatar = ({ isLoading, iconSize = 24, ...rest }: Props) => {
	return (
		<Grid sx={{ display: 'flex', justifyContent: 'center' }}>
			{isLoading ? (
				<Skeleton variant="circular" sx={rest.sx} />
			) : (
				<AvatarMUI {...rest}>
					<LuUser size={iconSize} />
				</AvatarMUI>
			)}
		</Grid>
	);
};

export default Avatar;
