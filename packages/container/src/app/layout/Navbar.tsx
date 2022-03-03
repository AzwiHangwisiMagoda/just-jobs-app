import React from 'react';
import { Container, Menu, Image, Dropdown, Search } from 'semantic-ui-react';

export default function Navbar() {
	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item exact header>
					<img src='/logo.png' alt='logo' style={{ marginRight: 10 }} />
					Just Jobs
				</Menu.Item>

				{/* <Menu.Item name='Vacancy' as={NavLink} to='/vacancies' /> */}

				<Menu.Item position='right'>
					<Menu.Item>
						<Search placeholder='Search...' style={{ marginRight: '2px' }} />
					</Menu.Item>

					<Menu.Item>
						<Image src={'/user.png'} avatar spaced='right' />
						<Dropdown pointing='top left'>
							<Dropdown.Menu>
								<Dropdown.Item text='My Profile' icon='user' />
								<Dropdown.Item text='My Listings' icon='list' />
								<Dropdown.Item text='Logout' icon='power' />
							</Dropdown.Menu>
						</Dropdown>
					</Menu.Item>
				</Menu.Item>
			</Container>
		</Menu>
	);
}
