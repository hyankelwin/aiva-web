import { IUser } from '@/interfaces/user.interface';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
	user: IUser;
	setUser: (data: IUser) => void;
}

export const useAuthStore = create(
	persist<AuthState>(
		(set) => ({
			user: {
				id: 0,
				email: '',
				password: '',
				name: '',
				role: '',
				avatar: '',
				creationAt: '',
				updatedAt: '',
			},
			setUser: ({
				id,
				email,
				password,
				name,
				role,
				avatar,
				creationAt,
				updatedAt,
			}: IUser) =>
				set({
					user: {
						id,
						email,
						password,
						name,
						role,
						avatar,
						creationAt,
						updatedAt,
					},
				}),
		}),
		{
			name: 'user-storage',
		},
	),
);
