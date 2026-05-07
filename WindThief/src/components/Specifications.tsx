import type { FC } from 'react';
import { IMAGES } from '../constants';
import './Specifications.css';
import { motion } from 'framer-motion';

const specData = [
	{
		title: 'Dane Techniczne',
		content:
			'Ilość osób:  8\nIlość kabin: 3\nIlość koi: 8\nIlość łazienek: 2\nDługość: 12 m\nSzerokość: 3,96 m\nZanurzenie:  1,8 m\nSilnik: 55 HP Volvo Penta\nŻagle: grot, genua\nZbiornik wody: 360 l\nZbiornik paliwa: 210 l\nRok produkcji: 2006',
		theme: 'dark',
	},
	{
		title: 'Nawigacja',
		content:
			'Chartploter Raymarine Axiom 9\nRadar Raymarine Quantum 2\nChartploter Raymarine A75\nAIS dwukierunkowy\nAntena GSM \nWiatromierz\nLog z echosondą\nRadio VHF Raymarine RAY 53 z DSC \nAutopilot\nLornetka\nNavtex',
		theme: 'light',
	},
	{
		title: 'Pokład',
		content:
			'Ploter Raymarine Axiom 9\nSzprycbuda\nKoło sterowe z konsolą\nStół w kokpicie\nSiedziska kokpitu wyłożone drzewem tekowym\nKabestany 2 biegowe\nSter strumieniowy',
		theme: 'dark',
	},
	{
		title: 'Bezpieczeństwo',
		content:
			'Kamizelki ratunkowe pneumatyczne 8 szt\nKamizelki ratunkowe pneumatyczne dziecięce 2 szt\nLife liny\nKoło ratunkowe z pławą świetlną\nPneumatyczna tratwa ratunkowa\nRadiopława naprowadzająca EPIRB\nZestaw pirotechniki do wzywania pomocy\nReflektor radarowy\nTyczka MOB pneumatyczna',
		theme: 'light',
	},
	{
		title: 'Wnętrze',
		content:
			'Ogrzewanie nadmuchowe - WEBASTO\nStolik nawigacyjny\nWentylacja na lukach w salonie\nKuchenka gazowa 2 palnikowa, piekarnik gazowy\nlodówka otwierana od góry  w kambuzie\ntoaleta z prysznicem\nZlew, prysznic i umywalka z ciepłą wodą\nRęczna i automatyczna pompa zęzowa',
		theme: 'dark',
	},
	{
		title: 'Żagle',
		content:
			'Grot  rolowany w maszcie\nGenua rolowana na sztagu\nGazowy obciągacz bomu',
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
							viewport={{ once: true, margin: '-250px' }}
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
					<img src={IMAGES.bloc2} alt='Yacht Plan' className='specs-image' />
				</div>
			</div>
		</section>
	);
};

export default Specifications;
