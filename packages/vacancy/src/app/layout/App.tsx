import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import VacancyDasboard from '../../features/vacancy/dashboard/VacancyDashboard';
import VacancyDetail from '../../features/vacancy/details/VacancyDetail';

function App({ history }: any) {
	return (
		<Container style={{ marginTop: '100px' }}>
			<Router history={history}>
				<Switch>
					<Route exact path='/vacancy'>
						<VacancyDasboard />
					</Route>
					<Route path='/vacancy/:id'>
						<VacancyDetail />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default observer(App);
