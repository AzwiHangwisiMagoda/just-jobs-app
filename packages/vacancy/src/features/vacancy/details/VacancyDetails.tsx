import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header, Item, Segment } from 'semantic-ui-react';
import { Vacancy } from '../../../app/models/vacancy';

interface Props {
	vacancy: Vacancy;
}

export default observer(function VacancyDetails({ vacancy }: Props) {
	return (
		<Item>
			<Header as='h4'>{`Annual Stipend: ${vacancy.annualSalary}`}</Header>

			<Item.Description>{vacancy.description}</Item.Description>
		</Item>
	);
});
