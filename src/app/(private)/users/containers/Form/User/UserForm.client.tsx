'use client';

import { useFormik } from 'formik';
import { useCallback, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AxiosError, AxiosResponse } from 'axios';
import { UserFormView } from './UserForm.view';

import validationSchemes from '@/constants/validations/scheme';
import { useCommonRequestData } from '@/hooks/useCommonRequest';
import { Endpoint } from '@/constants/endpoint.constant';
import { UserFormValues } from './UserForm.types';
import { useCommonStore } from '@/store/CommonStore';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useUserManageStore } from '@/store/UserManageStore';
import { IUser } from '@/interfaces/user.interface';

const UserForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const { create, edit, getByOne } = useCommonRequestData();
	const { itemSelected } = useCommonStore();
	const { avatarOptions } = useUserManageStore();

	const { id } = useParams();

	const isEdit = id !== 'create';

	const item = itemSelected as GridRenderCellParams;

	const formik = useFormik({
		initialValues: {
			name: (isEdit && item?.row.name) || '',
			email: (isEdit && item?.row.email) || '',
			password: (isEdit && item?.row.password) || '',
			avatar: (isEdit && item?.row.avatar) || '',
		},
		validationSchema: validationSchemes.user.create.fullScheme,
		onSubmit: async (values: UserFormValues) => {
			if (isEdit) {
				return handleEditUser(values);
			}

			return handleCreateUser(values);
		},
	});

	const handleCreateUser = async (values: UserFormValues) => {
		setIsLoading(true);

		try {
			const response = (await create(
				Endpoint.core.user.main,
				values,
			)) as AxiosResponse<IUser>;

			if ([201, 200].includes(response.status)) {
				toast.success('Usuário criado com sucesso.');
				router.back();
			}
		} catch (err) {
			if (err instanceof AxiosError) {
				toast.error(
					err.response?.data?.message || 'Erro ao criar, tente novamente',
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleEditUser = async (values: UserFormValues) => {
		setIsLoading(true);

		const url = `${Endpoint.core.user.main}/${id}`;

		try {
			const response = (await edit(url, values)) as AxiosResponse<IUser>;

			if ([201, 200].includes(response.status)) {
				toast.success('Usuário atualizado com sucesso.');
				router.back();
			}
		} catch (err) {
			if (err instanceof AxiosError) {
				toast.error(
					err.response?.data?.message || 'Erro ao atualizar, tente novamente',
				);
			}
		} finally {
			setIsLoading(false);
		}
	};

	const handleSetUser = useCallback((user: IUser) => {
		formik.setValues({
			name: user.name,
			email: user.email,
			password: user.password,
			avatar: user.avatar,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleGetUserId = useCallback(async () => {
		try {
			const url = `${Endpoint.core.user.main}/${id}`;
			const response = (await getByOne(url)) as IUser;
			handleSetUser(response);
		} catch (error) {
			if (error instanceof AxiosError) {
				toast.error('Erro ao buscar o usuário, tente novamente');
			}
		}
	}, [getByOne, id, handleSetUser]);

	useEffect(() => {
		if (isEdit) {
			handleGetUserId();
		}
	}, [handleGetUserId, isEdit]);

	return (
		<UserFormView
			formik={formik}
			isLoading={isLoading}
			onBack={() => router.back()}
			isEdit={isEdit}
			avatarOptions={avatarOptions}
		/>
	);
};

export default UserForm;
