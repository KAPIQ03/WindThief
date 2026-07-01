import type { FC } from 'react';
import { IMAGES } from '../constants';
import './Specifications.css';
import { motion } from 'framer-motion';

const specData = [
	{
		title: 'Dane Techniczne',
		content:
			'Ilość osób:  10\nIlość kabin: 4\nIlość koi: 8 + mesa\nIlość łazienek: 1\nDługość: 12,3 m\nSzerokość: 3,95 m\nZanurzenie:  2,4 m\nSilnik: 40 HP Volvo Penta\nŻagle: grot, genua\nZbiornik wody: 190 L\nZbiornik paliwa: 90 L\nRok produkcji: 2016',
		theme: 'dark',
	},
	{
		title: 'Nawigacja',
		content:
			'Chartploter Raymarine \nAIS dwukierunkowy\nWiatromierz\nLog\nRadio VHF Raymarine \nAutopilot\nLornetka\n',
		theme: 'light',
	},
	{
		title: 'Pokład',
		content:
			'Szprycbuda\n2 Koła sterowe\nStół w kokpicie\nSiedziska kokpitu wyłożone drzewem tekowym\n2 Kabestany biegowe\nSter strumieniowy',
		theme: 'dark',
	},
	{
		title: 'Bezpieczeństwo',
		content:
			'Kamizelki ratunkowe pneumatyczne 6 szt\nKamizelki ratunkowe SOLAS 4 szt\nLife liny\nKoło ratunkowe z pławą świetlną\nPneumatyczna tratwa ratunkowa\nRadiopława naprowadzająca EPIRB\nZestaw pirotechniki do wzywania pomocy\nReflektor radarowy\nTyczka MOB pneumatyczna',
		theme: 'light',
	},
	{
		title: 'Wnętrze',
		content:
			'Stolik nawigacyjny\nWentylacja w mesie\nKuchenka gazowa 2 palnikowa, piekarnik gazowy\nLodówka otwierana od góry w kambuzie\nToaleta z prysznicem\nZlew, prysznic i umywalka z ciepłą wodą\nRęczna i automatyczna pompa zęzowa',
		theme: 'dark',
	},
	{
		title: 'Żagle',
		content: 'Grot z 2 refami\nGenua rolowana na sztagu\nObciągacz bomu',
		theme: 'light',
	},
];

const Specifications: FC = () => {
	return (
		<section className='specs-section'>
			<div className='specs-grid'>
				<div className='specs-list'>
					{specData.map((spec, index) => (
						<motion.div
							key={index}
							className={`spec-item spec-${spec.theme}`}
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: '0px 0px -150px 0px' }}
							transition={{
								duration: 0.2,
								delay: 0.15,
								ease: 'easeOut',
							}}>
							<h3 className='spec-title'>{spec.title}</h3>
							<p className='spec-content'>{spec.content}</p>
						</motion.div>
					))}
				</div>
				<div className='specs-image-container'>
					<img
						src={IMAGES.bloc2}
						alt='Yacht Plan'
						className='specs-image'
						loading='lazy'
					/>
				</div>
			</div>
		</section>
	);
};

export default Specifications;
