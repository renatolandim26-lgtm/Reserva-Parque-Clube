import { Building2, Clock3, ShieldCheck } from "lucide-react";

const stats = [
  {
    icon: Clock3,
    value: "15 min",
    label: "do Plano Piloto",
    description: "Acesso prático pela BR-020 para quem precisa se conectar com Brasília."
  },
  {
    icon: ShieldCheck,
    value: "24h",
    label: "segurança e controle",
    description: "Projeto pensado para oferecer tranquilidade no dia a dia da família."
  },
  {
    icon: Building2,
    value: "2 e 3",
    label: "quartos com suíte",
    description: "Plantas com varanda gourmet, boa distribuição e opção para diferentes momentos de vida."
  }
];

export default function Introduction() {
  return (
    <section id="sobre" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary/60">Alto Sobradinho</p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-primary md:text-5xl">
              Um condomínio vertical para morar bem em Sobradinho
            </h2>
            <p className="text-lg leading-relaxed text-foreground/75">
              O Alto Sobradinho reúne localização estratégica, lazer completo e apartamentos de 2 e 3 quartos com suíte e varanda gourmet. A proposta é simples: oferecer conforto, segurança e uma jornada de compra assistida do primeiro contato até a escolha da planta.
            </p>
            <p className="mt-5 text-base leading-relaxed text-foreground/65">
              Para gerar um atendimento mais rápido e certeiro, o site prioriza WhatsApp e simulação gratuita, com informações essenciais para você decidir com tranquilidade.
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
