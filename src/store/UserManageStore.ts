import { paginationOptions } from '@/constants/pagination';
import { IUser } from '@/interfaces/user.interface';
import { create } from 'zustand';

interface UserStore {
	updateShowsModals: (option: string, value: boolean) => void;
	showModals: {
		isModalDeleteUser: boolean;
		isModalShowUser: boolean;
	};

	list: IUser[];
	setList: (list: IUser[]) => void;

	page: number;
	limit: number;
	loading: boolean;
	error: boolean;
	avatarOptions: {
		url: string;
	}[];
	setPage: (item: number) => void;
	setLimit: (item: number) => void;
	setLoading: (value: boolean) => void;
	setError: (value: boolean) => void;
}

export const useUserManageStore = create<UserStore>((set) => ({
	showModals: {
		isModalDeleteUser: false,
		isModalShowUser: false,
	},

	avatarOptions: [
		{
			url: 'https://api.dicebear.com/9.x/dylan/svg?seed=Aiden',
		},
		{
			url: 'https://api.dicebear.com/9.x/dylan/svg?seed=Liam',
		},
		{
			url: 'https://api.dicebear.com/9.x/dylan/svg?seed=Alexander',
		},
	],

	list: [],

	page: paginationOptions.page,
	limit: paginationOptions.limit,
	loading: false,
	error: false,

	setLimit: (newLimit: number) => set({ limit: newLimit }),

	setPage: (newPage: number) => set({ page: newPage }),

	setLoading: (value: boolean) => set({ loading: value }),

	setError: (value: boolean) => set({ error: value }),

	setList: (list) =>
		set((state) => ({
			...state,
			list,
		})),

	updateShowsModals: (option: string, value: boolean) =>
		set((state) => ({
			showModals: { ...state.showModals, [option]: value },
		})),
}));
