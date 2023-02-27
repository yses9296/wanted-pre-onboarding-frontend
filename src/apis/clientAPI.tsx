import axios, { InternalAxiosRequestConfig } from 'axios';

export const clientAuthAPI = axios.create({
	baseURL: 'https://pre-onboarding-selection-task.shop/auth/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export const clientTodoAPI = axios.create({
	baseURL: 'https://pre-onboarding-selection-task.shop/',
	headers: {
		Authorization: `Bearer ${localStorage.getItem('ACCESS_TOKEN')}`,
		'Content-Type': 'application/json',
	},
});

clientTodoAPI.interceptors.request.use(config => {
	const accessToken = localStorage.getItem('ACCESS_TOKEN');

	if (!accessToken) {
		return Promise.reject(new Error('인증되지 않은 접근입니다.\n다시 로그인해주세요.'));
	}

	return {
		...config,
		headers: { ...config.headers, Authorization: `Bearer ${accessToken}` },
	} as InternalAxiosRequestConfig;
});
