'use client';

import { Paths } from '@/constants/paths.constant';
import { useCommonStore } from '@/store/CommonStore';
import { useUserManageStore } from '@/store/UserManageStore';

import type { GridRenderCellParams } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const useUserManagementTable = () => {
	const { setItemSelected, loading } = useCommonStore();
	const theme = useTheme();
	const router = useRouter();

	const {
		updateShowsModals,
		setError,
		setList,
		list,
		page,
		limit,
		error,
		setPage,
		setLimit,
	} = useUserManageStore();

	const mountOptions = (item: GridRenderCellParams) => {
		return [
			{
				text: 'Ver usuário',
				icon: 'LuUserRound',
				link: '',
				action: () => {
					updateShowsModals('isModalShowUser', true);
				},
				color: theme.palette.grey[600],
				iconColor: theme.palette.grey[500],
			},
			{
				text: 'Editar usuário',
				icon: 'LuUserCog',
				link: '',
				action: () => {
					router.push(`${Paths.Users.edit}/${item.id}`);
				},
				color: theme.palette.grey[600],
				iconColor: theme.palette.grey[500],
			},
			{
				text: 'Abrir painel para feedback',
				icon: 'LuExternalLink',
				link: '',
				action: () => {
					const url = `${window.location.origin}${Paths.Report}/${item.id}`;
					window.open(url, '_blank');
				},
				color: theme.palette.grey[600],
				iconColor: theme.palette.grey[500],
			},
			{
				text: 'Copiar link para feedback',
				icon: 'LuCopy',
				link: '',
				action: () => {
					const url = `${window.location.origin}${Paths.Report}/${item.id}`;
					navigator.clipboard.writeText(url);
					toast.success(
						'Link copiado com sucesso! Envie para o usuário realizar o feedback',
					);
				},
				color: theme.palette.grey[600],
				iconColor: theme.palette.grey[500],
			},
			{
				text: 'Excluir usuário',
				icon: 'LuX',
				link: '',
				action: () => {
					updateShowsModals('isModalDeleteUser', true);
				},
				color: theme.palette.error.main,
			},
		];
	};

	return {
		page,
		loading,
		error,
		list,
		limit,
		setError,
		setList,
		setItemSelected,
		mountOptions,
		setPage,
		setLimit,
	};
};

export default useUserManagementTable;
