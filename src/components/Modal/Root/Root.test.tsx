import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ModalRoot from './Root';

describe('ModalRoot', () => {
	it('should render the modal when open is true', () => {
		render(
			<ModalRoot open={true}>
				<div>Modal Content</div>
			</ModalRoot>,
		);
		expect(screen.getByText('Modal Content')).toBeInTheDocument();
	});

	it('should not render the modal when open is false', () => {
		render(
			<ModalRoot open={false}>
				<div>Modal Content</div>
			</ModalRoot>,
		);
		expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
	});

	it('should call onClose when the modal is closed', () => {
		const handleClose = jest.fn();
		render(
			<ModalRoot open={true} onClose={handleClose}>
				<div>Modal Content</div>
			</ModalRoot>,
		);
		const element = screen
			.getByRole('presentation')
			.getElementsByClassName('MuiBackdrop-root')[0];
		fireEvent.click(element);
		expect(handleClose).toHaveBeenCalledTimes(1);
	});

	it('should set data-cy attribute correctly', () => {
		render(
			<ModalRoot open={true} dataCy="custom_data_cy">
				<div>Modal Content</div>
			</ModalRoot>,
		);
		expect(screen.getByText('Modal Content').parentElement).toHaveAttribute(
			'data-cy',
			'custom_data_cy',
		);
	});
});
