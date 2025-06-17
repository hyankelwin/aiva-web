'use client';

import { useTheme } from '@mui/material';
import { toast } from 'react-toastify';
import { AxiosError, AxiosResponse } from 'axios';
import { useCommonStore } from '@/store/CommonStore';
import { useCommonRequestData } from '@/hooks/useCommonRequest';
import useUserManagementTable from '../../hooks/useUserManagementTable';
import { Endpoint } from '@/constants/endpoint.constant';
import { ModalDeleteUserView } from './ModalDeleteUser.view';
import { useUserManageStore } from '@/store/UserManageStore';
import { IUser } from '@/interfaces/user.interface';

const ModalDeleteUser = () => {
	const theme = useTheme();
	const { findAll, remove } = useCommonRequestData();
	const { itemSelected, loading } = useCommonStore();
	const { updateShowsModals, showModals } = useUserManageStore();

	const { page, limit, setList, setPage, setLimit, setError } =
		useUserManagementTable();

	const handleCloseModal = () => {
		updateShowsModals('isModalDeleteUser', false);
	};

	const handleDeleteItem = async () => {
		if (!itemSelected?.id) return;

		const url = `${Endpoint.core.user.main}/${itemSelected.id}`;

		try {
			const response = (await remove(url)) as AxiosResponse;

			if (response) {
				toast.success('Usuário excluído com sucesso');
				handleCloseModal();

				await findAll(
					Endpoint.core.user.main,
					{ page, limit },
					{
						setList: (data) => setList(data as IUser[]),
						setPage,
						setLimit,
						setError,
					},
				);
			}
		} catch (err) {
			if (err instanceof AxiosError) {
				toast.error(err.response?.data?.detail);
			}
		}
	};

	return (
		<ModalDeleteUserView
			open={showModals.isModalDeleteUser}
			onClose={handleCloseModal}
			onDelete={handleDeleteItem}
			loading={loading}
			errorColor={theme.palette.error.main}
			titleColor={theme.palette.grey[800]}
		/>
	);
};

export default ModalDeleteUser;
