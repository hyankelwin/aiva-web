import { render, screen } from '@testing-library/react';
import Label from './Label';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';

describe('Label Component', () => {
	it('renders the title correctly', () => {
		render(<Label title="Test Title" />);
		expect(screen.getByText('Test Title')).toBeInTheDocument();
	});

	it('renders the data correctly when not loading', () => {
		render(<Label title="Test Title" data="Test Data" isLoading={false} />);
		expect(screen.getByText('Test Data')).toBeInTheDocument();
	});

	it('renders the Skeleton when loading', () => {
		render(<Label title="Test Title" isLoading={true} />);
		expect(screen.getByTestId('skeleton')).toBeInTheDocument();
	});

	it('applies the correct color to the data text', () => {
		render(<Label title="Test Title" data="Test Data" />);
		const dataText = screen.getByText('Test Data');
		expect(dataText).toHaveStyle(`color: ${defaultColors.grey[500]}`);
	});

	it('renders correctly with no data provided', () => {
		render(<Label title="Test Title" />);
		const dataText = screen.queryByText('Test Data');
		expect(dataText).not.toBeInTheDocument();
	});
});
