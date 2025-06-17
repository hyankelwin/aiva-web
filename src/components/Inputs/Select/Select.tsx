'use client';
import React from 'react';
import {
	FormControl,
	Select as MuiSelect,
	BaseSelectProps as MuiSelectProps,
	MenuItem,
	SelectChangeEvent,
	InputLabel,
} from '@mui/material';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import HelperTextWrapper from '../HelperTextWrapper';

interface SelectProps extends MuiSelectProps {
	label: string;
	itens: { value: number | string; label: string }[];
	error?: boolean;
	helperText?: string | number | boolean;
	placeholder?: string;
	dataCy?: string;
	value: number | string;
	onChange?: (value: SelectChangeEvent<unknown>) => void;
}

const SelectInput = ({
	label,
	itens,
	error,
	helperText,
	placeholder = 'Selecione',
	dataCy,
	value,
	onChange,
	...rest
}: SelectProps) => {
	const labelId = `${label}-label`;

	return (
		<FormControl fullWidth error={error}>
			<InputLabel id={labelId} data-testid="select-label">
				{label}
			</InputLabel>
			<MuiSelect
				value={value}
				onChange={onChange}
				label={label}
				data-cy={dataCy}
				{...rest}
				inputProps={{
					sx: {
						color: defaultColors.grey[600],
						borderRadius: 2,
					},
				}}
				data-testid="custom-select"
			>
				<MenuItem key={-1} value={placeholder} disabled>
					{placeholder}
				</MenuItem>
				{itens.map((item, index) => (
					<MenuItem key={index} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</MuiSelect>
			{helperText && (
				<HelperTextWrapper classes={['Mui-error']}>
					{helperText}
				</HelperTextWrapper>
			)}
		</FormControl>
	);
};

export default SelectInput;
