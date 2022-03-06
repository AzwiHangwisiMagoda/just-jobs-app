import React, { lazy, Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';

const VacancyLazy = lazy(() => import('../../features/VacancyApp'));
const AuthLazy = lazy(() => import('../../features/AuthApp'));

const history = createBrowserHistory();

function App() {
	return (
		<Container fluid className='container'>
			<Router history={history}>
				<Suspense fallback={<LoadingComponent />}>
					<Navbar />
					<Switch>
						<Route path='/vacancy' component={VacancyLazy} />
						<Route path='/auth' component={AuthLazy} />
					</Switch>
				</Suspense>
			</Router>
		</Container>
	);
}

export default App;
