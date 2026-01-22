import { Button } from "@/components/ui/button";

const data = [
	{
		step: "01",
		title: "Escolha seu bot",
	},
	{
		step: "02",
		title: "Configure o risco",
	},
	{
		step: "03",
		title: "Acompanhe os relatórios",
	},
];

const HowItWorks: React.FC = ({}) => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-16 min-h-[70vh] text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px] py-12 bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-4xl">
				<p className="font-semibold uppercase text-gray-900 dark:text-white text-sm sm:text-base">Como funciona</p>
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">Automação com controle</h1>
				<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl">
					Ative a gestão avançada para LP, configure seus bots de trade e acompanhe
					sinais, análises e newsletters no painel AlphaChain.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-8 sm:gap-12 lg:gap-16 w-full max-w-6xl">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-4 relative">
						<div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-900 dark:bg-white absolute -top-6 -left-6 z-10">
							<p className="text-white dark:text-gray-900 text-sm sm:text-base font-semibold">{item.step}</p>
						</div>
						<div className="h-40 w-40 sm:h-48 sm:w-48 lg:h-56 lg:w-56 rounded-lg bg-gray-200 dark:bg-gray-700"></div>
						<p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-medium mt-2">{item.title}</p>
					</div>
				))}
			</div>

			<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8">
				<Button className="w-full sm:w-auto px-6 sm:px-8 h-12 bg-gray-900 hover:bg-gray-700 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-gray-900">Ver demonstração</Button>
				<Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 h-12 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white">Ver planos</Button>
			</div>
		</div>
	);
};

export default HowItWorks;
