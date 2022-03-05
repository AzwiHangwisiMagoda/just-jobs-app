import { observer } from 'mobx-react-lite';
import React from 'react';
import { Checkbox, Grid, Header, Menu } from 'semantic-ui-react';

export default observer(function VacancyFilter() {
	return (
		<Grid.Column width={5}>
			<Menu.Item>
				<Menu vertical size='large' style={{ width: '90%' }}>
					<Header attached color='teal' content='Filter by Category' />
					<Menu.Item style={{ padding: '10px' }}>
						<Checkbox label='IT' />
					</Menu.Item>
					<Menu.Item style={{ padding: '10px' }}>
						<Checkbox label='Clerical' />
					</Menu.Item>
					<Menu.Item style={{ padding: '10px' }}>
						<Checkbox label='Manager' />
					</Menu.Item>
				</Menu>
			</Menu.Item>

			<Menu.Item>
				<Menu vertical size='large' style={{ width: '90%' }}>
					<Header attached color='teal' content='Filter by Location' />
					<Menu.Item style={{ padding: '10px' }}>
						<Checkbox label='Braynston' />
					</Menu.Item>
					<Menu.Item style={{ padding: '10px' }}>
						<Checkbox label='Sandton' />
					</Menu.Item>
					<Menu.Item style={{ padding: '10px' }}>
						<Checkbox label='IT' />
					</Menu.Item>
				</Menu>
			</Menu.Item>
		</Grid.Column>
	);
});
