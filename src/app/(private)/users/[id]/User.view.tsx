import { Grid, Theme } from '@mui/material';
import { LucideHome } from 'lucide-react';
import { Paths } from '@/constants/paths.constant';
import { Breadcrumbs } from '@/components';
import UserForm from '../containers/Form/User/UserForm.client';

interface Props {
	theme: Theme;
	isEdit: boolean;
}

export const UserView = ({ theme, isEdit }: Props) => {
	return (
		<Grid sx={{ m: 4 }}>
			<Breadcrumbs
				items={[
					{
						label: 'Início',
						link: Paths.Home,
						icon: <LucideHome size={20} color={theme.palette.grey[400]} />,
					},
					{ label: 'Gestão de usuários', link: Paths.Users.list },
					{
						label: isEdit ? 'Editar usuário' : 'Criar usuário',
						active: true,
					},
				]}
			/>

			<UserForm />
		</Grid>
	);
};
