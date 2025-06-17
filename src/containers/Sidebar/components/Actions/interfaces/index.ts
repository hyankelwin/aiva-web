import { IMenuSidebar } from '@/interfaces/menu.interface';

export interface ActionsProps {
	isOpen: boolean;
	onClose?: () => void;
	children?: React.ReactNode;
	anchor?: HTMLElement | null;
	options: IMenuSidebar[];
}
