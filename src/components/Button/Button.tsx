import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

const Button = ({ children, ...rest }: ButtonProps) => {
	return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
