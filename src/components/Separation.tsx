import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SeparationProps {
	images: string;
}

const Separation = ({ images }: SeparationProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});

	const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

	return (
		<div
			ref={ref}
			style={{
				width: '100%',
				height: 'clamp(150px, 300px, 450px)',
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
