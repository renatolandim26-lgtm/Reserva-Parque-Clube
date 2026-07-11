import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Como funciona o financiamento no Alto Sobradinho?",
    answer: "O Alto Sobradinho é financiado pela Caixa Econômica Federal através da Riva Incorporadora. Você pode usar FGTS, entrada facilitada ou uma combinação de ambos. Nós ajudamos você a encontrar a melhor opção para seu perfil."
  },
  {
    question: "Posso usar meu FGTS para comprar?",
    answer: "Sim! Se você trabalha com carteira assinada e tem FGTS disponível, pode usar até 100% do valor acumulado como entrada ou abater do financiamento. Precisamos verificar seu saldo e elegibilidade."
  },
  {
    question: "O Alto Sobradinho é enquadrado no Minha Casa Minha Vida?",
    answer: "Sim, o empreendimento é enquadrado no programa Minha Casa Minha Vida, oferecendo condições especiais de financiamento e subsídios para famílias com renda até 10 mil reais."
  },
  {
    question: "Qual é o valor médio das parcelas?",
    answer: "As parcelas variam conforme o valor do imóvel, entrada e prazo do financiamento. Para o apartamento de 2 quartos, as parcelas começam a partir de valores competitivos. Solicite uma simulação personalizada para seu perfil."
  },
  {
    question: "Quanto preciso de entrada?",
    answer: "Você pode começar com uma entrada a partir de 25 mil reais. Oferecemos planos de entrada facilitada conforme sua capacidade de pagamento. Quanto maior a entrada, menor a parcela mensal."
  },
  {
    question: "Qual é o prazo do financiamento?",
    answer: "O financiamento pode ser de até 30 anos, dependendo de sua idade e renda. Quanto maior o prazo, menor a parcela mensal. Nós ajudamos você a encontrar o melhor prazo para sua situação."
  },
  {
    question: "Posso investir no Alto Sobradinho?",
    answer: "Sim! Muitos clientes compram para investimento. O Alto Sobradinho oferece excelente potencial de valorização pela localização estratégica e infraestrutura completa. Fale conosco para saber mais sobre oportunidades de investimento."
  },
  {
    question: "Qual é o processo de compra?",
    answer: "O processo é simples: 1) Simulação e aprovação de crédito, 2) Escolha da planta, 3) Assinatura do contrato, 4) Acompanhamento da obra, 5) Entrega do imóvel. Nós orientamos você em cada etapa."
  },
  {
    question: "Quando será a entrega do empreendimento?",
    answer: "A obra está em andamento. Para informações atualizadas sobre o cronograma de entrega, entre em contato conosco pelo WhatsApp. Temos previsão de conclusão em breve."
  },
  {
    question: "Posso visitar o empreendimento?",
    answer: "Sim! Agende uma visita conosco. Você pode conhecer o terreno, ver o progresso da obra e receber uma orientação completa sobre o projeto. Clique em 'Simular agora' para agendar sua visita."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary/60">
              Dúvidas Frequentes
            </p>
            <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">
              Perguntas Frequentes
            </h2>
            <p className="text-lg leading-relaxed text-foreground/70">
              Respondemos as principais dúvidas sobre financiamento, FGTS e o processo de compra no Alto Sobradinho.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="rounded-xl border border-blue-100 overflow-hidden transition-all hover:border-primary/30 hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors"
                >
                  <h3 className="font-bold text-primary text-base md:text-lg">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ChevronDown size={24} className="text-primary/60" />
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
                      <div className="px-6 py-4 bg-blue-50/50 border-t border-blue-100">
                        <p className="text-foreground/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-primary/10 to-blue-100/50 p-8 text-center border border-primary/20">
            <h3 className="mb-3 text-xl font-bold text-primary">
              Ainda tem dúvidas?
            </h3>
            <p className="mb-6 text-foreground/70">
              Fale diretamente com nossos consultores. Eles estão prontos para responder todas as suas perguntas e ajudar você a encontrar a melhor solução.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-white transition-all hover:bg-primary/90 active:scale-95"
            >
              Falar com Consultor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
