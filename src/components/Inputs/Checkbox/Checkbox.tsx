import React from 'react';
import {
	CheckboxProps as MuiCheckboxProps,
	FormControlLabel,
	FormGroup,
} from '@mui/material';
import { Checkbox as MuiCheckbox } from '@mui/material';

interface CheckboxProps extends MuiCheckboxProps {
	label: string;
}

const Checkbox = ({ ...props }: CheckboxProps) => (
	<FormGroup>
		<FormControlLabel
			control={<MuiCheckbox {...props} />}
			label={props.label}
		/>
	</FormGroup>
);

export default Checkbox;
