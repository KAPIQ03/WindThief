import type { FC } from 'react';
import { IMAGES } from '../constants';
import Button from './Button';
import './PriceList.css';
import { lenis } from '../App';
import { motion } from 'framer-motion';

interface PriceItem {
	period: string;
	price: string;
	desc: string;
	img: string;
}

const prices = [
	{
		period: 'czerwiec i wrzesień',
		price: '7000 zł',
		desc: 'Idealny balans między słońcem a silniejszym wiatrem.',
		img: IMAGES.card,
	},
	{
		period: 'lipiec i sierpień',
		price: '8000 zł',
		desc: 'Pełnia lata, idealny czas na urlop lub wakacyjne regaty.',
		img: IMAGES.card1,
	},
	{
		period: 'kwiecień, maj i październik',
		price: '6500 zł',
		desc: 'Spokój, brak tłumów i świetne warunki do treningów regatowych.',
		img: IMAGES.card2,
	},
];

const PriceCard = ({ item }: { item: PriceItem }) => {
	return (
		<div
			className='price-card'
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,0) 50%, rgba(0, 0, 0, 0.7)), url(${item.img})`,
			}}>
			<div className='price-card-period'>{item.period}</div>
			<div className='price-card-amount'>{item.price}</div>
			<div className='price-card-footer'>
				<p className='price-card-desc'>{item.desc}</p>
			</div>
		</div>
	);
};

const PriceList: FC = () => {
	return (
		<section id='pricing' className='pricing-section' data-lenis-snap>
			<div className='pricing-header'>
				<h2 className='pricing-title'>Cennik 2026</h2>
				<div className='pricing-intro'>
					<p>
						Niezależnie od tego, czy planujesz weekendowy wypad, tygodniowy rejs
						czarterowy, udział w regatach czy kurs żeglarski - stworzymy ofertę
						specjalnie dla Ciebie.
					</p>
					<p>
						<strong>
							Poniższe ceny podlegają negocjacji, przedstawiają początkową
							wycenę za tygodniowy rejs - Przewidujemy zniżki dla stałych
							klientów, oraz last minute.
						</strong>
					</p>
				</div>
			</div>

			<motion.div
				className='price-cards'
				initial={{ opacity: 0, y: 75 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: '0px 0px -150px 0px' }}
				transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}>
				{prices.map((item, index) => (
					<PriceCard key={index} item={item} />
				))}
			</motion.div>

			<div className='contact-incentive'>
				<p>
					Gotowy na rejs? Skontaktuj się z nami telefonicznie - chętnie
					odpowiemy na wszystkie pytania i pomożemy dobrać odpowiednią ofertę.
					Szczegóły znajdziesz w sekcji Kontakt.
				</p>
				<div>
					<Button
						label='Kontakt'
						type='secondary'
						onClick={() => {
							lenis.scrollTo('#contact');
						}}
					/>
				</div>
			</div>

			<div className='additional-charges'>
				<div className='charge-item'>
					<h3 className='charge-title'>Transit Log</h3>
					<p className='charge-text'>
						Każdy czarter obejmuje obowiązkową opłatę serwisową w wysokości
						<strong>450 PLN</strong>, która zawiera:
					</p>
					<ul className='charge-list'>
						<li>Przygotowanie jachtu do rejsu.</li>
						<li>Napełnienie butli gazowej.</li>
						<li>Pełny zbiornik wody.</li>
						<li>Sprzątanie końcowe (przy zwrocie jachtu w stanie klaru).</li>
					</ul>
				</div>
				<div className='charge-item'>
					<h3 className='charge-title'>Kaucja</h3>
					<p className='charge-text'>
						Kaucja zwrotna płatna przy przejęciu jachtu wynosi{' '}
						<strong>7 000 PLN</strong> (gotówka).
					</p>
				</div>
			</div>
		</section>
	);
};

export default PriceList;
