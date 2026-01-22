import { FC } from "react";
import Pricing from "..";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const PricingCard: FC<Pricing> = (props) => {
	return (
		<div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg flex flex-col gap-4 w-full max-w-sm">
			<div className="flex w-full items-center justify-between">
				<div className="flex items-center gap-2 sm:gap-3">
					<Image src={props.icon} alt={props.title} width={24} height={24} className="sm:w-7 sm:h-7" />
					<h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">{props.title}</h1>
				</div>
				{props.popular && (
					<Badge className="bg-gray-900 dark:bg-white text-gray-100 dark:text-gray-900 p-1.5 sm:p-2 rounded-full px-2 sm:px-4 text-xs sm:text-sm">
						Popular
					</Badge>
				)}
			</div>
			<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{props.subTitle}</p>
			<div className="flex items-center gap-2">
				<h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white">
					{props.pricingUnit}
					{props.pricing}
				</h1>
				<p className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-300">
					{props.type === "monthly" ? "/mês" : "/ano"}
				</p>
			</div>
			<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{props.description}</p>
			<div className="flex flex-col gap-3 sm:gap-4 my-4">
				{props.features.map((feature, index) => {
					return (
						<div className="flex items-center gap-2" key={index}>
							{feature.isIncluded ? (
								<Image
									src="/images/pricing/included.svg"
									alt="included"
									width={16}
									height={16}
									className="sm:w-5 sm:h-5"
								/>
							) : (
								<Image
									src="/images/pricing/not-included.svg"
									alt="included"
									width={16}
									height={16}
									className="sm:w-5 sm:h-5"
								/>
							)}
							<p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{feature.name}</p>
						</div>
					);
				})}
			</div>
			<Button className="w-full sm:w-[80%] mx-auto h-12 bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900">{props.button}</Button>
		</div>
	);
};

export default PricingCard;
