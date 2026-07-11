import { CheckCircle2, ClipboardList, MessageCircle, WalletCards } from "lucide-react";
import { condominiumData } from "@/lib/data";

const steps = [
  {
    icon: MessageCircle,
    title: "1. Conversa rápida",
    description: "Você informa seu perfil e o que procura: morar, investir, 2 quartos ou 3 quartos."
  },
  {
    icon: ClipboardList,
    title: "2. Simulação orientada",
    description: "Eu verifico as condições e explico os próximos passos de forma simples e objetiva."
  },
  {
    icon: WalletCards,
    title: "3. Planejamento da entrada",
    description: "Avaliamos alternativas para facilitar sua compra com mais segurança."
  }
];

export default function OtherDevelopments() {
  const whatsappUrl = `https://wa.me/${condominiumData.contact.main.phone}?text=${encodeURIComponent(
    "Olá Renato! Quero entender o passo a passo para comprar no Alto Sobradinho."
  )}`;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary text-white shadow-2xl">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-[linear-gradient(135deg,#09294d,#1b3a6b)] p-8 md:p-10 lg:p-12">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-blue-100">Atendimento consultivo</p>
              <h2 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
                Comprar imóvel fica mais simples quando você tem orientação certa
              </h2>
              <p className="mb-8 leading-relaxed text-blue-50/90">
                O objetivo do site é te levar direto para uma conversa qualificada, sem enrolação. Você recebe informações essenciais sobre plantas, disponibilidade e condições do Alto Sobradinho.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-extrabold text-primary shadow-lg transition hover:bg-blue-50 active:scale-95"
              >
                <MessageCircle size={20} />
                Entender meu caminho de compra
              </a>
            </div>

            <div className="grid gap-4 bg-blue-50 p-6 text-primary md:p-10">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="rounded-3xl bg-white p-6 shadow-sm">
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                        <p className="leading-relaxed text-foreground/70">{step.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
              <div className="flex items-center gap-3 rounded-3xl bg-white/80 p-5 text-sm font-bold text-primary">
                <CheckCircle2 size={22} />
                Atendimento gratuito e sem compromisso com Renato Landim.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
