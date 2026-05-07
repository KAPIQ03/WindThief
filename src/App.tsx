import { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Booking from './components/Booking';
import About from './components/About';
import Specifications from './components/Specifications';
import Gallery from './components/Gallery';
import PriceList from './components/PriceList';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';
import Separation from './components/Separation';
import { IMAGES } from './constants';
import Lenis from 'lenis';
import Snap from 'lenis/snap';
import 'lenis/dist/lenis.css';

export const lenis = new Lenis();

function App() {
	useEffect(() => {
		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		const rafId = requestAnimationFrame(raf);

		const snap = new Snap(lenis, {
			type: 'mandatory',
		});

		return () => {
			snap.destroy();
			cancelAnimationFrame(rafId);
		};
	}, []);

	useEffect(() => {
		const handleAnchorClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const anchor = target.closest('a');
			if (!anchor) return;

			const href = anchor.getAttribute('href');
			if (href && href.startsWith('#') && href.length > 1) {
				e.preventDefault();
				lenis.scrollTo(href);
			}
		};

		document.addEventListener('click', handleAnchorClick);
		return () => document.removeEventListener('click', handleAnchorClick);
	}, []);

	return (
		<div className='app-container'>
			<Hero />
			<Navbar />
			<Booking />
			<About />
			<Specifications />
			<Gallery />
			<PriceList />
			<Separation images={IMAGES.separator} />
			<FAQ />
			<Footer />
		</div>
	);
}

export default App;
