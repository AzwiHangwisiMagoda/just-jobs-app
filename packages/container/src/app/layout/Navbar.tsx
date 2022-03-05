import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Image, Dropdown, Search } from 'semantic-ui-react';

export default function Navbar() {
	return (
		<Menu inverted fixed='top'>
			<Container>
				<Menu.Item header as={Link} to='/'>
					<img src='public/logo.png' alt='logo' style={{ marginRight: 10 }} />
					Just Jobs
				</Menu.Item>

				<Menu.Item name='Vacancy' as={Link} to='/vacancy' />

				<Menu.Item position='right'>
					<Menu.Item>
						<Search placeholder='Search...' />
					</Menu.Item>

					<Menu.Item>
						<Image src={'public/user.png'} avatar spaced='right' />
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
