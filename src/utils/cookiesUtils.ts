'use client';

import { destroyCookie, parseCookies, setCookie } from 'nookies';

export function setCookies(key: string, value: string) {
	return setCookie(null, key, value, {
		path: '/',
	});
}

export function getCookie(value: string) {
	const cookies = parseCookies();
	return cookies[value];
}

export function removeCookie(variable: string) {
	destroyCookie(null, variable);
}
