'use client';

import { Grid } from '@mui/material';
import CardInfo from '../CardInfo/CardInfo';
import { useEffect, useState } from 'react';
import { IFeedback } from '@/interfaces/feedback.interface';
import { StorageConstants } from '@/constants/storage.constants';

const Content = () => {
	const [feedbackCount, setFeedbackCount] = useState(0);

	useEffect(() => {
		const storage = localStorage.getItem(StorageConstants.feedbacks);
		const feedbacks: IFeedback[] = storage ? JSON.parse(storage) : [];
		setFeedbackCount(feedbacks.length);
	}, []);

	return (
		<Grid sx={{ m: 2 }}>
			<CardInfo title="Total de feedbacks" value={feedbackCount} />
		</Grid>
	);
};

export default Content;
