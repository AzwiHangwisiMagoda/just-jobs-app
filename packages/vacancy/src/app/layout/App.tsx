import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import VacancyDasboard from '../../features/vacancy/dashboard/VacancyDashboard';

interface Props {
	history: any;
}

export default function App({ history }: Props) {
	return (
		<Router history={history}>
			<Switch>
				<Route path='/'>
					<VacancyDasboard />
				</Route>
			</Switch>
		</Router>
	);
}
