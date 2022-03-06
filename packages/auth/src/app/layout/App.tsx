import { observer } from 'mobx-react-lite';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AuthDashboard from '../../features/AuthDashboard';
import ModalContainer from '../common/modals/ModalContainer';

function App({ history }: any) {
	return (
		<Container
			style={{
				// marginTop: '100px',
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
						<AuthDashboard />
					</Route>
				</Switch>
			</Router>
		</Container>
	);
}

export default observer(App);
