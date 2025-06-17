import { NextRequest, NextResponse } from 'next/server';
import { CookieConstants } from './constants/cookie.constants';
import { Paths } from './constants/paths.constant';

export function middleware(request: NextRequest) {
	const token = request.cookies.get(CookieConstants.accessToken);

	const isLoginPage = request.nextUrl.pathname === Paths.Login;
	const isProtectedRoute = request.nextUrl.pathname === Paths.Home;

	if (!token && isProtectedRoute) {
		return NextResponse.redirect(new URL(Paths.Login, request.url));
	}

	if (token && isLoginPage) {
		return NextResponse.redirect(new URL(Paths.Home, request.url));
	}

	return NextResponse.next();
}
