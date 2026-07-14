import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como funciona o financiamento no Reserva Parque Clube?",
    answer: "O Reserva Parque Clube é financiado através do Crédito Associativo ou Financiamento Bancário (SBPE). A Riva Incorporadora facilita o processo com entrada parcelada e uso do FGTS. Nós ajudamos você a encontrar a melhor modalidade para seu perfil."
  },
  {
    question: "Posso usar meu FGTS para comprar?",
    answer: "Sim! O FGTS pode ser usado como parte da entrada ou para amortizar o saldo devedor. Precisamos apenas verificar seu tempo de contribuição e saldo disponível."
  },
  {
    question: "O empreendimento está pronto ou em obras?",
    answer: "O Reserva Parque Clube possui torres prontas para morar e torres em lançamento (como a Torre 6). Isso permite que você escolha entre a urgência da mudança imediata ou a valorização de um projeto em construção."
  },
  {
    question: "Quais as opções de plantas disponíveis?",
    answer: "Temos apartamentos de 2 quartos (63m²), 3 quartos (81m²) e coberturas lineares de 144m². Todas as unidades possuem suíte e varanda."
  },
  {
    question: "Como é a área de lazer?",
    answer: "É um verdadeiro clube privativo com mais de 40 itens, incluindo complexo de piscinas, spas, saunas, quadras poliesportivas, salões de festas e espaços pet. O lazer é entregue mobiliado e equipado."
  },
  {
    question: "Onde exatamente fica a localização?",
    answer: "Estamos na Rua 31 Norte, Lote 02, em Águas Claras. O condomínio fica ao lado do Parque Ecológico e possui uma passagem exclusiva para pedestres ligando ao Colégio La Salle."
  },
  {
    question: "Como funciona o novo acesso pela EPTG?",
    answer: "O empreendimento está estrategicamente posicionado próximo à nova via de saída de Águas Claras, o que permite um fluxo de trânsito mais ágil para quem precisa se deslocar para o Plano Piloto ou Taguatinga."
  },
  {
    question: "Posso investir no Reserva Parque Clube?",
    answer: "Sim! Águas Claras é uma das regiões que mais valoriza no DF. A combinação de lazer completo, localização ao lado do parque e o padrão Riva torna o imóvel um excelente ativo para revenda ou locação."
  },
  {
    question: "Qual é o valor médio da entrada?",
    answer: "A entrada varia conforme o perfil de crédito e a unidade escolhida. Oferecemos planos flexíveis com a Riva. Solicite uma simulação gratuita para sabermos o valor exato para você."
  },
  {
    question: "Como agendar uma visita?",
    answer: "Basta clicar em 'Falar com Consultor' ou preencher o formulário. Agendamos sua visita para você conhecer o acabamento premium e o projeto completo."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary">
              Transparência e Confiança
            </p>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Perguntas Frequentes
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8" />
            <p className="text-lg leading-relaxed text-white/60">
              Respondemos as principais dúvidas sobre financiamento, localização e o estilo de vida no Reserva Parque Clube.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-primary/10 bg-card overflow-hidden transition-all hover:border-primary/30"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <h3 className="font-bold text-primary text-base md:text-lg">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={24} className="text-primary/40" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-black/20 border-t border-primary/5">
                        <p className="text-white/60 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 p-8 text-center border border-primary/20">
            <h3 className="mb-3 text-xl font-bold text-primary">
              Ainda tem dúvidas?
            </h3>
            <p className="mb-6 text-white/60">
              Fale diretamente com nossos consultores. Eles estão prontos para responder todas as suas perguntas e ajudar você a conquistar seu lugar no Reserva Parque.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-black transition-all hover:opacity-90 active:scale-95"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
