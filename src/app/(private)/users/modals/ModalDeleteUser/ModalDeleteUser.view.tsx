import { Grid, IconButton, Typography, CircularProgress } from '@mui/material';
import { LucideOctagonX } from 'lucide-react';
import { LuX } from 'react-icons/lu';
import { Modal } from '@/components/Modal';
import { Button } from '@/components';

interface Props {
	open: boolean;
	onClose: () => void;
	onDelete: () => void;
	loading: boolean;
	errorColor: string;
	titleColor: string;
}

export const ModalDeleteUserView = ({
	open,
	onClose,
	onDelete,
	loading,
	errorColor,
	titleColor,
}: Props) => {
	return (
		<Modal.Root open={open} onClose={onClose}>
			<Modal.Header title="Excluir usuário" showCloseButton>
				<IconButton onClick={onClose}>
					<LuX />
				</IconButton>
			</Modal.Header>

			<Modal.Content>
				<Grid
					container
					direction="column"
					justifyContent="center"
					alignItems="center"
				>
					<LucideOctagonX size={80} color={errorColor} />
					<Typography variant="title_lg" color={titleColor} sx={{ mt: 3 }}>
						Deseja excluir o usuário?
					</Typography>
				</Grid>

				<Grid
					container
					justifyContent="center"
					alignItems="center"
					sx={{ mt: 4, gap: 2 }}
				>
					<Button
						onClick={onClose}
						variant="outlined"
						color="secondary"
						size="medium"
					>
						Voltar
					</Button>
					<Button
						onClick={onDelete}
						variant="contained"
						color="primary"
						disabled={loading}
					>
						{loading ? (
							<CircularProgress size={28} thickness={6} color="secondary" />
						) : (
							'Excluir'
						)}
					</Button>
				</Grid>
			</Modal.Content>
		</Modal.Root>
	);
};
