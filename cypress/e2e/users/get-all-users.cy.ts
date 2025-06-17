describe('Users', () => {
	beforeEach(() => {
		cy.login();
	});
	it('should navigate to users page and display 10 users', () => {
		cy.visit('/home');

		cy.get('[data-testid="list-item"]').contains('Usuários').click();

		cy.url().should('include', '/users', { timeout: 10000 });

		cy.get('[data-testid="table-row"]').should('have.length', 10);
	});
});
