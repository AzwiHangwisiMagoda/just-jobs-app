import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import VacancyDetailRecruiterInfo from './VacancyDetailRecruiterInfo';
import VacancyDetailHeader from './VacancyDetailHeader';
import VacancyDetails from './VacancyDetails';
import VacancyDetailBenefits from './VacancyDetailBenefits';
import VacancyDetailRequirements from './VacancyDetailRequirements';

export default observer(function VacancyDetail() {
	const {
		vacancyStore: { selectedVacancy: vacancy, loadVacancy },
	} = useStore();
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		if (id) loadVacancy(id);
	}, [id, loadVacancy]);

	return (
		<>
			<Button content='Back' />
			<Grid>
				{vacancy && (
					<>
						<Grid.Column width={5}>
							<VacancyDetailRecruiterInfo />
						</Grid.Column>
						<Grid.Column width={11}>
							<Segment
								style={{ border: 'none', backgroundColor: '#092834' }}
								attached='top'
								secondary
								inverted
								basic
								padded
							>
								<VacancyDetailHeader vacancy={vacancy!} />
							</Segment>
							<Segment
								attached
								padded
								style={{ backgroundColor: '#f2f2f2', color: '#347B98' }}
							>
								<VacancyDetails vacancy={vacancy!} />
							</Segment>
							<Segment
								attached
								padded
								style={{ backgroundColor: '#f2f2f2', color: '#347B98' }}
							>
								<VacancyDetailBenefits />
							</Segment>
							<Segment
								attached
								padded
								style={{ backgroundColor: '#f2f2f2', color: '#347B98' }}
							>
								<VacancyDetailRequirements vacancy={vacancy!} />
							</Segment>
							<Button
								size='big'
								content='Apply'
								style={{ backgroundColor: '#347B98', color: '#E4F1F6' }}
							/>
							<Button size='big' content='Cancel Application' color='red' />
						</Grid.Column>
					</>
				)}
			</Grid>
		</>
	);
});
