import axios, { AxiosResponse } from 'axios';
import { Vacancy } from '../models/vacancy';

const sleep = (delay: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, delay);
	});
};

axios.defaults.baseURL = 'https://localhost:5001/api';

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

const Vacancies = {
	getAllVacancies: () => requests.get<Vacancy[]>('/Vacancy/GetAllVacancies'),
	getVacancyById: (id: string) =>
		requests.get<Vacancy>(`/Vacancy/GetVacancy/${id}`),
};

const agent = {
	Vacancies,
};

export default agent;
