import { makeAutoObservable, runInAction } from 'mobx';
import agent from '../api/agent';
import { Vacancy } from '../models/vacancy';

export default class VacancyStore {
	vacancyRegistry = new Map<string, Vacancy>();
	selectedVacancy: Vacancy | undefined = undefined;
	loading = false;
	loadingInitial = false;

	constructor() {
		makeAutoObservable(this);
	}

	get vacancyArray() {
		return Array.from(this.vacancyRegistry.values());
	}

	requirementArray = (vacancy: Vacancy) => {
		return vacancy.requirements.split(',');
	};

	loadVacancies = async () => {
		this.loadingInitial = true;

		try {
			var vacancies = await agent.Vacancies.getAllVacancies();

			vacancies.forEach((vacancy) => {
				this.setVacancy(vacancy);
			});

			this.setLoadingInitial(false);
		} catch (error) {
			console.log(error);
			this.setLoadingInitial(false);
		}
	};

	loadVacancy = async (id: string) => {
		let vacancy = this.getVacancy(id);
		if (vacancy) {
			this.selectedVacancy = vacancy;
			return vacancy;
		} else {
			try {
				vacancy = await agent.Vacancies.getVacancyById(id);
				this.setVacancy(vacancy);

				runInAction(() => {
					this.selectedVacancy = vacancy;
				});
				this.setLoadingInitial(false);
			} catch (error) {
				console.log(error);
				this.loadingInitial = false;
			}
		}
	};

	private getVacancy = (id: string) => {
		return this.vacancyRegistry.get(id);
	};

	private setVacancy = (vacancy: Vacancy) => {
		this.vacancyRegistry.set(vacancy.id!, vacancy);
	};

	setLoadingInitial = (state: boolean) => {
		this.loadingInitial = state;
	};

	setLoading = (state: boolean) => {
		this.loading = state;
	};
}
