import type { FC } from 'react';
import { IMAGES } from '../constants';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero: FC = () => {
	return (
		<section className='hero-section' data-lenis-snap>
			<motion.div
				initial={{ opacity: 0, transform: 'scale(0.9)' }}
				animate={{ opacity: 1, transform: 'scale(1.1)' }}
				className='hero-background'
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0 ,0) 50%, rgba(0,0,0,0.6)), url(${IMAGES.subtract})`,
				}}>
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.3, delay: 0.5, ease: 'easeOut' }}
					className='hero-content'>
					<div className='hero-titles'>
						<h2 className='hero-type'>Cobra 41</h2>
						<h1 className='hero-name'>Wind Thief</h1>
					</div>
					<div className='hero-description-container'>
						<p className='hero-description'>
							Planujesz wypad z ekipą? Wynajmij łódź w 3 minuty i wypłyń w
							trasę, którą sam zaplanujesz. Sprawdzone jednostki, przejrzyste
							ceny i zero ukrytych kosztów.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
