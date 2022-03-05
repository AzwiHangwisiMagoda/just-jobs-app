import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header, Item, List, Segment } from 'semantic-ui-react';
import { Vacancy } from '../../../app/models/vacancy';
import { useStore } from '../../../app/stores/store';

interface Props {
	vacancy: Vacancy;
}

export default observer(function VacancyDetailRequirements({ vacancy }: Props) {
	const {
		vacancyStore: { requirementArray },
	} = useStore();

	return (
		<Item>
			<Header as='h4'>Requirements</Header>
			<List>
				{requirementArray(vacancy).map((requirement, i) => (
					<List.Item key={i}>{requirement}</List.Item>
				))}
			</List>
		</Item>
	);
});
