import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { LoginDto } from '../models/loginDto';
import { User } from '../models/user';
import { store } from './store';

export default class AuthStore {
	user: User | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	login = async (login: LoginDto) => {
		try {
			const user = await agent.Account.login(login);

			//set token

			runInAction(() => {
				this.user = user;
			});
			console.log(user);
			//history.push('/vacancy');
		} catch (error) {
			console.log(error);
		}
	};
}
