import type { FC } from 'react';
import './About.css';

const About: FC = () => {
	return (
		<section id='about' className='about-section'>
			<div className='about-container'>
				<h2 className='about-title'>Pare słów o naszym jachcie</h2>
				<p className='about-description'>
					Wind Thief to nie tylko jacht — to sposób na życie. Cobra 41 łączy
					sportowy charakter z wszechstronnością, która sprawdza się zarówno na
					regatach, długich rejsach, jak i podczas szkoleń żeglarskich.
					Niezależnie od tego, czy dopiero zaczynasz swoją przygodę z morzem,
					czy szukasz prawdziwego wyzwania — Wind Thief jest gotowy zabrać Cię
					tam, gdzie wiatr poprowadzi.
				</p>
			</div>
		</section>
	);
};

export default About;
