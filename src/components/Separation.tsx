import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SeparationProps {
	images: string;
}

const Separation = ({ images }: SeparationProps) => {
	const ref = useRef<HTMLDivElement>(null);

	// useScroll śledzi, gdzie ten konkretny kontener znajduje się pionowo w oknie (od dołu ekranu "start end" do samej góry "end start")
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	// Przeliczamy ten postęp (0-1) na ruch w pikselach lub procentach.
	// Kiedy przewijamy w dół, obraz zjedzie o 20% w górę i dół okna.
	const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

	return (
		<div
			ref={ref}
			style={{
				width: '100%',
				height: '450px',
				position: 'relative',
				overflow: 'hidden',
				borderTopLeftRadius: '75px',
				borderBottomRightRadius: '75px',
			}}>
			<motion.div
				style={{
					position: 'absolute',
					top: '-20%',
					left: 0,
					width: '100%',
					height: '140%',
					backgroundImage: `url(${images})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					y,
				}}></motion.div>
		</div>
	);
};

export default Separation;
