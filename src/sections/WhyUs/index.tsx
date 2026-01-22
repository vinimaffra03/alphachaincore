import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const withFeatures = [
	{
		title:
			"Gestão avançada de LP com controle de exposição e redução de impermanent loss.",
	},
	{
		title:
			"Bots de trade com regras claras, alertas e execução disciplinada.",
	},
	{
		title:
			"Indicadores proprietários, análises semanais e newsletters acionáveis.",
	},
];

const withoutFeatures = [
	{
		title:
			"Operações sem gestão avançada deixam LP exposto a oscilações e custos invisíveis.",
	},
	{
		title:
			"Entradas sem método e falta de disciplina reduzem a consistência dos resultados.",
	},
	{
		title:
			"Sem indicadores e análises, decisões ficam reativas e atrasadas.",
	},
];

const WhyUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 sm:gap-12 min-h-[80vh] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-[100px] py-12 bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-4xl">
        <p className="font-medium uppercase text-gray-900 dark:text-white text-sm sm:text-base">
          Performance cripto
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Mais controle, menos ruído <br /> nas decisões de trade
        </h2>
      </div>

      <Tabs defaultValue="with" className="w-full max-w-6xl">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="with">Com AlphaChain</TabsTrigger>
          <TabsTrigger value="without">Sem AlphaChain</TabsTrigger>
        </TabsList>
        <TabsContent value="with">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full mt-8 lg:mt-16">
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-xl sm:text-2xl font-semibold">
                Estratégia automatizada com suporte humano
              </h1>
              <div className="flex flex-col gap-4">
                {withFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Image
                      src="/images/pricing/included.svg"
                      width={20}
                      height={20}
                      alt="Included"
                      className="mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-600 dark:text-gray-300 font-normal text-sm sm:text-base">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[300px] sm:min-h-[400px] w-full lg:w-1/2 max-w-[500px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </TabsContent>
        <TabsContent value="without">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full mt-8 lg:mt-16">
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left w-full lg:w-1/2">
              <h1 className="text-xl sm:text-2xl font-semibold">
                Operar sem método gera ruído <br /> e decisões tardias
              </h1>
              <div className="flex flex-col gap-4">
                {withoutFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Image
                      src="/images/pricing/close-circle.svg"
                      width={20}
                      height={20}
                      alt="Included"
                      className="mt-1 flex-shrink-0"
                    />
                    <p className="text-gray-600 dark:text-gray-300 font-normal text-sm sm:text-base">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[300px] sm:min-h-[400px] w-full lg:w-1/2 max-w-[500px] bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhyUs;
