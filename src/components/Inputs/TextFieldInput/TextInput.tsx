import React, { useMemo, useState } from 'react';
import { IconButton, TextField, TextFieldProps } from '@mui/material';
import { TextIcon } from './TextIcon';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';
import { Text } from '.';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import HelperTextWrapper from '../HelperTextWrapper';

export type TextInputProps = TextFieldProps & {
	dataCy?: string;
	children?: React.ReactNode;
};

export const TextInput: React.FC<TextInputProps> = ({
	children,
	label,
	variant,
	type,
	...rest
}) => {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === 'password';
	const computedVariant = variant || (label ? 'outlined' : 'filled');

	let startAdornment: React.ReactNode = undefined;
	let endAdornment: React.ReactNode = undefined;

	React.Children.forEach(children, (child) => {
		if (React.isValidElement(child) && child.type === TextIcon) {
			const position = child.props.position || 'start';
			if (position === 'start') {
				startAdornment = child;
			} else if (position === 'end') {
				endAdornment = child;
			}
		}
	});

	const changeShow = () => {
		setShowPassword((oldShow) => !oldShow);
	};

	const renderPasswordAddornment = () => {
		return (
			<Text.Icon position="end">
				<IconButton
					aria-label="toggle password visibility"
					onClick={changeShow}
				>
					{showPassword ? (
						<LuEye size={24} color={defaultColors.grey[600]} />
					) : (
						<LuEyeOff size={24} color={defaultColors.grey[600]} />
					)}
				</IconButton>
			</Text.Icon>
		);
	};

	const inputType = useMemo(() => {
		if (!isPassword) {
			return 'text';
		}

		return showPassword ? 'text' : 'password';
	}, [isPassword, showPassword]);
	return (
		<TextField
			style={{ borderWidth: 1, borderRadius: 32 }}
			variant={computedVariant}
			label={label}
			type={inputType}
			{...rest}
			InputProps={{
				startAdornment: startAdornment,
				endAdornment: isPassword ? renderPasswordAddornment() : endAdornment,
				sx: { borderRadius: 2, color: defaultColors.grey[600] },
			}}
			sx={{
				'& .MuiInputBase-input': {
					'&:-webkit-autofill': {
						WebkitBoxShadow: `0 0 0 100px #fff inset !important`,
						WebkitTextFillColor: `${defaultColors.grey[600]} !important`,
					},

					'& .Mui-focused': {
						border: `2px solid ${defaultColors.secondary.light} !important`,
						margin: -1,
					},
				},
			}}
			FormHelperTextProps={{ component: HelperTextWrapper }}
		/>
	);
};
