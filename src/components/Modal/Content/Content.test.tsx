import React from 'react';
import { render } from '@testing-library/react';
import ModalContent from './Content';

describe('ModalContent', () => {
	it('should render children correctly', () => {
		const { getByText } = render(<ModalContent>Test Content</ModalContent>);
		expect(getByText('Test Content')).toBeInTheDocument();
	});

	it('should pass additional props to the styled component', () => {
		const { container } = render(<ModalContent data-testid="modal-content" />);
		expect(container.firstChild).toHaveAttribute(
			'data-testid',
			'modal-content',
		);
	});
});
