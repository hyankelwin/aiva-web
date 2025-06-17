import React from 'react';
import * as S from '../styles';
import { BoxProps } from '@mui/material';

interface ModalContentProps extends BoxProps {
	children?: React.ReactNode;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, ...rest }) => {
	return <S.ModalContent {...rest}>{children}</S.ModalContent>;
};

export default ModalContent;
