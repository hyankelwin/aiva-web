import { Typography } from '@mui/material';

import type { ReactNode } from 'react';

interface TextErrorMessageProps {
	children: ReactNode | ReactNode[];
}

export function TextErrorMessage({ children }: TextErrorMessageProps) {
	return (
		<Typography
			color="error"
			fontSize=".875rem"
			variant="body1"
			position="absolute"
			bottom={-18}
		>
			{children}
		</Typography>
	);
}
