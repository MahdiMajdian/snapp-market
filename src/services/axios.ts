import { envState } from '@utilities';
import axios from 'axios';
const { API_URL } = envState;

const instance = axios.create({
	baseURL: API_URL,
	timeout: 20000,
});

export const get = (url: string, params?: { [key: string]: string }) => {
	return instance.request({ method: 'GET', url, params });
};
