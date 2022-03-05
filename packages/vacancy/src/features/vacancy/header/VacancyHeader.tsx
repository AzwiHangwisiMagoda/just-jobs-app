import { observer } from 'mobx-react-lite';
import React from 'react';
import { Dropdown, Grid, Search } from 'semantic-ui-react';

export default observer(function VacancyHeader() {
	return (
		<Grid.Row style={{ marginBottom: '20px' }}>
			<Grid.Column width={5}></Grid.Column>

			<Grid.Column width={7}>
				<Search placeholder='Search for vacancies' input={{ fluid: true }} />
			</Grid.Column>

			<Grid.Column width={1}></Grid.Column>

			<Grid.Column width={3}>
				<Dropdown
					text='Sort By'
					icon='filter'
					floating
					labeled
					button
					className='icon'
					inline
				>
					<Dropdown.Menu>
						<Dropdown.Item>Date Posted</Dropdown.Item>
						<Dropdown.Item>Location</Dropdown.Item>
						<Dropdown.Item>Salary</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Grid.Column>
		</Grid.Row>
	);
});
