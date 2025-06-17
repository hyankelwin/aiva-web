import React from 'react';
import { render } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar component', () => {
	it('should render children correctly', () => {
		const { getByText } = render(
			<Avatar>
				<span>Test Child</span>
			</Avatar>,
		);
		expect(getByText('Test Child')).toBeInTheDocument();
	});

	it('should forward ref to ListItemAvatar', () => {
		const ref = React.createRef<HTMLDivElement>();
		render(
			<Avatar ref={ref}>
				<span>Test Child</span>
			</Avatar>,
		);
		expect(ref.current).toBeInstanceOf(HTMLDivElement);
	});

	it('should pass additional props to ListItemAvatar', () => {
		const { container } = render(
			<Avatar className="test-class">
				<span>Test Child</span>
			</Avatar>,
		);
		expect(container.firstChild).toHaveClass('test-class');
	});
});
