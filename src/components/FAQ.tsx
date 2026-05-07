import { useState, type FC } from 'react';
import './FAQ.css';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
	{
		question: 'Czy Wind Thief jest trudny w prowadzeniu?',
		answer:
			'Nasza Cobra 41 to jacht, który mimo swoich osiągów jest przewidywalny i wdzięczny w prowadzeniu. Oczywiście wymaga doświadczenia, ale sterowanie nim to czysta przyjemność.',
	},
	{
		question: 'Co oznacza "zacięcie regatowe" w praktyce?',
		answer:
			'Oznacza to, że jacht jest zoptymalizowany pod kątem prędkości i sprawności żeglarskiej. Posiada lepszej jakości osprzęt, który pozwala na precyzyjne trymowanie żagli.',
	},
	{
		question: 'Jak wygląda procedura przekazania jachtu?',
		answer:
			'Stawiamy na konkret. Check-in przeprowadzamy sprawnie, skupiając się na detalach technicznych, które pozwolą Ci w pełni wykorzystać potencjał Cobry 41. Zawsze dostajesz od nas "instrukcję obsługi" jachtu w pigułce.',
	},
	{
		question: 'Co muszę zabrać ze sobą na rejs?',
		answer:
			'Poza standardowym ekwipunkiem żeglarskim, warto zabrać obuwie z jasną podeszwą, ciepłą odzież oraz dobry humor. Szczegółową listę przesyłamy po dokonaniu rezerwacji.',
	},
];

const FAQ: FC = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section id='faq' className='faq-section'>
			<div className='faq-header'>
				<h2 className='faq-title'>Q&A</h2>
				<p className='faq-subtitle'>
					Masz pytania? Dobrze trafiłeś. Zebraliśmy najczęściej zadawane
					pytania, żeby nic nie stało między Tobą a pierwszym rejsem na
					pokładzie Wind Thiefa.
				</p>
			</div>
			<div className='faq-list'>
				{faqs.map((faq, index) => (
					<div key={index} className='faq-item'>
						<div
							className='faq-question-container'
							onClick={() => setOpenIndex(openIndex === index ? null : index)}>
							<motion.button
								className='faq-toggle'
								animate={{ rotate: openIndex === index ? 180 : 0 }}
								transition={{ duration: 0.03, ease: 'easeInOut' }}
								style={{
									background: 'transparent',
									border: 'none',
									cursor: 'pointer',
								}}>
								{openIndex === index ? <Minus /> : <Plus />}
							</motion.button>
							<h3 className='faq-question'>{faq.question}</h3>
						</div>
						<AnimatePresence initial={false}>
							{openIndex === index && (
								<motion.div
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3, ease: 'easeInOut' }}
									style={{ overflow: 'hidden' }}>
									<div className='faq-answer-container'>
										<p className='faq-answer'>{faq.answer}</p>
									</div>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</div>
		</section>
	);
};

export default FAQ;
