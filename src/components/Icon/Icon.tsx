import { Box, BoxProps } from '@mui/material';
import * as LuIcons from 'react-icons/lu';
import { IconType } from 'react-icons';

interface IconProps extends BoxProps {
	name: string;
	size?: number;
	color?: string;
	icon?: string;
	dataCy?: string;
	marginRight?: number;
	marginLeft?: number;
}

const Icon: React.FC<IconProps> = ({
	name: icon = '',
	size = 24,
	color,
	dataCy = '',
	marginRight = 0,
	marginLeft = 0,
}) => {
	const iconName = icon as keyof typeof LuIcons;
	const IconComponent = LuIcons[iconName] as IconType;

	if (!IconComponent) {
		console.error(`Icon ${icon} not found`);
		return null;
	}

	return (
		<Box
			data-cy={dataCy}
			sx={{
				display: 'flex',
				alignItems: 'center',
			}}
		>
			{
				<IconComponent
					size={size}
					color={color}
					style={{ marginRight: marginRight, marginLeft: marginLeft }}
					data-testid="icon"
				/>
			}
		</Box>
	);
};

export default Icon;
