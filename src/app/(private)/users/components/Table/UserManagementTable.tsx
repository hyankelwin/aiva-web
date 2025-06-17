'use client';

import DataTable from '@/components/DataTable/DataTable';
import DataTableEmptyRows from '@/components/DataTable/DataTableEmptyRows';
import { paginationOptions } from '@/constants/pagination';
import useUserManagementTable from '../../hooks/useUserManagementTable';
import UserManagementTableOptions from './UserManagementTableOptions';
import { useEffect } from 'react';
import { useCommonRequestData } from '@/hooks/useCommonRequest';
import { Endpoint } from '@/constants/endpoint.constant';
import { IUser } from '@/interfaces/user.interface';

function UserManagementTable() {
	const {
		page,
		loading,
		list,
		limit,
		setList,
		setError,
		setPage,
		setLimit,
		mountOptions,
		setItemSelected,
	} = useUserManagementTable();

	const { findAll } = useCommonRequestData();
	const url = Endpoint.core.user.main;

	useEffect(() => {
		const getAll = async () => {
			await findAll(
				url,
				{
					page,
					limit,
				},
				{
					setList: (data) => setList(data as IUser[]),
					setPage,
					setLimit,
					setError,
				},
			);
		};

		getAll();
	}, [page, limit, url, findAll, setList, setPage, setLimit, setError]);

	return (
		<DataTable
			columns={UserManagementTableOptions(mountOptions, setItemSelected)}
			rows={list.slice(limit - 10, limit)}
			data-testid="user-data-table-id"
			pageSizeOptions={[paginationOptions.limit]}
			loading={loading}
			slotProps={{
				loadingOverlay: {
					variant: 'circular-progress',
					noRowsVariant: 'circular-progress',
				},

				pagination: {
					page: page,

					onPageChange(_, pageEvent) {
						setPage(pageEvent);
						setLimit(page < pageEvent ? limit + 10 : limit - 10);
					},

					disabled: loading,
				},
			}}
			pagination
			paginationMode="server"
			rowCount={list.length < limit ? list.length : limit}
			emptyRows={
				<DataTableEmptyRows title="Não existem usuários cadastrados" />
			}
		/>
	);
}

export default UserManagementTable;
