import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { LoginDto } from '../models/loginDto';
import { RegisterDto } from '../models/registerDto';
import { User } from '../models/user';
import { store } from './store';

export default class AuthStore {
	user: User | null = null;

	constructor() {
		makeAutoObservable(this);
	}

	login = async (login: LoginDto) => {
		try {
			if (!this.user) {
				const user = await agent.Account.login(login);

				runInAction(() => {
					this.user = user;
				});
				store.modalStore.closeModal();
			}
		} catch (error) {
			console.log(error);
		}
	};

	register = async (register: RegisterDto) => {
		try {
			const user = await agent.Account.register(register);

			runInAction(() => {
				this.user = user;
			});
			store.modalStore.closeModal();
		} catch (error) {
			console.log(error);
		}
	};

	logout = () => {
		this.user = null;
	};
}
