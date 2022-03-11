import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';
import { ErrorMessage, Form, Formik } from 'formik';
import MyTextInput from '../../app/common/form/MyTextInput';
import { Button, Checkbox, Header, Label } from 'semantic-ui-react';

export default observer(function RegisterForm({ onSignIn }: any) {
	const {
		authStore: { register },
	} = useStore();

	const [value, setValue] = React.useState<any>('JobSeeker');

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
				userName: '',
				role: value,
				phoneNumber: '',
				error: null,
			}}
			onSubmit={(values, { setErrors }) =>
				register(values).catch((error) =>
					setErrors({ error: 'Invalid login details' })
				)
			}
		>
			{({ handleSubmit, isSubmitting, errors }) => (
				<Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
					<Header
						as='h1'
						content='Register'
						style={{ textAlign: 'center', color: 'rgb(29, 61, 73)' }}
					/>
					<MyTextInput name='email' placeholder='john@test.com' icon='mail' />
					<MyTextInput name='userName' placeholder='john' />
					<MyTextInput
						name='phoneNumber'
						placeholder='0812345678'
						icon='phone'
					/>

					<Checkbox
						radio
						label='Job Seeker'
						name='role'
						value='JobSeeker'
						checked={value === 'JobSeeker'}
						onChange={(e, data) => setValue(data.value)}
					/>

					<Checkbox
						radio
						label='Recruiter'
						name='role'
						value='Recruiter'
						checked={value === 'Recruiter'}
						onChange={(e, data) => setValue(data.value)}
					/>

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
						content='Register'
						type='submit'
						fluid
						onClick={onSignIn}
					/>
				</Form>
			)}
		</Formik>
	);
});
