import { observer } from 'mobx-react-lite';
import { Button, Container, Header } from 'semantic-ui-react';
import { useStore } from '../app/stores/store';
import LoginForm from './login/LoginForm';

export default observer(function AuthDashboard() {
	const {
		modalStore: { openModal },
	} = useStore();

	return (
		<Container style={{ paddingTop: '10%' }}>
			<Header
				size='huge'
				content='Welcome to JustJobs'
				style={{
					color: 'rgb(29, 61, 73)',
					fontSize: '4em',
					marginBottom: '30px',
				}}
			/>
			<p style={{ color: '#f2f2f2', fontSize: '1.2em', marginBottom: '70px' }}>
				If you are new here, go ahead and register. Otherwise just click the
				login button!
			</p>

			<Button
				content='Login'
				size='huge'
				onClick={() => openModal(<LoginForm />)}
				style={{
					backgroundColor: '#003347',
					color: '#f2f2f2',
				}}
			/>

			<Button
				content='Register'
				size='huge'
				onClick={() => openModal(<LoginForm />)}
				style={{
					color: '#003347',
				}}
			/>
		</Container>
	);
});
