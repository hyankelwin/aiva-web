import { CookieConstants } from '@/constants/cookie.constants';
import { Endpoint } from '@/constants/endpoint.constant';
import { setCookies } from '@/utils/cookiesUtils';
import { getCookie } from '@/utils/cookiesUtils';
import axios from 'axios';
import { ESCUELAJS_API_URL } from '@/config/env-config';

export const refreshToken = async () => {
	try {
		const refreshToken = await getCookie(CookieConstants.refreshToken);

		if (!refreshToken) {
			throw new Error('refresh token not found');
		}
		const url = `${ESCUELAJS_API_URL}${Endpoint.core.auth.refreshToken}`;

		const response = await axios.post(url, {
			refreshToken: refreshToken,
		});

		if ([200, 201].includes(response.status)) {
			const { access_token, refresh_token } = response.data;

			setCookies(CookieConstants.accessToken, access_token);
			setCookies(CookieConstants.refreshToken, refresh_token);

			return access_token;
		}
	} catch (error) {
		console.error('Erro ao renovar token:', error);
		throw error;
	}
};
