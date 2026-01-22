const data = [
	{
		image: "",
		title: "Gestão avançada de LP",
		description:
			"Proteja sua liquidez com estratégias automatizadas e controle de exposição em pools.",
	},
	{
		image: "",
		title: "Bots de trade",
		description:
			"Automatize entradas e saídas com robôs configuráveis e execução disciplinada.",
	},
	{
		image: "",
		title: "Indicadores e insights",
		description:
			"Indicadores proprietários, alertas e relatórios para decisões rápidas.",
	},
];

const Benefits: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 sm:gap-12 min-h-[100vh] text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px] py-12 bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center gap-4 sm:gap-6 max-w-4xl">
				<p className="font-semibold uppercase text-gray-900 dark:text-white text-sm sm:text-base">
					Por que a AlphaChain
				</p>
				<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
					Automação, análise <br /> e educação cripto
				</h1>
				<p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-light">
					Gestão avançada de LP, bots de trade e indicadores, além de aulas, consultorias e
					newsletters para você operar com confiança.
				</p>
			</div>

			<div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 w-full max-w-6xl">
				{data.map((item, index) => (
					<div
						className="flex flex-col items-center text-center gap-4 w-full max-w-sm"
						key={index}>
						<div className="min-h-[200px] sm:min-h-[250px] w-full max-w-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
						<div className="flex flex-col items-center text-center gap-2">
							<p className="font-semibold uppercase text-gray-900 dark:text-white text-base sm:text-lg">
								{item.title}
							</p>
							<p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Benefits;
