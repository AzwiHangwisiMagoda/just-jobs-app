import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AuthDashboard from '../../features/AuthDashboard';
import ModalContainer from '../common/modals/ModalContainer';
import { useStore } from '../stores/store';
import { useCookies } from 'react-cookie';

function App({ history, onSignIn }: any) {
	const {
		authStore: { user },
	} = useStore();

	const [cookies, setCookie] = useCookies(['token']);

	useEffect(() => {
		if (user) {
			setCookie('token', user.token, { path: '/' });
		}
	}, [user, setCookie, cookies]);

	return (
		<Container
			style={{
				textAlign: 'center',
				minHeight: '100vh',
				display: 'flex',
				flexFlow: 'column nowrap',
			}}
			fluid
			className='auth_app_style'
		>
			<ModalContainer />

			<Router history={history}>
				<Switch>
					<Route path='/'>
						<AuthDashboard onSignIn={onSignIn} />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default observer(App);
