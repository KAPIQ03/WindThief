import type { FC } from 'react';
import Button from './Button';
import './Navbar.css';
import { lenis } from '../App';

const Navbar: FC = () => {
	return (
		<nav className='navbar' >
			<div className='navbar-container'>
				<ul className='nav-menu'>
					<li>
						<a href='#about' className='nav-link'>
							O jachcie
						</a>
					</li>
					<li>
						<a href='#gallery' className='nav-link'>
							Galeria
						</a>
					</li>
					<li>
						<a href='#pricing' className='nav-link'>
							Cennik
						</a>
					</li>
					<li>
						<a href='#faq' className='nav-link'>
							FAQ
						</a>
					</li>
				</ul>
				<Button
					label='Kontakt'
					type='primary'
					onClick={() => {
						lenis.scrollTo('#contact');
					}}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
