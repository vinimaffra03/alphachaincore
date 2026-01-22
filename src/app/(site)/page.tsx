"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Benefits from "@/sections/Benefits";
import Header from "@/sections/Header";
import HowItWorks from "@/sections/HowItWorks";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import WhyUs from "@/sections/WhyUs";

export default function Home() {
	return (
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
	);
}
