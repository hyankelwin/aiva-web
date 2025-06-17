import { create } from 'zustand';

interface Drawer {
	isOpen: boolean;
	toggle: () => void;
}

export interface Store {
	drawer: Drawer;
}

export const useDrawerStore = create<Store>((set) => ({
	drawer: {
		isOpen: true,
		toggle: () =>
			set((state) => ({
				drawer: {
					...state.drawer,
					isOpen: !state.drawer.isOpen,
				},
			})),
	},
}));
