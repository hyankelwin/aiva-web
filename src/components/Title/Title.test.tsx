import { render, screen } from '@testing-library/react';
import { Title } from '.';

describe('Title', () => {
	it('should render the Skeleton component when text is not provided and hideSkeleton is false', () => {
		render(<Title text="" skWidth={100} skHeight={20} hideSkeleton={false} />);

		const skeleton = screen.getByRole('skeleton');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveStyle({ width: '100px', height: '20px' });
	});

	it('should not render the Skeleton component when hideSkeleton is true', () => {
		render(<Title text="" skWidth={100} skHeight={20} hideSkeleton={true} />);

		const skeleton = screen.queryByRole('skeleton');
		expect(skeleton).not.toBeInTheDocument();
	});

	it('should render the Title component when text is provided', () => {
		const text = 'Test Title';
		render(<Title text={text} />);

		const title = screen.getByText(text);
		expect(title).toBeInTheDocument();
	});

	it('should apply additional props to the Title or Skeleton component', () => {
		render(
			<Title text="Test" sx={{ color: 'red' }} skWidth={100} skHeight={20} />,
		);

		const skeleton = screen.queryByRole('skeleton');
		if (skeleton) {
			expect(skeleton).toHaveStyle({ color: 'red' });
		}

		const title = screen.queryByText('Test');
		if (title) {
			expect(title).toHaveStyle({ color: 'red' });
		}
	});
});
