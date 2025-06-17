import { IMenuActions } from '@/enums/menuActions.enum';

export interface IMenuSidebar {
	text: string;
	icon: string;
	isSvg?: boolean;
	link: string;
	action: IMenuActions;
	color: string;
}
