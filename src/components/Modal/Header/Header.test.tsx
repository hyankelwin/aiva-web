import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalHeader from './Header';

describe('ModalHeader', () => {
	it('renders the title', () => {
		render(<ModalHeader title="Test Title" />);
		expect(screen.getByText('Test Title')).toBeInTheDocument();
	});

	it('renders the back button when showBackButton is true', () => {
		const onBack = jest.fn();
		render(<ModalHeader title="Test Title" showBackButton onBack={onBack} />);
		const backButton = screen.getByRole('button');
		expect(backButton).toBeInTheDocument();
		fireEvent.click(backButton);
		expect(onBack).toHaveBeenCalled();
	});

	it('does not render the back button when showBackButton is false', () => {
		render(<ModalHeader title="Test Title" />);
		expect(screen.queryByRole('button')).not.toBeInTheDocument();
	});

	it('renders the close button when showCloseButton is true', () => {
		render(
			<ModalHeader title="Test Title" showCloseButton>
				Close
			</ModalHeader>,
		);
		expect(screen.getByText('Close')).toBeInTheDocument();
	});

	it('does not render the close button when showCloseButton is false', () => {
		render(<ModalHeader title="Test Title" />);
		expect(screen.queryByText('Close')).not.toBeInTheDocument();
	});

	it('applies the correct font size to the title', () => {
		render(<ModalHeader title="Test Title" fontSize={30} />);
		expect(screen.getByText('Test Title')).toHaveStyle('font-size: 30px');
	});
});
