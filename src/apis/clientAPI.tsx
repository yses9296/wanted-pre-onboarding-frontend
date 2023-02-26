import axios from 'axios';

export const clientAuthAPI = axios.create({
	baseURL: 'https://pre-onboarding-selection-task.shop/',
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

	if (accessToken && config.headers) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}
	return config;
});
