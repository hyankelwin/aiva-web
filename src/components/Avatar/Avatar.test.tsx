import { render } from '@testing-library/react';
import Avatar from './index';

describe('Avatar component', () => {
	it('should render Skeleton when isLoading is true', () => {
		const { container } = render(<Avatar isLoading />);
		expect(container.querySelector('.MuiSkeleton-root')).toBeInTheDocument();
	});

	it('should render AvatarMUI with LuUser icon when isLoading is false', () => {
		const { container } = render(<Avatar />);
		expect(container.querySelector('.MuiAvatar-root')).toBeInTheDocument();
		expect(container.querySelector('svg')).toBeInTheDocument();
	});

	it('should pass the correct iconSize to LuUser', () => {
		const iconSize = 32;
		const { container } = render(<Avatar iconSize={iconSize} />);
		const icon = container.querySelector('svg');
		expect(icon).toHaveAttribute('width', `${iconSize}`);
		expect(icon).toHaveAttribute('height', `${iconSize}`);
	});

	it('should pass the rest props to AvatarMUI', () => {
		const { container } = render(<Avatar title="Test Avatar" />);
		expect(container.querySelector('.MuiAvatar-root')).toHaveAttribute(
			'title',
			'Test Avatar',
		);
	});
});
