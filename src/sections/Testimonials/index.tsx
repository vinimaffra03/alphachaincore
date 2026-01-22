import { Separator } from "@/components/ui/separator";

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
		title: "Hedge de LP na prática",
		description:
			"O bot de hedge da AlphaChain reduziu minha exposição em pools e melhorou o controle de risco sem complicar o dia a dia.",
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
		<div className="flex flex-col items-center justify-start gap-16 min-h-[70vh] text-center">
			<div className="flex flex-col items-center justify-center gap-2">
				<p className="font-semibold uppercase text-gray-900">
					O que dizem
				</p>
				<h1 className="text-[40px] font-semibold">
					Depoimentos da comunidade
				</h1>
				<p className="text-gray-500">
					Confira alguns relatos de quem já usa a AlphaChain no dia a dia.
				</p>
			</div>

			<div className="flex items-center gap-8 flex-wrap">
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
		<div className="flex flex-col items-start text-start justify-between gap-3 p-6 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[350px] min-h-[320px]">
			<div className="flex flex-col items-start text-start gap-3">
				<p className="text-[18px] font-medium">{title}</p>
				<p className="text-gray-500 text-[15px] font-light">{description}</p>
			</div>
			<div className="w-full flex flex-col items-start gap-3">
				<Separator />
				<div className="flex items-center gap-3">
					<img
						src={user.image}
						alt={user.name}
						className="w-[60px] h-[60px] rounded-full"
					/>
					<div className="flex flex-col items-start">
						<p className="text-[16px] font-semibold">{user.name}</p>
						<p className="text-gray-500 text-[14px]">{user.role}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
