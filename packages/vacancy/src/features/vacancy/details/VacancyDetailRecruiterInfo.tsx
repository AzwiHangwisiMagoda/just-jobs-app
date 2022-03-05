import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header, Segment, Image, Item, Divider, Icon } from 'semantic-ui-react';

export default observer(function VacancyDetailRecruiterInfo() {
	return (
		<>
			<Segment
				style={{ border: 'none', backgroundColor: '#092834' }}
				attached='top'
				secondary
				inverted
			>
				Recruiter Info
			</Segment>
			<Segment
				attached
				style={{ backgroundColor: '#f2f2f2', color: '#347B98' }}
			>
				<Item>
					<Item.Content style={{ paddingBottom: '5px' }}>
						<Image size='medium' src='/user.png' centered circular />
					</Item.Content>
					<Divider></Divider>
					<Item.Content>
						<Item.Header>
							<Header style={{ color: '#1A3E4C' }} textAlign='center'>
								Recruiter Name
							</Header>
						</Item.Header>
						<Item.Extra>Bio</Item.Extra>
					</Item.Content>
				</Item>
			</Segment>
			<Segment
				attached
				style={{ backgroundColor: '#f2f2f2', color: '#347B98' }}
			>
				<Item>
					<Item.Header>
						<Header style={{ color: '#1A3E4C' }} textAlign='center'>
							Company Name
						</Header>
					</Item.Header>

					<Item.Meta>
						<Item.Content>
							<Icon name='world' />
							website.com
						</Item.Content>
						<Item.Content>
							<Icon name='point' />
							physical address
						</Item.Content>
					</Item.Meta>
				</Item>
			</Segment>
		</>
	);
});
