import { Paths } from '@/constants/paths.constant';
import { menuActionsEnum } from '@/enums/menuActions.enum';
import { IMenuSidebar } from '@/interfaces/menu.interface';
import defaultColors from '@/styles/theme/DefaultTheme/DefaultColors';

export interface MenuSidebarProps {
	text: string;
	icon: string;
	dataCy: string;
	link: string;
	externalLink?: string;
	dataTestId: string;
}

export const menuSidebar = () => {
	return [
		{
			text: 'Início',
			icon: 'LuHouse',
			link: Paths.Home,
			dataTestId: 'menu-item-icon-beginning',
		},
		{
			text: 'Usuários',
			icon: 'LuUser',
			link: Paths.Users.list,
			externalLink: '',
			dataTestId: 'menu-item-icon-users',
		},
		{
			text: 'Feedbacks',
			icon: 'LuNewspaper',
			link: Paths.Feedbacks,
			externalLink: '',
			dataTestId: 'menu-item-icon-users',
		},
	] as MenuSidebarProps[];
};

export const menuOptions: IMenuSidebar[] = [
	{
		text: 'Sair',
		icon: 'LuLogOut',
		link: Paths.Login,
		action: menuActionsEnum.LOGOUT,
		color: defaultColors.error.main,
	},
];
