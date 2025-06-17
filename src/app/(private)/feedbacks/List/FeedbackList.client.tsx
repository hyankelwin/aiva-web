'use client';

import { CircularProgress, Grid, Typography, useTheme } from '@mui/material';
import FeedbackListView from './FeedbackList.view';
import { StorageConstants } from '@/constants/storage.constants';
import { IFeedback } from '@/interfaces/feedback.interface';
import { useEffect, useState } from 'react';

const FeedbackList = () => {
	const theme = useTheme();
	const [isLoading, setIsLoading] = useState(true);
	const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);

	useEffect(() => {
		setIsLoading(true);
		try {
			const storage = localStorage.getItem(StorageConstants.feedbacks);
			const parsed = storage ? JSON.parse(storage) : [];
			setFeedbacks(parsed);
		} catch (error) {
			console.error('Erro ao acessar localStorage:', error);
			setFeedbacks([]);
		} finally {
			setIsLoading(false);
		}
	}, []);

	if (isLoading)
		return (
			<Grid
				container
				sx={{
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<CircularProgress />
			</Grid>
		);

	if (!feedbacks.length)
		return (
			<Grid
				container
				sx={{
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography>Nao existem feedbacks</Typography>
			</Grid>
		);

	return (
		<FeedbackListView
			theme={theme}
			feedbacks={(feedbacks as IFeedback[]) || []}
		/>
	);
};

export default FeedbackList;
