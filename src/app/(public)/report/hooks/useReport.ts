'use client';

import { useFormik } from 'formik';
import validationSchemes from '@/constants/validations/scheme';
import { useCallback, useEffect, useState } from 'react';
import { IUser } from '@/interfaces/user.interface';
import { useCommonRequestData } from '@/hooks/useCommonRequest';
import { Endpoint } from '@/constants/endpoint.constant';
import { StorageConstants } from '@/constants/storage.constants';
import { IFeedback } from '@/interfaces/feedback.interface';

export const useReport = (id?: string) => {
	const [user, setUser] = useState<IUser | null>(null);
	const [isUserReportExists, setIsUserReportExists] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const { getByOne } = useCommonRequestData();

	const formik = useFormik({
		initialValues: {
			feedback: '',
		},
		validationSchema: validationSchemes.feedback.fullScheme,
		onSubmit: () => {},
	});

	const handleCheckIfUserFeedbackExists = useCallback(() => {
		const feedbacks = localStorage.getItem(StorageConstants.feedbacks);
		const feedbackArray = feedbacks
			? (JSON.parse(feedbacks) as IFeedback[])
			: [];
		return feedbackArray.find((feedback) => String(feedback.user.id) === id);
	}, [id]);

	useEffect(() => {
		if (!id) return;

		const fetchUser = async () => {
			const url = `${Endpoint.core.user.main}/${id}`;
			try {
				const response = (await getByOne(url)) as IUser;
				setUser(response);

				if (handleCheckIfUserFeedbackExists()) {
					setIsUserReportExists(true);
				}
			} catch (err) {
				setError('Erro ao buscar usuário');
			} finally {
				setIsLoading(false);
			}
		};

		fetchUser();
	}, [id, getByOne, handleCheckIfUserFeedbackExists]);

	return {
		formik,
		user,
		isLoading,
		error,
		isUserReportExists,
	};
};
