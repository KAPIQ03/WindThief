import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { SLIDER_IMAGES } from '../constants';
import './Gallery.css';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery: FC = () => {
	const [imageIndex, setImageIndex] = useState(0);
	const images = SLIDER_IMAGES;

	const NextImage = () => {
		setImageIndex(prevIndex => (prevIndex + 1) % images.length);
	};

	const PreviousImage = () => {
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
		<section id='gallery' className='gallery-section' data-lenis-snap>
			<div className='gallery-header'>
				<h2 className='gallery-title'>Galeria</h2>
				<p className='gallery-subtitle'>
					Słowa nie oddają tego, co czujesz na pokładzie. Przekonaj się sam —
					zajrzyj do naszej galerii i sprawdź co Wind Thief ma do zaoferowania.
				</p>
			</div>
			<div className='gallery-slider'>
				<AnimatePresence mode='wait'>
					<motion.img
						key={imageIndex}
						src={images[imageIndex]}
						alt={`Jacht Cobra 41 Wind Thief - wnętrze i wyposażenie - zdjęcie ${imageIndex + 1}`}
						loading='lazy'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2, ease: 'easeOut' }}
						className='gallery-image-container'
						style={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
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
