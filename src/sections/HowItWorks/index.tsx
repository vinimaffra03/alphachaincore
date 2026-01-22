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
		<div className="flex flex-col items-center justify-start gap-16 min-h-[70vh] text-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="font-semibold uppercase text-gray-900">Como funciona</p>
				<h1 className="text-[40px] font-semibold">Automação com controle</h1>
				<p className="text-gray-500">
					Ative o hedge para LP, configure seus bots de trade e acompanhe
					sinais, análises e newsletters no painel AlphaChain.
				</p>
			</div>

			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-20">
				{data.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center justify-center gap-2 relative">
						<div className="flex items-center justify-center w-[60px] h-[60px] rounded-full bg-gray-900 absolute top-[-20px] left-[-20px]">
							<p className="text-gray-100">{item.step}</p>
						</div>
						<div className="h-[200px] w-[200px] rounded-lg bg-gray-200"></div>
						<p className="text-gray-500">{item.title}</p>
					</div>
				))}
			</div>

			<div className="flex items-center justify-center gap-4">
				<Button>Ver demonstração</Button>
				<Button variant="outline">Ver planos</Button>
			</div>
		</div>
	);
};

export default HowItWorks;
