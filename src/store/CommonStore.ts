import { create } from 'zustand';

import { GridRenderCellParams } from '@mui/x-data-grid';

interface CommonStore {
	setItemSelected: (item: GridRenderCellParams) => void;
	itemSelected: GridRenderCellParams | null;
	loading: boolean;
	setLoading: (value: boolean) => void;
}

export const useCommonStore = create<CommonStore>((set) => ({
	itemSelected: null,
	loading: false,

	setLoading: (value: boolean) => set({ loading: value }),

	setItemSelected: (item: GridRenderCellParams) =>
		set(() => ({
			itemSelected: item,
		})),
}));
