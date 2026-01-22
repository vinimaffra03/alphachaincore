import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const withFeatures = [
	{
		title:
			"Hedge automático para LP com controle de exposição e redução de impermanent loss.",
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
			"Operações sem hedge deixam LP exposto a oscilações e custos invisíveis.",
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
    <div className="flex flex-col items-start justify-start gap-8 min-h-[80vh] px-[50px] lg:px-[200px]">
      <div className="flex flex-col items-start gap-2">
        <p className="font-medium uppercase text-gray-900">
          Performance cripto
        </p>
        <h2 className="text-4xl font-semibold">
          Mais controle, menos ruído <br /> nas decisões de trade
        </h2>
      </div>

      <Tabs defaultValue="with" className="w-full">
        <TabsList>
          <TabsTrigger value="with">Com AlphaChain</TabsTrigger>
          <TabsTrigger value="without">Sem AlphaChain</TabsTrigger>
        </TabsList>
        <TabsContent value="with">
          <div className="flex items-start gap-2 justify-between w-full mt-16">
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-[24px] font-semibold">
                Estratégia automatizada com suporte humano
              </h1>
              <div className="flex flex-col gap-4">
                {withFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Image
                      src="/images/pricing/included.svg"
                      width={20}
                      height={20}
                      alt="Included"
                    />
                    <p className="text-gray-600 font-normal w-[650px] mt-[-2px]">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[434px] w-[486px] bg-gray-200 rounded-lg"></div>
          </div>
        </TabsContent>
        <TabsContent value="without">
          <div className="flex items-start gap-2 justify-between w-full mt-16">
            <div className="flex flex-col items-start gap-6">
              <h1 className="text-[24px] font-semibold">
                Operar sem método gera ruído <br /> e decisões tardias
              </h1>
              <div className="flex flex-col gap-4">
                {withoutFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Image
                      src="/images/pricing/close-circle.svg"
                      width={20}
                      height={20}
                      alt="Included"
                    />
                    <p className="text-gray-600 font-normal w-[650px] mt-[-2px]">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="min-h-[434px] w-[486px] bg-gray-200 rounded-lg"></div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WhyUs;
