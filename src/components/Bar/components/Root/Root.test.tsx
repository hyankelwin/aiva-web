import { render, screen } from '@testing-library/react';
import BarRoot from '.';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';

describe('BarRoot component', () => {
	it('should render BarRoot component with children', () => {
		render(<BarRoot>Test Child</BarRoot>);

		const childElement = screen.getByText('Test Child');
		expect(childElement).toBeInTheDocument();
	});

	it('should have correct styles applied', () => {
		render(<BarRoot>Test Child</BarRoot>);

		const appBarElement = screen.getByRole('banner');
		expect(appBarElement).toHaveStyle(
			`background-color: ${defaultColors.grey[50]}`,
		);
		expect(appBarElement).toHaveStyle('height: 80px');
		expect(appBarElement).toHaveStyle('position: relative');
	});
});
