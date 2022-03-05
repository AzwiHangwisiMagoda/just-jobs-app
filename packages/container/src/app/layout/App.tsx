import React, { lazy, Suspense } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

const VacancyLazy = lazy(() => import('../../features/VacancyApp'));
const NavbarLazy = lazy(() => import('./Navbar'));
const history = createBrowserHistory();

function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Router history={history}>
				<Suspense fallback={<div>Losding...</div>}>
					<NavbarLazy />
					<Switch>
						<Route path='/vacancy' component={VacancyLazy} />
					</Switch>
				</Suspense>
			</Router>
		</>
	);
}

export default App;
