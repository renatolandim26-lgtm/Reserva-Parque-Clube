import { Building2, Trees, MapPin } from "lucide-react";

const stats = [
  {
    icon: Trees,
    value: "Parque",
    label: "ao seu lado",
    description: "Privilégio de morar colado ao Parque Ecológico de Águas Claras, com muito verde e ar puro."
  },
  {
    icon: MapPin,
    value: "EPTG",
    label: "acesso facilitado",
    description: "Novo acesso direto pela EPTG, garantindo mobilidade e evitando o trânsito interno da cidade."
  },
  {
    icon: Building2,
    value: "2 e 3",
    label: "quartos com suíte",
    description: "Plantas modernas de 63m² e 81m², além de coberturas lineares de 144m² para quem busca o topo."
  }
];

export default function Introduction() {
  return (
    <section id="sobre" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary/60">Reserva Parque Clube</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-primary md:text-5xl">
              O melhor lazer de clube de Águas Claras
            </h2>
            <p className="text-lg leading-relaxed text-foreground/75">
              O Reserva Parque Clube é o empreendimento que une a sofisticação de um clube privativo com a tranquilidade de viver ao lado do Parque Ecológico. Localizado na Rua 31 Norte, oferece o equilíbrio perfeito entre natureza e a conveniência urbana de Águas Claras.
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground/65">
              Com a Torre 6 em lançamento, você tem a oportunidade de garantir sua unidade em um projeto consolidado, com acabamento superior em porcelanato e uma área de lazer completa já pronta para uso.
            </p>
          </div>

          <div className="grid gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <article key={stat.label} className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div className="mb-1 flex flex-wrap items-baseline gap-2">
                        <span className="text-3xl font-black text-primary">{stat.value}</span>
                        <span className="font-bold text-primary/75">{stat.label}</span>
                      </div>
                      <p className="leading-relaxed text-foreground/65">{stat.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
