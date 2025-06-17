import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectInput from './Select';

describe('SelectInput', () => {
	const mockOnChange = jest.fn();
	const defaultProps = {
		label: 'Test Label',
		itens: [
			{ value: '1', label: 'Option 1' },
			{ value: '2', label: 'Option 2' },
		],
		value: '',
		onChange: mockOnChange,
	};

	it('should render the select input with label', () => {
		render(<SelectInput {...defaultProps} />);
		expect(screen.getByTestId('select-label')).toBeInTheDocument();
		expect(screen.getByTestId('select-label')).toHaveTextContent('Test Label');
	});

	it('should render the placeholder', () => {
		render(<SelectInput {...defaultProps} />);
		const trigger = screen.getByRole('combobox');
		fireEvent.mouseDown(trigger);
		const element = screen.getByText('Selecione');
		expect(element).toBeInTheDocument();
	});

	it('should render all options', () => {
		render(<SelectInput {...defaultProps} />);
		const trigger = screen.getByRole('combobox');
		fireEvent.mouseDown(trigger);
		expect(screen.getByText('Option 1')).toBeInTheDocument();
		expect(screen.getByText('Option 2')).toBeInTheDocument();
	});

	it('should call onChange when an option is selected', () => {
		const { container } = render(<SelectInput {...defaultProps} />);
		const trigger = screen.getByRole('combobox');
		fireEvent.mouseDown(trigger);

		expect(screen.getByText('Option 1')).toBeInTheDocument();

		fireEvent.change(container.querySelector('input[aria-hidden="true"]')!, {
			target: { value: '1' },
		});

		expect(mockOnChange).toHaveBeenCalled();
	});

	it('should display helper text when provided', () => {
		render(<SelectInput {...defaultProps} helperText="Helper text" />);
		expect(screen.getByText('Helper text')).toBeInTheDocument();
	});

	it('should display error state when error prop is true', () => {
		render(<SelectInput {...defaultProps} error />);
		expect(screen.getByTestId('custom-select')).toHaveClass('Mui-error');
	});
});
