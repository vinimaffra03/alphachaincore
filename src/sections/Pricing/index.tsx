import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { useState } from "react";
import data from "./pricing.json";
import PricingCard from "./card";

interface Pricing {
	type: string;
	icon: string;
	title: string;
	subTitle: string;
	pricing: string;
	pricingUnit: string;
	description: string;
	popular?: boolean;
	features: Feature[];
	button: string;
}

interface Feature {
	name: string;
	isIncluded: boolean;
}

const Pricing = () => {
	const [pricingData, setPricingData] = useState<Pricing[]>(data);
	const [isYearly, setIsYearly] = useState(true);

	return (
		<div
			className="flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px] py-12 bg-gray-50 dark:bg-gray-900"
			id="pricing">
			<div className="flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-4xl text-center">
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">Pronto para começar?</h1>
				<p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
					Escolha o plano ideal para o seu perfil
				</p>
			</div>
			
			<div className="flex items-center gap-3 sm:gap-4 mt-6">
				<p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">Mensal</p>
				<Switch
					checked={isYearly}
					onCheckedChange={(value) => {
						setIsYearly(value);
					}}
				/>
				<p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">Anual</p>
			</div>
			
			<div className="mt-4 relative">
				<Badge
					className="rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm"
					variant="secondary">
					Economize 65%
				</Badge>
				<div className="absolute top-0 right-[-40px] sm:right-[-50px] hidden sm:block">
					<Image src="/images/arrow.png" alt="arrow" width={40} height={40} />
				</div>
			</div>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 mt-8 w-full max-w-6xl">
				{pricingData?.map((pricing, index) => {
					return <PricingCard key={index} {...pricing} />;
				})}
			</div>
		</div>
	);
};

export default Pricing;
