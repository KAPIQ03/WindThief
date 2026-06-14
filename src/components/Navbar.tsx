import { useEffect, useState, type FC } from 'react';
import Button from './Button';
import './Navbar.css';
import { lenis } from '../App';

const Navbar: FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(prev => !prev);
	};

	const closeMobileMenu = () => {
		document.body.style.overflow = '';
		setMobileMenuOpen(false);
	};

	useEffect(() => {
		if (mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [mobileMenuOpen]);

	return (
		<nav className={`navbar ${mobileMenuOpen ? 'menu-open' : ''}`}>
			<button
				className='hamburger-btn'
				onClick={toggleMobileMenu}
				aria-expanded={mobileMenuOpen}
				aria-label={mobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}>
				<span className='bar'></span>
				<span className='bar'></span>
				<span className='bar'></span>
			</button>

			<div className={`navbar-container ${mobileMenuOpen ? 'open' : ''}`}>
				<div className='mobile-menu-header'>
					<div className="mobile-menu-h2">Cobra 41</div>
					<div className="mobile-menu-h1">Wind Thief</div>
				</div>

				<ul className='nav-menu'>
					<li>
						<a href='#about' className='nav-link' onClick={closeMobileMenu}>
							O jachcie
						</a>
					</li>
					<li>
						<a href='#gallery' className='nav-link' onClick={closeMobileMenu}>
							Galeria
						</a>
					</li>
					<li>
						<a href='#pricing' className='nav-link' onClick={closeMobileMenu}>
							Cennik
						</a>
					</li>
					<li>
						<a href='#faq' className='nav-link' onClick={closeMobileMenu}>
							FAQ
						</a>
					</li>
				</ul>
				<Button
					label='Kontakt'
					type='primary'
					onClick={() => {
						closeMobileMenu();
						lenis.scrollTo('#contact');
					}}
				/>
			</div>
		</nav>
	);
};

export default Navbar;
