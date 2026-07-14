import { X } from "lucide-react";
import { useEffect } from "react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-card border border-primary/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-primary/10 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl font-bold text-primary">Política de Privacidade</h2>
          <button
            onClick={onClose}
            className="text-white/40 hover:text-primary transition-colors p-1"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-white/70 space-y-6">
          <p className="text-sm leading-relaxed">
            Esta Política de Privacidade descreve como a Riva Incorporadora coleta, usa, armazena e protege as informações pessoais dos usuários que interagem com nosso website e serviços. Nosso compromisso é garantir a privacidade e a segurança dos seus dados, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">1. Coleta de Dados Pessoais</h3>
            <p className="text-sm leading-relaxed">
              Coletamos informações pessoais que você nos fornece voluntariamente ao preencher formulários em nosso site, como o formulário de contato ou de solicitação de atendimento personalizado. Os tipos de dados coletados podem incluir: nome completo, endereço de e-mail, número de telefone/WhatsApp e região de interesse.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">2. Finalidade da Coleta de Dados</h3>
            <p className="text-sm leading-relaxed">
              Os dados pessoais coletados são utilizados exclusivamente para as seguintes finalidades:
            </p>
            <ul className="text-sm leading-relaxed mt-2 space-y-2 ml-4 list-disc text-white/50">
              <li><strong className="text-white/80">Atendimento Personalizado:</strong> Entrar em contato com você para apresentar informações sobre o empreendimento Reserva Parque Clube, tirar dúvidas e oferecer atendimento personalizado.</li>
              <li><strong className="text-white/80">Comunicação:</strong> Enviar comunicações relevantes sobre o empreendimento, como atualizações e ofertas.</li>
              <li><strong className="text-white/80">Melhoria de Serviços:</strong> Analisar as informações para aprimorar nossos serviços e o conteúdo do site.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">3. Compartilhamento de Dados</h3>
            <p className="text-sm leading-relaxed">
              A Riva Incorporadora não vende ou aluga suas informações pessoais. Seus dados são compartilhados apenas com nossos consultores imobiliários para que realizem o atendimento personalizado solicitado por você.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">4. Segurança dos Dados</h3>
            <p className="text-sm leading-relaxed">
              Seus dados pessoais são armazenados em servidores seguros e adotamos medidas técnicas para protegê-los contra acesso não autorizado.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-primary mb-3">5. Seus Direitos</h3>
            <p className="text-sm leading-relaxed">
              De acordo com a LGPD, você pode solicitar a qualquer momento o acesso, correção ou exclusão de seus dados, bem como revogar seu consentimento para comunicações futuras.
            </p>
          </section>

          <section className="pt-4 border-t border-primary/10">
            <p className="text-xs text-white/40">
              <strong>Última atualização:</strong> 14 de julho de 2026
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-card border-t border-primary/10 p-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-8 py-3 bg-primary hover:opacity-90 text-black rounded-full font-bold transition-all shadow-[0_0_15px_rgba(197,160,89,0.2)]"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
