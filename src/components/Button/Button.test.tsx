import Button from './Button';
import { render, screen } from '@testing-library/react';

describe('Button component', () => {
	it('should be able to render Button component with success', () => {
		render(<Button>Test</Button>);

		const name = screen.getByText('Test');

		expect(name).toBeInTheDocument();
	});
});
it('should render Button component with the correct text', () => {
	render(<Button>Click Me</Button>);

	const buttonElement = screen.getByText('Click Me');

	expect(buttonElement).toBeInTheDocument();
});

it('should apply the correct props to the Button component', () => {
	render(
		<Button color="primary" variant="contained">
			Submit
		</Button>,
	);

	const buttonElement = screen.getByText('Submit');

	expect(buttonElement).toHaveClass('MuiButton-containedPrimary');
});

it('should handle click events', () => {
	const handleClick = jest.fn();
	render(<Button onClick={handleClick}>Click Me</Button>);

	const buttonElement = screen.getByText('Click Me');
	buttonElement.click();

	expect(handleClick).toHaveBeenCalledTimes(1);
});
