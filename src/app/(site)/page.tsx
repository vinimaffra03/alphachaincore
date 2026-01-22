"use client";

import CandleEffect from "@/components/ui/candle-effect";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SnowEffect from "@/components/ui/snow-effect";
import Benefits from "@/sections/Benefits";
import Header from "@/sections/Header";
import HowItWorks from "@/sections/HowItWorks";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import WhyUs from "@/sections/WhyUs";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		// Limpar hash da URL para prevenir scroll automático
		if (window.location.hash) {
			window.history.replaceState(null, '', window.location.pathname);
			window.scrollTo(0, 0);
		}
	}, []);

	return (
		<>
			<CandleEffect />
			<SnowEffect />
			<main className="bg-background text-foreground transition-colors duration-300">
				<Navbar />
				<div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px] pt-12">
					<Header />
				</div>
				<Benefits />
				<HowItWorks />
				<WhyUs />
				<Testimonials />
				<Pricing />
				<Footer />
			</main>
		</>
	);
}
