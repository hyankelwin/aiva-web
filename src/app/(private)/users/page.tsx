import { Grid } from '@mui/material';
import UserManagementTable from './components/Table/UserManagementTable';
import { ModalDeleteUser } from './modals/ModalDeleteUser';
import { CustomBreadcrumbs } from './components/Breadcrumbs';
import { TopBar } from './components/TopBar';
import { ModalShowUser } from './modals/ModalShowUser';

const UserManagement = () => {
	return (
		<Grid sx={{ m: 4 }}>
			<CustomBreadcrumbs />
			<ModalDeleteUser />
			<ModalShowUser />
			<TopBar />
			<UserManagementTable />
		</Grid>
	);
};

export default UserManagement;
