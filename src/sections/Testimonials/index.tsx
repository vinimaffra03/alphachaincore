"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Testimonial {
	title: string;
	description: string;
	user: {
		image: string;
		name: string;
		role: string;
	};
}

const data: Testimonial[] = [
	{
		title: "Gestão avançada de LP na prática",
		description:
			"O bot de gestão avançada da AlphaChain reduziu minha exposição em pools e melhorou o controle de risco sem complicar o dia a dia.",
		user: {
			image: "/images/testimonials/user1.png",
			name: "Lucas Almeida",
			role: "Investidor pessoal",
		},
	},
	{
		title: "Sinais e indicadores claros",
		description:
			"Os indicadores e relatórios semanais deixam a leitura do mercado muito mais objetiva. Valeu cada centavo.",
		user: {
			image: "/images/testimonials/user2.png",
			name: "Fernanda Souza",
			role: "Investidor pessoal",
		},
	},
	{
		title: "Consultoria que entrega",
		description:
			"A consultoria ajudou a ajustar meu setup e hoje sigo as rotinas com mais disciplina usando os bots.",
		user: {
			image: "/images/testimonials/user3.png",
			name: "Ricardo Pereira",
			role: "Investidor pessoal",
		},
	},
];

const Testimonials: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-h-[70vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px] py-12 bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-4xl">
				<p className="font-semibold uppercase text-gray-900 dark:text-white text-sm sm:text-base">
					O que dizem
				</p>
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
					Depoimentos da comunidade
				</h1>
				<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
					Confira alguns relatos de quem já usa a AlphaChain no dia a dia.
				</p>
			</div>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-6xl">
				{data.map((item, index) => (
					<Card key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;

const Card = ({ title, description, user }: Testimonial) => {
	return (
		<div className="flex flex-col items-start text-start justify-between gap-4 p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] dark:shadow-[0_3px_10px_rgb(0,0,0,0.5)] w-full max-w-sm min-h-[320px] bg-white dark:bg-gray-800">
			<div className="flex flex-col items-start text-start gap-3">
				<p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">{title}</p>
				<p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base font-light leading-relaxed">{description}</p>
			</div>
			<div className="w-full flex flex-col items-start gap-3 mt-auto">
				<Separator className="bg-gray-200 dark:bg-gray-700" />
				<div className="flex items-center gap-3">
					<Image
						src={user.image}
						alt={user.name}
						width={56}
						height={56}
						className="w-12 h-12 sm:w-14 sm:h-14 rounded-full"
					/>
					<div className="flex flex-col items-start">
						<p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{user.name}</p>
						<p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">{user.role}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
