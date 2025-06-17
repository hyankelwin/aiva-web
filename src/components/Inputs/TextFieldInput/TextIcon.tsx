import { InputAdornment } from '@mui/material';

interface TextIconProps {
	position?: 'start' | 'end';
	children: React.ReactNode;
}

export const TextIcon: React.FC<TextIconProps> = ({
	position = 'start',
	children,
}) => {
	return <InputAdornment position={position}>{children}</InputAdornment>;
};
