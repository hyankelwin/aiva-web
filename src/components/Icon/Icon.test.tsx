import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon component', () => {
	it('renders correctly with valid icon name', () => {
		const { container } = render(<Icon name="LuCheck" />);
		expect(container.querySelector('svg')).toBeInTheDocument();
	});

	it('renders with correct size and color', () => {
		const { container } = render(<Icon name="LuCheck" size={30} color="red" />);
		const svgElement = container.querySelector('svg');
		expect(svgElement).toHaveAttribute('width', '30');
		expect(svgElement).toHaveAttribute('height', '30');
		expect(svgElement).toHaveAttribute('color', 'red');
	});

	it('renders with correct margins', () => {
		const { getByTestId } = render(
			<Icon name="LuCheck" marginRight={10} marginLeft={5} />,
		);
		const svgElement = getByTestId('icon');
		expect(svgElement).toHaveStyle('margin-right: 10px');
		expect(svgElement).toHaveStyle('margin-left: 5px');
	});

	it('renders null and logs error for invalid icon name', () => {
		const consoleErrorSpy = jest
			.spyOn(console, 'error')
			.mockImplementation(() => {});
		const { container } = render(<Icon name="InvalidIcon" />);
		expect(container.firstChild).toBeNull();
		expect(consoleErrorSpy).toHaveBeenCalledWith('Icon InvalidIcon not found');
		consoleErrorSpy.mockRestore();
	});
});
