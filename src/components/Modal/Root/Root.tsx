import React from 'react';
import { Modal } from '@mui/material';
import * as S from '../styles';

interface ModalRootProps {
	open: boolean;
	size?: 'small' | 'medium' | 'large';
	dataCy?: string;
	children: React.ReactNode;
	onClose?: () => void;
}

const ModalRoot: React.FC<ModalRootProps> = ({
	open,
	size = 'medium',
	children,
	dataCy,
	onClose,
	...rest
}) => {
	return (
		<Modal
			open={open}
			onClose={() => onClose && onClose()}
			{...rest}
			data-cy="modal_new_user"
		>
			<S.ModalContainer prop={{ size: size }} data-cy={dataCy}>
				{children}
			</S.ModalContainer>
		</Modal>
	);
};

export default ModalRoot;
