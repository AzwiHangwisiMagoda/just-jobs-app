import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';
import { Vacancy } from '../../../app/models/vacancy';

interface Props {
	vacancy: Vacancy;
}

export default observer(function VacancyDetailHeader({ vacancy }: Props) {
	return (
		<Item>
			<Header inverted>{`${vacancy.title} - ${vacancy.location}`}</Header>
		</Item>
	);
});
