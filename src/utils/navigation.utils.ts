export interface Router {
	push(url: string): void;
}

export const navigateWithRedirect = (
	router: Router,
	route: string,
	redirection?: string,
) => {
	if (typeof window !== 'undefined') {
		router.push(route);
		if (redirection) {
			window.open(redirection, '_blank');
		}
	}
};
