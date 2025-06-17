import Actions from '@/components/DataTable/Actions/Actions';
import dayjs from 'dayjs';

import type {
	GridColDef,
	GridRenderCellParams,
	GridTreeNodeWithRender,
} from '@mui/x-data-grid';
import { Avatar } from '@/components';

const UserManagementTableOptions = (
	mountOptions: (item: GridRenderCellParams<GridTreeNodeWithRender>) => {
		text: string;
		icon: string;
		link: string;
		action: () => void;
		color: string;
	}[],
	setItemSelected: (item: GridRenderCellParams) => void,
) => {
	const userManagementColumns: GridColDef[] = [
		{
			field: 'avatar',
			headerName: '',
			align: 'center',
			flex: 0.3,
			disableColumnMenu: true,
			renderCell: (params) => <Avatar alt="User Avatar" src={params.value} />,
		},
		{
			field: 'name',
			headerName: 'Nome',
			align: 'left',
			flex: 1,
			disableColumnMenu: true,
			valueGetter: (_, row) => (row.name ? row.name : ' - '),
		},
		{
			field: 'email',
			headerName: 'E-mail',
			flex: 1,
			disableColumnMenu: true,
			valueGetter: (_, row) => (row.email ? row.email : ' - '),
		},
		{
			field: 'role',
			headerName: 'Papel',
			align: 'left',
			flex: 1,
			disableColumnMenu: true,
		},
		{
			field: 'creationAt',
			headerName: 'Criado em',
			align: 'left',
			flex: 1,
			disableColumnMenu: true,
			valueGetter: (_, row) =>
				row.creationAt
					? dayjs(row.creationAt).format('DD/MM/YYYY HH:mm')
					: ' - ',
		},
		{
			field: 'updatedAt',
			headerName: 'Editado em',
			align: 'left',
			flex: 1,
			disableColumnMenu: true,
			valueGetter: (_, row) =>
				row.updatedAt ? dayjs(row.updatedAt).format('DD/MM/YYYY HH:mm') : ' - ',
		},
		{
			field: 'actions',
			headerName: 'Ações',
			headerAlign: 'center',
			align: 'center',
			width: 70,
			disableColumnMenu: true,
			sortable: false,
			renderCell: (option) => (
				<Actions
					data-testid="menu-user"
					item={option}
					options={mountOptions(option)}
					onClickOption={() => {
						setItemSelected(option);
					}}
				/>
			),
		},
	];

	return userManagementColumns;
};

export default UserManagementTableOptions;
