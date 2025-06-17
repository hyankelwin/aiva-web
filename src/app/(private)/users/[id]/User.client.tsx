'use client';

import { useParams } from 'next/navigation';
import { UserView } from './User.view';
import { useTheme } from '@mui/material';

export const UserClient = () => {
	const theme = useTheme();
	const { id } = useParams();

	const isEdit = id !== 'create';

	return <UserView theme={theme} isEdit={isEdit} />;
};
