import React, { lazy } from 'react';
import Navbar from './Navbar';
import VacancyApp from '../../features/VacancyApp';

// const VacancyLazy = lazy(() => import('../../features/VacancyApp'));

function App() {
	return (
		<>
			<Navbar />
			<VacancyApp />
		</>
	);
}

export default App;
