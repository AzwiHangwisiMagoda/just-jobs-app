import { createContext, useContext } from 'react';
import VacancyStore from './vacancyStore';

interface Store {
	vacancyStore: VacancyStore;
}

export const store: Store = {
	vacancyStore: new VacancyStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
	return useContext(StoreContext);
}
