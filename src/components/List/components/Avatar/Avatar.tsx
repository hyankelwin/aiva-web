import React from 'react';
import { ListItemAvatar, ListItemAvatarProps } from '@mui/material';

interface AvatarProps extends ListItemAvatarProps {
	children: React.ReactNode;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
	({ children, ...rest }, ref) => {
		return (
			<ListItemAvatar ref={ref} {...rest}>
				{children}
			</ListItemAvatar>
		);
	},
);

Avatar.displayName = 'Avatar';

export default Avatar;
