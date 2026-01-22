const data = [
	{
		image: "",
		title: "Hedge para LP",
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
		<div className="flex flex-col items-start justify-center gap-12 min-h-[100vh] text-left px-[50px] lg:px-[200px]">
			<div className="flex flex-col items-start justify-start gap-2">
				<p className="font-semibold uppercase text-gray-900">
					Por que a AlphaChain
				</p>
				<div className="flex items-center gap-20">
					<h1 className="text-[40px] font-semibold">
						Automação, análise <br /> e educação cripto
					</h1>
					<p className="text-[18px] w-[500px] font-light">
						Bots de hedge, trade e indicadores, além de aulas, consultorias e
						newsletters para você operar com confiança.
					</p>
				</div>
			</div>

			<div className="flex flex-wrap items-start justify-between gap-4 w-full">
				{data.map((item, index) => (
					<div
						className="flex flex-col items-start gap-4 w-[384px]"
						key={index}>
						<div className="min-h-[384px] w-[384px] bg-gray-200 rounded-lg"></div>
						<div className="flex flex-col items-start justify-start gap-2">
							<p className="font-semibold uppercase text-gray-900 text-lg">
								{item.title}
							</p>
							<p className="text-[16px]">{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Benefits;
