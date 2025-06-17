'use client';

import { useFormik } from 'formik';
import validationSchemes from '@/constants/validations/scheme';
import { useState } from 'react';
import { IUser } from '@/interfaces/user.interface';
import { StorageConstants } from '@/constants/storage.constants';

interface ReportFormValues {
	feedback: string;
}

export const useReportForm = (user: IUser) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isReportSaved, setIsReportSaved] = useState(false);

	const handleSaveReport = ({ feedback }: ReportFormValues) => {
		setIsLoading(true);

		const newFeedback = {
			feedback,
			user,
		};

		const storageKey = StorageConstants.feedbacks;
		const feedbacks = localStorage.getItem(StorageConstants.feedbacks);
		const feedbackArray = feedbacks ? JSON.parse(feedbacks) : [];
		feedbackArray.push(newFeedback);
		localStorage.setItem(storageKey, JSON.stringify(feedbackArray));

		setIsReportSaved(true);
		setIsLoading(false);
	};

	const formik = useFormik({
		initialValues: {
			feedback: '',
		},
		validationSchema: validationSchemes.feedback.fullScheme,
		onSubmit: handleSaveReport,
	});

	return {
		formik,
		isLoading,
		isReportSaved,
	};
};
