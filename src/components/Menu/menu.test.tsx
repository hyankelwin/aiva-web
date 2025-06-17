import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu component', () => {
	const mockOnClose = jest.fn();
	const element = document.createElement('div');

	it('should render children correctly', () => {
		render(
			<Menu
				open={true}
				id="test-menu"
				onClose={mockOnClose}
				anchorEl={element}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<div>Test Child</div>
			</Menu>,
		);
		expect(screen.getByText('Test Child')).toBeInTheDocument();
	});

	it('should pass props to MenuMUI component', () => {
		render(
			<Menu
				open={true}
				id="test-menu"
				onClose={mockOnClose}
				anchorEl={element}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<div>Test Child</div>
			</Menu>,
		);
		const menuElement = screen.getByTestId('menu');
		expect(menuElement).toHaveAttribute('id', 'test-menu');
		expect(menuElement).toBeVisible();
	});
});
