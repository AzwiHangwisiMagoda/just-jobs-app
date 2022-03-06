import React, { lazy, Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';

const VacancyLazy = lazy(() => import('../../features/VacancyApp'));
const history = createBrowserHistory();

function App() {
	return (
		<Container className='container'>
			<Router history={history}>
				<Suspense fallback={<LoadingComponent />}>
					<Navbar />
					<Switch>
						<Route path='/vacancy' component={VacancyLazy} />
					</Switch>
				</Suspense>
			</Router>
		</Container>
	);
}

export default App;
