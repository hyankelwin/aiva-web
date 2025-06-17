describe('Logout Flow', () => {
	beforeEach(() => {
		cy.login();
	});
	it('should logout successfully and redirect to login page', () => {
		cy.visit('/home');

		cy.get('[data-cy="user_profile_menu"]').click();
		cy.contains('span', 'Sair', { timeout: 10000 }).click();

		cy.url().should('include', '/login');
	});
});
