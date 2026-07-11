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
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Política de Privacidade</h2>
          <button
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground transition-colors"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-foreground/80 space-y-6">
          <p className="text-sm text-foreground/60">
            Esta Política de Privacidade descreve como a Riva Incorporadora coleta, usa, armazena e protege as informações pessoais dos usuários que interagem com nosso website e serviços. Nosso compromisso é garantir a privacidade e a segurança dos seus dados, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
          </p>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">1. Coleta de Dados Pessoais</h3>
            <p className="text-sm leading-relaxed">
              Coletamos informações pessoais que você nos fornece voluntariamente ao preencher formulários em nosso site, como o formulário de contato ou de solicitação de atendimento personalizado. Os tipos de dados coletados podem incluir: nome completo, endereço de e-mail, número de telefone/WhatsApp e região de interesse.
            </p>
            <p className="text-sm leading-relaxed mt-2">
              Não coletamos dados sensíveis, como origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dados referentes à saúde ou à vida sexual, dados genéticos ou biométricos.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">2. Finalidade da Coleta de Dados</h3>
            <p className="text-sm leading-relaxed">
              Os dados pessoais coletados são utilizados exclusivamente para as seguintes finalidades:
            </p>
            <ul className="text-sm leading-relaxed mt-2 space-y-2 ml-4">
              <li><strong>Atendimento Personalizado:</strong> Entrar em contato com você para apresentar informações sobre o empreendimento Alto Sobradinho, tirar dúvidas e oferecer atendimento personalizado por meio de nossos consultores imobiliários.</li>
              <li><strong>Comunicação:</strong> Enviar comunicações relevantes sobre o empreendimento, como atualizações, novidades e ofertas, caso você tenha manifestado interesse.</li>
              <li><strong>Melhoria de Serviços:</strong> Analisar as informações para entender melhor as necessidades dos nossos usuários e aprimorar nossos serviços e o conteúdo do site.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">3. Compartilhamento de Dados</h3>
            <p className="text-sm leading-relaxed">
              A Riva Incorporadora não vende, aluga ou compartilha suas informações pessoais com terceiros para fins de marketing sem o seu consentimento explícito. Seus dados podem ser compartilhados apenas em situações específicas e necessárias, tais como: com nossos consultores imobiliários para que realizem o atendimento personalizado, ou em cumprimento a ordens judiciais ou requisições de autoridades competentes.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">4. Armazenamento e Segurança dos Dados</h3>
            <p className="text-sm leading-relaxed">
              Seus dados pessoais são armazenados em servidores seguros e adotamos medidas técnicas e administrativas para protegê-los contra acesso não autorizado, perda, alteração ou divulgação indevida. Apesar de todos os nossos esforços, nenhum sistema de segurança é impenetrável, e não podemos garantir a segurança absoluta das informações transmitidas pela internet.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">5. Direitos do Titular dos Dados (LGPD)</h3>
            <p className="text-sm leading-relaxed">
              De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="text-sm leading-relaxed mt-2 space-y-2 ml-4">
              <li><strong>Confirmação e Acesso:</strong> Confirmar a existência de tratamento e acessar seus dados pessoais.</li>
              <li><strong>Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li><strong>Anonimização, Bloqueio ou Eliminação:</strong> Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
              <li><strong>Portabilidade:</strong> Solicitar a portabilidade dos seus dados a outro fornecedor de serviço ou produto.</li>
              <li><strong>Eliminação:</strong> Solicitar a eliminação dos dados pessoais tratados com o seu consentimento, exceto nas hipóteses previstas em lei.</li>
              <li><strong>Revogação do Consentimento:</strong> Revogar o consentimento a qualquer momento, mediante manifestação expressa.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">6. Contato</h3>
            <p className="text-sm leading-relaxed">
              Para quaisquer dúvidas sobre esta Política de Privacidade ou para exercer seus direitos como titular dos dados, entre em contato conosco através de nossos consultores imobiliários ou pelo WhatsApp.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-foreground mb-3">7. Alterações nesta Política de Privacidade</h3>
            <p className="text-sm leading-relaxed">
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas de coleta e uso de dados ou em conformidade com novas legislações. Recomendamos que você revise esta página regularmente para se manter informado sobre como estamos protegendo suas informações.
            </p>
            <p className="text-sm leading-relaxed mt-2 text-foreground/60">
              <strong>Última atualização:</strong> 12 de maio de 2026
            </p>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-slate-200 p-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
