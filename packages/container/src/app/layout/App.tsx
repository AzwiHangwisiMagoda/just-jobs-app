import React, { lazy, Suspense, useEffect, useState } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoadingComponent from './LoadingComponent';
import Navbar from './Navbar';
import { Container } from 'semantic-ui-react';
import { useCookies } from 'react-cookie';
import { ParseToken } from '../common/tokenParser';
import { Token } from '../models/token';

const VacancyLazy = lazy(() => import('../../features/VacancyApp'));
const AuthLazy = lazy(() => import('../../features/AuthApp'));

const history = createBrowserHistory();

function App() {
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [cookies] = useCookies(['token']);
	const [token, setToken] = useState<Token>();

	useEffect(() => {
		if (isSignedIn) {
			setToken(ParseToken(cookies.token));
			history.push('/vacancy');
		}
	}, [isSignedIn, cookies]);

	return (
		<Container fluid className='container'>
			<Router history={history}>
				<Suspense fallback={<LoadingComponent />}>
					<Switch>
						<Route path='/auth'>
							<AuthLazy onSignIn={() => setIsSignedIn(true)} />
						</Route>
						{!isSignedIn && <Redirect to='/auth' />}
						{isSignedIn && token && (
							<>
								<Navbar token={token} />
								<Route path='/vacancy'>
									{token.role === 'JobSeeker' && <VacancyLazy />}
								</Route>
							</>
						)}
					</Switch>
				</Suspense>
			</Router>
		</Container>
	);
}

export default App;
