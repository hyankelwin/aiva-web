import React from 'react';
import { render, screen } from '@testing-library/react';
import Root from './Root';

describe('Root Component', () => {
	test('renders the children correctly', () => {
		render(<Root>Test Children</Root>);
		const childrenElement = screen.getByText(/Test Children/i);
		expect(childrenElement).toBeInTheDocument();
	});

	test('passes additional props to the List component', () => {
		render(<Root data-testid="root-list">Test Children</Root>);
		const listElement = screen.getByTestId('root-list');
		expect(listElement).toBeInTheDocument();
	});
});
