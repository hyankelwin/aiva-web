import { AxiosResponse } from 'axios';

import API from '../base.request';
import type { Pagination } from '@/services/api/escuelajs/interfaces/pagination.interface';
import type { CommonsResquestTypes } from '@/interfaces/commons.interface';

export const CURRENT_API = API;

export const get = (
	{ limit }: Pagination,
	url: string,
): Promise<AxiosResponse> => {
	return CURRENT_API.request({
		method: 'GET',
		url,
		params: {
			limit,
		},
	});
};

export const post = (
	url: string,
	data: CommonsResquestTypes,
): Promise<AxiosResponse> => {
	return CURRENT_API.request({
		method: 'POST',
		url,
		data,
	});
};

export const deleteOne = (url: string): Promise<AxiosResponse> => {
	return CURRENT_API.request({
		method: 'DELETE',
		url: url,
	});
};

export const getOne = (url: string): Promise<AxiosResponse> => {
	return CURRENT_API.request({
		method: 'GET',
		url: url,
	});
};

export const put = (
	url: string,
	data: CommonsResquestTypes,
): Promise<AxiosResponse> => {
	return CURRENT_API.request({
		method: 'PUT',
		url,
		data,
	});
};
