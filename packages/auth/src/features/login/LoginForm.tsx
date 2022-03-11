import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import { ErrorMessage, Form, Formik } from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Button, Header, Label } from 'semantic-ui-react';

export default observer(function LoginForm({ onSignIn }: any) {
	const {
		authStore: { login },
	} = useStore();

	return (
		<Formik
			initialValues={{ email: '', password: '', error: null }}
			onSubmit={(values, { setErrors }) =>
				login(values).catch((error) =>
					setErrors({ error: 'Invalid login details' })
				)
			}
		>
			{({ handleSubmit, isSubmitting, errors }) => (
				<Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
					<Header
						as='h1'
						content='Login'
						style={{ textAlign: 'center', color: 'rgb(29, 61, 73)' }}
					/>
					<MyTextInput name='email' placeholder='john@test.com' icon='mail' />
					<MyTextInput
						name='password'
						placeholder='password'
						type='password'
						icon='key'
					/>
					<ErrorMessage
						name='error'
						render={() => (
							<Label
								style={{ marginBottom: 10 }}
								basic
								color='red'
								content={errors.error}
							/>
						)}
					/>
					<Button
						loading={isSubmitting}
						positive
						content='Login'
						type='submit'
						fluid
						onClick={onSignIn}
					/>
				</Form>
			)}
		</Formik>
	);
});
