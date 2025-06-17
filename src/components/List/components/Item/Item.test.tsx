import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item';

describe('Item Component', () => {
	test('renders the item with the correct children', () => {
		render(<Item>Test Item</Item>);
		const itemElement = screen.getByText(/Test Item/i);
		expect(itemElement).toBeInTheDocument();
	});

	test('renders the item with the correct class', () => {
		render(<Item className="test-class">Test Item</Item>);
		const itemElement = screen.getByTestId('list-item');
		expect(itemElement).toHaveClass('test-class');
	});

	test('calls the onClick handler when clicked', () => {
		const handleClick = jest.fn();
		render(<Item onClick={handleClick}>Test Item</Item>);
		const itemElement = screen.getByText(/Test Item/i);
		fireEvent.click(itemElement);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('renders the loading spinner when loading is true', () => {
		render(<Item loading={true}>Test Item</Item>);
		const spinnerElement = screen.getByRole('progressbar');
		expect(spinnerElement).toBeInTheDocument();
	});

	test('disables the button when loading is true', () => {
		render(<Item loading={true}>Test Item</Item>);
		const buttonElement = screen.getByTestId('list-item-button');
		expect(buttonElement).toHaveClass('Mui-disabled');
	});

	test('renders the secondary action', () => {
		render(
			<Item secondaryAction={<div>Secondary Action</div>}>Test Item</Item>,
		);
		const secondaryActionElement = screen.getByText(/Secondary Action/i);
		expect(secondaryActionElement).toBeInTheDocument();
	});

	test('sets the data-cy attribute correctly', () => {
		render(<Item dataCy="test-item">Test Item</Item>);
		const itemElement = screen.getByText(/Test Item/i);
		expect(itemElement).toHaveAttribute('data-cy', 'test-item');
	});
});
