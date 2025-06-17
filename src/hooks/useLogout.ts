import { useRouter } from 'next/navigation';
import { Paths } from '@/constants/paths.constant';
import { removeCookie } from '@/utils/cookiesUtils';
import { CookieConstants } from '@/constants/cookie.constants';

export const useLogout = () => {
	const router = useRouter();

	const logout = async () => {
		removeCookie(CookieConstants.accessToken);
		removeCookie(CookieConstants.refreshToken);
		router.push(Paths.Login);
	};

	return { logout };
};
