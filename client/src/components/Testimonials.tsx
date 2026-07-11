import { MessageCircle, Star } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function Testimonials() {
  const { contact } = condominiumData;
  const consultants = contact.consultants;

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary/60">
              Atendimento Consultivo
            </p>
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              Você não está sozinho nessa jornada
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70">
              Nossa equipe de consultores está aqui para orientar você desde o primeiro contato até a entrega do seu imóvel.
            </p>
          </div>

          {/* Consultant Cards - Two consultants side by side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {consultants.map((consultant) => (
              <div
                key={consultant.name}
                className="relative overflow-hidden rounded-3xl shadow-2xl bg-white border border-blue-100"
              >
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-primary/20 to-blue-100">
                  <img
                    src={consultant.image}
                    alt={consultant.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">
                    {consultant.name}
                  </h3>
                  <p className="text-sm font-semibold text-primary/60 uppercase tracking-wider mb-4">
                    {consultant.role}
                  </p>
                  <p className="text-foreground/70 mb-6 leading-relaxed text-sm">
                    Consultor parceiro da Riva Incorporadora, especializado em captação de leads orgânica e atendimento consultivo. Aqui para transformar seu sonho da casa própria em realidade.
                  </p>
                  <a
                    href={`https://wa.me/${consultant.phone}?text=${encodeURIComponent(consultant.defaultMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f9d55] px-6 py-3 font-bold text-white transition-all hover:bg-[#1f9d55]/90 active:scale-95 w-full"
                  >
                    <MessageCircle size={20} />
                    Falar com {consultant.name.split(" ")[0]}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div className="rounded-2xl bg-white p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <Star size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Atendimento 100% Consultivo</h4>
                  <p className="text-sm text-foreground/70">
                    Não é venda agressiva. Você recebe orientação honesta e personalizada para sua situação específica.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <Star size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Qualificação de Crédito</h4>
                  <p className="text-sm text-foreground/70">
                    Verificamos seu perfil desde o primeiro contato para encontrar as melhores condições para você.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <Star size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Suporte em Cada Etapa</h4>
                  <p className="text-sm text-foreground/70">
                    Do primeiro contato até a entrega do imóvel, você tem apoio completo para tomar as melhores decisões.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                    <Star size={20} className="text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Resposta Rápida</h4>
                  <p className="text-sm text-foreground/70">
                    Atendimento via WhatsApp com resposta rápida às suas dúvidas e solicitações.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl bg-gradient-to-r from-primary to-blue-600 p-8 md:p-12 text-center text-white">
            <h3 className="mb-4 text-3xl font-bold">
              Pronto para começar sua jornada?
            </h3>
            <p className="mb-8 text-lg opacity-90">
              Clique abaixo e vamos conversar sobre como você pode sair do aluguel e ter sua casa própria no Alto Sobradinho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {consultants.map((consultant) => (
                <a
                  key={consultant.name}
                  href={`https://wa.me/${consultant.phone}?text=${encodeURIComponent(consultant.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-primary transition-all hover:bg-blue-50 active:scale-95"
                >
                  <MessageCircle size={22} />
                  Falar com {consultant.name.split(" ")[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
