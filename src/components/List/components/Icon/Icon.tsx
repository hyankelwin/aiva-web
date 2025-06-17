import { ListItemIcon } from '@mui/material';
import * as LuIcons from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Image from 'next/image';

interface Icon {
	icon?: {
		size?: number;
		name: string;
		color?: string;
	};
	src?: string;
	alt?: string;
}

interface IconProps extends Icon {
	dataCy?: string;
}

const Icon: React.FC<IconProps> = ({
	icon,
	src = '',
	alt = '',
	dataCy,
	...rest
}) => {
	const renderContent = () => {
		if (icon?.name === undefined || icon?.name === null || icon?.name === '')
			return null;
		const iconName = icon.name as keyof typeof LuIcons;
		const IconComponent = LuIcons[iconName] as IconType | undefined;
		const iconSize = icon.size || 24;

		if (icon.name === 'FaWhatsapp') {
			return <FaWhatsapp size={iconSize} data-testid="fa-whatsapp-icon" />;
		}

		if (IconComponent) {
			return <IconComponent size={iconSize} data-testid="lu-custom-icon" />;
		}

		if (src) {
			return (
				<Image
					src={`/svg/${icon.name}.svg`}
					alt={alt}
					width={iconSize}
					height={iconSize}
					quality={100}
					data-testid="svg-custom-icon"
					priority={true}
				/>
			);
		}

		return (
			<LuIcons.LuCircleHelp size={iconSize} data-testid="lu-circle-icon" />
		);
	};

	return (
		<ListItemIcon
			{...rest}
			sx={{
				minWidth: 0,
				mr: 1,
				justifyContent: 'center',
				color: icon?.color,
			}}
			data-cy={dataCy}
			data-testid="list-item-icon"
		>
			{renderContent()}
		</ListItemIcon>
	);
};

export default Icon;
