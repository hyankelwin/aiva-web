import axios from 'axios';

import { ESCUELAJS_API_URL } from '@/config/env-config';
import { Endpoint } from '@/constants/endpoint.constant';
import { getCookie } from '@/utils/cookiesUtils';
import { CookieConstants } from '@/constants/cookie.constants';
import { refreshToken } from './auth/refreshToken';
import { Paths } from '@/constants/paths.constant';

const baseURL = ESCUELAJS_API_URL;

const API = axios.create({
	baseURL: baseURL,
	headers: {
		'Content-Type': 'application/json',
		'accept-language': 'pt-BR',
	},
});

export default API;

API.interceptors.request.use(
	async (config) => {
		if (config.url && !config.url.includes(String(Endpoint.core.auth.login))) {
			let token = await getCookie(CookieConstants.accessToken);

			if (!token) {
				try {
					token = await refreshToken();
				} catch (err) {
					console.error('Erro ao renovar token. Redirecionando para logout.');
					window.location.href = Paths.Login;
				}
			}

			config.headers['Authorization'] = 'Bearer ' + token;
		}

		return config;
	},
	(error) => {
		Promise.reject(error);
	},
);
