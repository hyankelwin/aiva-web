import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
	it('should render the checkbox with the provided label', () => {
		render(<Checkbox label="Test Label" />);
		expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
	});

	it('should be unchecked by default', () => {
		render(<Checkbox label="Test Label" />);
		const checkbox: HTMLInputElement = screen.getByLabelText('Test Label');
		expect(checkbox.checked).toBe(false);
	});

	it('should be checked when the checked prop is true', () => {
		render(<Checkbox label="Test Label" checked />);
		const checkbox: HTMLInputElement = screen.getByLabelText('Test Label');
		expect(checkbox.checked).toBe(true);
	});

	it('should call the onChange handler when clicked', () => {
		const handleChange = jest.fn();
		render(<Checkbox label="Test Label" onChange={handleChange} />);
		const checkbox: HTMLInputElement = screen.getByLabelText('Test Label');
		fireEvent.click(checkbox);
		expect(handleChange).toHaveBeenCalledTimes(1);
	});

	it('should be disabled when the disabled prop is true', () => {
		render(<Checkbox label="Test Label" disabled />);
		const checkbox: HTMLInputElement = screen.getByLabelText('Test Label');
		expect(checkbox.disabled).toBe(true);
	});
});
