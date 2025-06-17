'use client';

import { useFormik } from 'formik';
import validationSchemes from '@/constants/validations/scheme';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCommonRequestData } from '@/hooks/useCommonRequest';
import { useAuthStore } from '@/store/AuthStore';
import { toast } from 'react-toastify';
import { StorageConstants } from '@/constants/storage.constants';
import { Paths } from '@/constants/paths.constant';
import { Endpoint } from '@/constants/endpoint.constant';
import { IUser } from '@/interfaces/user.interface';
import axios, { AxiosResponse } from 'axios';
import { setCookies } from '@/utils/cookiesUtils';
import { CookieConstants } from '@/constants/cookie.constants';

interface Token {
	access_token: string;
	refresh_token: string;
}

export const useLoginForm = () => {
	const [errorMessage, setErrorMessage] = useState<string | null>('');
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const { getByOne, create } = useCommonRequestData();
	const { setUser } = useAuthStore();

	const handleRememberLogin = (remember: boolean, email: string) => {
		remember
			? localStorage.setItem(StorageConstants.rememberLogin, email)
			: localStorage.removeItem(StorageConstants.rememberLogin);
	};

	const handleGetUserAuthenticated = async () => {
		setIsLoading(true);
		try {
			const url = Endpoint.core.auth.profile;
			const response = await getByOne(url);
			if (response) {
				setUser(response as IUser);
				router.push(Paths.Home);
			}
		} catch {
			setErrorMessage('Falha na autenticação. Tente novamente.');
		} finally {
			setIsLoading(false);
		}
	};

	const handleSaveToken = ({ access_token, refresh_token }: Token) => {
		setCookies(CookieConstants.accessToken, access_token);
		setCookies(CookieConstants.refreshToken, refresh_token);
	};

	const handleLogin = async (values: {
		email: string;
		password: string;
		rememberLogin: boolean;
	}) => {
		setIsLoading(true);
		const { email, password, rememberLogin } = values;

		handleRememberLogin(rememberLogin, email);

		try {
			const response = (await create(Endpoint.core.auth.login, {
				email,
				password,
			})) as AxiosResponse;
			if ([200, 201].includes(response.status)) {
				handleSaveToken(response.data);
				handleGetUserAuthenticated();
			}
		} catch (err) {
			if (axios.isAxiosError(err)) {
				if (err.response?.status === 401) {
					return toast.error('Usuário ou senha inválidas');
				}

				return toast.error(
					err.response?.data?.message || 'Erro ao logar, tente novamente',
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			rememberLogin: false,
		},
		validationSchema: validationSchemes.login.fullScheme,
		onSubmit: handleLogin,
	});

	useEffect(() => {
		const rememberLogin = localStorage.getItem(StorageConstants.rememberLogin);
		if (rememberLogin) {
			formik.setFieldValue('email', rememberLogin);
			formik.setFieldValue('rememberLogin', true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			formik.handleSubmit();
		}
	};

	return {
		formik,
		isLoading,
		errorMessage,
		handleKeyUp,
	};
};
