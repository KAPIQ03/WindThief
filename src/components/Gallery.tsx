import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { SLIDER_IMAGES } from '../constants';
import './Gallery.css';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: FC = () => {
	const [imageIndex, setImageIndex] = useState(0);
	const [minus, setMinus] = useState(1);
	const images = SLIDER_IMAGES;

	const NextImage = () => {
		setMinus(1);
		setImageIndex(prevIndex => (prevIndex + 1) % images.length);
	};

	const PreviousImage = () => {
		setMinus(-1);
		setImageIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight') {
				NextImage();
			} else if (e.key === 'ArrowLeft') {
				PreviousImage();
			}
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<section id='gallery' className='gallery-section'>
			<div className='gallery-header'>
				<h2 className='gallery-title'>Galeria</h2>
				<p className='gallery-subtitle'>
					Słowa nie oddają tego, co czujesz na pokładzie. Przekonaj się sam —
					zajrzyj do naszej galerii i poczuj ducha Wind Thiefa.
				</p>
			</div>
			<div className='gallery-slider'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={imageIndex}
						initial={{ opacity: 0 }}
						animate={{opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeOut' }}
						className='gallery-image-container'
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							backgroundImage: `url(${images[imageIndex]})`,
						}}></motion.div>
				</AnimatePresence>

				<div className='slider-controls' style={{ zIndex: 10 }}>
					<button
						className='slider-arrow slider-arrow-left'
						onClick={PreviousImage}>
						<ArrowLeft />
					</button>
					<button
						className='slider-arrow slider-arrow-right'
						onClick={NextImage}>
						<ArrowRight />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Gallery;
