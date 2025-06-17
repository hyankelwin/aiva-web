import React from 'react';
import { Typography, Avatar, Box, Divider } from '@mui/material';
import { IUser } from '@/interfaces/user.interface';
import { Modal } from '@/components/Modal';
import dayjs from 'dayjs';

interface UserModalProps {
	open: boolean;
	onClose: () => void;
	user: IUser;
}

export const ModalShowUserView = ({ open, onClose, user }: UserModalProps) => {
	return (
		<Modal.Root open={open} onClose={onClose}>
			<Modal.Content sx={{ p: 4 }}>
				<Box display="flex" justifyContent="center" mb={2}>
					<Avatar
						src={user?.avatar}
						alt={user?.name}
						sx={{ width: 80, height: 80 }}
					/>
				</Box>

				<Divider sx={{ mb: 2 }} />

				<Typography variant="body1" gutterBottom>
					<strong>Nome:</strong> {user?.name}
				</Typography>

				<Typography variant="body1" gutterBottom>
					<strong>Email:</strong> {user?.email}
				</Typography>

				<Typography variant="body1">
					<strong>Criado em:</strong>{' '}
					{dayjs(user?.creationAt).format('DD/MM/YYYY HH:mm')}
				</Typography>
			</Modal.Content>
		</Modal.Root>
	);
};
