import React from 'react';
import { render } from '@testing-library/react';
import HelperTextWrapper from './HelperTextWrapper';

describe('HelperTextWrapper', () => {
	it('should render children correctly', () => {
		const { container } = render(
			<HelperTextWrapper classes={[]}>Test Helper Text</HelperTextWrapper>,
		);
		expect(container.textContent).toContain('Test Helper Text');
	});

	it('should apply error class when Mui-error is present in classes', () => {
		const { container } = render(
			<HelperTextWrapper classes={['Mui-error']}>Error Text</HelperTextWrapper>,
		);
		const alertIcon = container.querySelector('.error');
		expect(alertIcon).not.toBeNull();
	});

	it('should not apply error class when Mui-error is not present in classes', () => {
		const { container } = render(
			<HelperTextWrapper classes={[]}>No Error Text</HelperTextWrapper>,
		);
		const alertIcon = container.querySelector('.error');
		expect(alertIcon).toBeNull();
	});
});
