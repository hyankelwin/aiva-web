import { useCallback } from 'react';

import {
	get,
	post,
	deleteOne,
	getOne,
	put,
} from '@/services/api/escuelajs/common/common.request';
import { useCommonStore } from '@/store/CommonStore';

import type { CommonsResquestTypes } from '@/interfaces/commons.interface';
import { IUser } from '@/interfaces/user.interface';

interface PaginationRequest {
	page: number;
	limit: number;
}

interface useCommonRequestDataReturn {
	findAll(
		url: string,
		pagination: PaginationRequest,
		functions: FunctionsRequest,
	): Promise<unknown>;
	remove(url: string): Promise<unknown>;
	getByOne(url: string): Promise<unknown>;
	edit(url: string, data: CommonsResquestTypes): Promise<unknown>;
	create(url: string, data?: CommonsResquestTypes): Promise<unknown>;
	edit(url: string, data?: CommonsResquestTypes): Promise<unknown>;
}

interface FunctionsRequest {
	setList: (data: IUser[] | unknown) => void;
	setLimit: (limit: number) => void;
	setPage: (page: number) => void;
	setError: (error: boolean) => void;
}

export const useCommonRequestData = (): useCommonRequestDataReturn => {
	const { setLoading } = useCommonStore();

	const findAll = useCallback(
		async (
			url: string,
			pagination: PaginationRequest,
			functions: FunctionsRequest,
		) => {
			setLoading(true);
			try {
				const response = await get(
					{
						limit: pagination.limit,
					},
					url,
				);

				if (response.data) {
					functions.setList(response.data);
					functions.setPage(pagination.page);
					functions.setError(false);
				}
			} catch (err) {
				console.log(err);
			} finally {
				setLoading(false);
			}
		},
		[setLoading],
	);

	const create = useCallback(
		async (url: string, data?: CommonsResquestTypes) => {
			setLoading(true);
			try {
				const response = await post(
					url,
					data ? data : ({} as CommonsResquestTypes),
				);
				if (response.data) {
					return response;
				}
			} catch (err) {
				console.log(err);
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[setLoading],
	);

	const edit = useCallback(
		async (url: string, data?: CommonsResquestTypes) => {
			setLoading(true);
			try {
				const response = await put(
					url,
					data ? data : ({} as CommonsResquestTypes),
				);
				if (response.data) {
					return response;
				}
			} catch (err) {
				console.log(err);
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[setLoading],
	);

	const remove = useCallback(
		async (url: string) => {
			setLoading(true);
			try {
				const response = await deleteOne(url);
				if (response.status === 200 || response.status === 204) {
					return true;
				}
			} catch (err) {
				console.log(err);
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[setLoading],
	);

	const getByOne = useCallback(
		async (url: string) => {
			setLoading(true);
			try {
				const response = await getOne(url);
				if (response.data) {
					return response.data;
				}
			} catch (err) {
				console.log(err);
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[setLoading],
	);

	return {
		create,
		remove,
		edit,
		findAll,
		getByOne,
	};
};
