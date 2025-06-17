Cypress.Commands.add('login', () => {
	cy.visit('/login');
	cy.get('input[name="email"]').type('admin@mail.com');
	cy.get('input[name="password"]').type('admin123');
	cy.get('button[type="submit"]').click();
	cy.url().should('include', '/home', { timeout: 10000 });
});
