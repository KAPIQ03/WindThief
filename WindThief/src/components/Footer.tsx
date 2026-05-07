import type { FC } from 'react';
import { ICONS } from '../constants';
import './Footer.css';

const Footer: FC = () => {
	return (
		<footer className='footer' id='contact'>
			<div className='footer-content'>
				<div className='footer-columns'>
					<div className='footer-column contact-column'>
						<h3 className='footer-heading'>Dane kontaktowe</h3>
						<ul className='footer-contact-list'>
							<li>
								Telefon: [+48 XXX XXX XXX] (Zadzwoń do nas – chętnie opowiemy na
								wszystkie pytania)
							</li>
							<li>E-mail: [biuro@twoja-domena.pl]</li>
							<li>Port macierzysty: [Nazwa Mariny, np. Marina Gdynia]</li>
							<li>
								Social Media: Znajdź nas na [Facebook] i [Instagram] – zobacz
								Wind Thiefa w akcji!
							</li>
						</ul>
						<div className='social-media'>
							<h4 className='social-heading'>Gdzie nas znaleźć?</h4>
							<div className='social-icons'>
								<a href='#' className='social-btn'>
									<img src={ICONS.facebook} alt='Facebook' />
								</a>
								<a href='#' className='social-btn'>
									<img src={ICONS.instagram} alt='Instagram' />
								</a>
							</div>
						</div>
					</div>

					<div className='footer-column menu-column'>
						<h4 className='footer-heading'>Menu</h4>
						<ul className='footer-menu'>
							<li>
								<a href='#about'>O jachcie</a>
							</li>
							<li>
								<a href='#booking'>Rezerwuj</a>
							</li>
							<li>
								<a href='#pricing'>Cennik</a>
							</li>
							<li>
								<a href='#gallery'>Galeria</a>
							</li>
						</ul>
						<h4 className='footer-heading info-heading'>Informacje</h4>
						<ul className='footer-menu'>
							<li>
								<a href='#'>Polityka Prywatności</a>
							</li>
							<li>
								<a href='#'>Polityka Cookie</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='footer-bottom'>
					<p className='copyright'>© 2026 Designed by Kacper Szamszon</p>
				</div>

				<div className='footer-big-text'>
					<span className='big-text-line small'>WIND</span>
					<span className='big-text-line small'>THIEF</span>
					<span className='big-text-line large'>WIND THIEF</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
