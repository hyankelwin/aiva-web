import { render } from '@testing-library/react';
import { TextErrorMessage } from './TextErrorMessage';

describe('TextErrorMessage', () => {
	it('should render children correctly', () => {
		const { container } = render(
			<TextErrorMessage>Error message</TextErrorMessage>,
		);
		expect(container.textContent).toBe('Error message');
	});

	it('should apply correct styles', () => {
		const { getByText } = render(
			<TextErrorMessage>Error message</TextErrorMessage>,
		);
		const element = getByText('Error message');
		expect(element).toHaveStyle('color: rgb(211, 47, 47)');
		expect(element).toHaveStyle('font-size: .875rem');
		expect(element).toHaveStyle('position: absolute');
		expect(element).toHaveStyle('bottom: -18px');
	});
});
