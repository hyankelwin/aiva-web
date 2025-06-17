import { render, screen, fireEvent } from '@testing-library/react';
import Item from './Item';

describe('Item component', () => {
	it('should render children correctly', () => {
		render(<Item>Test Child</Item>);
		expect(screen.getByText('Test Child')).toBeInTheDocument();
	});

	it('should call onClick when clicked', () => {
		const handleClick = jest.fn();
		render(<Item onClick={handleClick}>Clickable Item</Item>);
		fireEvent.click(screen.getByRole('menuitem'));
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('should pass additional props to MenuItem', () => {
		render(<Item className="custom-class">Custom Props</Item>);
		expect(screen.getByRole('menuitem')).toHaveClass('custom-class');
	});
});
