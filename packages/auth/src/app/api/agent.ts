import axios, { AxiosResponse } from 'axios';
import { User } from '../models/user';
import { LoginDto } from '../models/loginDto';
import { RegisterDto } from '../models/registerDto';

const sleep = (delay: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
};

axios.defaults.baseURL = 'http://localhost:58964/api/Account';

axios.interceptors.response.use(async (response) => {
	await sleep(1000);
	return response;
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: {}) =>
		axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
	del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
	current: () => requests.get<User>('/GetCurrentUser'),
	login: (login: LoginDto) => requests.post<User>('/Login', login),
	register: (register: RegisterDto) =>
		requests.post<User>('/Register', register),
};

const agent = { Account };

export default agent;
