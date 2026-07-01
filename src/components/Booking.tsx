import type { FC } from 'react';
import { IMAGES } from '../constants';
import Button from './Button';
import './Booking.css';
import { motion } from 'framer-motion';
import { lenis } from '../App';

const Booking: FC = () => {
	return (
		<section className='booking-section' data-lenis-snap>
			<motion.div
				initial={{ opacity: 0, x: -100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '0px 0px -150px 0px' }}
				transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
				className='booking-image booking-image-left'
				style={{ backgroundImage: `url(${IMAGES.bloc})` }}></motion.div>
			<div className='booking-content'>
				<h2 className='booking-title'>Już teraz zarezerwuj swój rejs!</h2>
				<p className='booking-text'>
					Poczuj, jak Wind Thief kradnie wiatr dla Ciebie. Jeśli szukasz
					jednostki, która nie tylko oferuje wygodę, ale także potrafi pokazać
					pazur w trakcie podróży, nasza Cobra 41 jest wyborem
					bezkonkurencyjnym. To jacht dla tych, którzy kochają prędkość i nie
					boją się przygód. Nie czekaj, aż terminy odpłyną – zarezerwuj Wind
					Thief'a już dziś i przejmij stery nad swoimi wymarzonymi wakacjami pod
					żaglami!
				</p>
				<Button
					label='Cennik'
					type='secondary'
					onClick={() => {
						lenis.scrollTo('#pricing');
					}}
				/>
			</div>
			<motion.div
				initial={{ opacity: 0, x: 100 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true, margin: '0px 0px -150px 0px' }}
				transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
				className='booking-image booking-image-right'
				style={{ backgroundImage: `url(${IMAGES.bloc1})` }}></motion.div>
		</section>
	);
};

export default Booking;
