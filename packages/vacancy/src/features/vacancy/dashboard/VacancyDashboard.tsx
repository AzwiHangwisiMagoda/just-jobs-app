import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Divider, Grid } from 'semantic-ui-react';
import VacancyHeader from '../header/VacancyHeader';
import VacancyFilter from '../filter/VacancyFilter';
import VacancyList from '../list/VacancyList';
import { useStore } from '../../../app/stores/store';

export default observer(function VacancyDasboard() {
	const {
		vacancyStore: { vacancyRegistry, loadVacancies },
	} = useStore();

	useEffect(() => {
		if (vacancyRegistry.size <= 1) loadVacancies();
	}, [loadVacancies, vacancyRegistry.size]);

	return (
		<Container style={{ marginTop: '7em' }}>
			<Grid>
				<VacancyHeader />

				<Divider />

				<Grid.Row>
					<VacancyFilter />
					<VacancyList />
				</Grid.Row>
			</Grid>
		</Container>
	);
});
