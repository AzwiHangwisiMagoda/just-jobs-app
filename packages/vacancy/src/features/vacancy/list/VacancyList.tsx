import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Item, Label } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function VacancyList() {
	const {
		vacancyStore: { vacancyArray, requirementArray },
	} = useStore();

	return (
		<Grid.Column width={11}>
			<Item.Group divided>
				{vacancyArray.map((vacancy, i) => (
					<Item key={i} style={{ paddingBottom: '15px' }}>
						<Item.Content>
							<Item.Header
								// as={Link}
								// to={`/vacancy/${vacancy.id}`}
								style={{ color: '#1D3D49' }}
							>
								{vacancy.title}
							</Item.Header>
							<Item.Meta>
								<span style={{ color: '#397A93' }} className='Location'>
									{vacancy.location}
								</span>
							</Item.Meta>
							<Item.Description>{vacancy.description}</Item.Description>
							<Item.Extra>
								{requirementArray(vacancy).map((req, i) => (
									<Label key={i} style={{ backgroundColor: '#6CACC6' }}>
										{req}
									</Label>
								))}
							</Item.Extra>
						</Item.Content>
					</Item>
				))}
			</Item.Group>
		</Grid.Column>
	);
});
