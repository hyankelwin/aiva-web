describe('Users - Create', () => {
	let userId: string;
	const apiUrl = Cypress.env('ESCUELAJS_API_URL');
	beforeEach(() => {
		cy.login();
	});
	it('should able to create a new user', () => {
		cy.visit('/home');

		cy.get('[data-testid="list-item"]').contains('Usuários').click();

		cy.url().should('include', '/users', { timeout: 10000 });

		cy.get('[data-testid="table-row"]').should('have.length', 10);

		cy.get('[data-testid="create-user-button"]').click();

		cy.url().should('include', '/users/create', { timeout: 10000 });

		cy.get('input[type="radio"]').first().click({ force: true });
		cy.get('input[name="name"]').type('My Name Test');
		cy.get('input[name="email"]').type('mynametest@mail.com');
		cy.get('input[name="password"]').type('myNameTest123');

		cy.intercept('POST', `${apiUrl}/users`).as('createUser');

		cy.get('button[type="submit"]').click();

		cy.wait('@createUser').then(({ response }) => {
			expect(response?.statusCode).to.eq(201);
			userId = response?.body.id;
			cy.log('Usuário created with ID:', userId);
		});

		cy.url().should('include', '/users', { timeout: 10000 });
	});

	after(() => {
		if (userId) {
			cy.request({
				method: 'DELETE',
				url: `${apiUrl}/users/${userId}`,
			}).then((response) => {
				expect(response.status).to.eq(200);
				cy.log('User deleted with success');
			});
		}
	});
});
