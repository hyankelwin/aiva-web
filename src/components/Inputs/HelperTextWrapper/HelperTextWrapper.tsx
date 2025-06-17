'use client';

import React from 'react';
import * as S from './styles';

const HelperTextWrapper: React.FC<{
	children: React.ReactNode;
	classes: string[];
}> = ({ children, classes = [] }) => {
	const errorClass = classes.includes('Mui-error') ? 'error' : '';

	return (
		<S.CustomFormHelperText>
			<S.LuCircleAlert className={errorClass} fontSize={16} />
			<span>{children}</span>
		</S.CustomFormHelperText>
	);
};

export default HelperTextWrapper;
