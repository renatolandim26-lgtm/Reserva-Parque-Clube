import { Instagram, Facebook, MapPin, Phone } from "lucide-react";

import { condominiumData } from "@/lib/data";

export default function Footer() {
  const { contact, main } = condominiumData;
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre Nós */}
          <div className="md:block hidden">
            <h4 className="font-bold mb-4">Riva Incorporadora</h4>
            <p className="text-sm text-sidebar-foreground/80 leading-relaxed">
              Especialistas em imóveis com conforto, localização privilegiada e alto potencial de valorização.
            </p>
            <p className="text-sm text-sidebar-foreground/80 leading-relaxed mt-4">
              Conectamos você às melhores oportunidades imobiliárias em {main.location}, com atendimento personalizado e segurança em cada etapa.
            </p>
          </div>

          {/* Endereço e Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(main.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sidebar-foreground/80 hover:text-white transition-colors"
              >
                <MapPin size={20} />
                {main.location}
              </a>
              <a
                href={`tel:+${contact.main.phone}`}
                className="flex items-center gap-2 text-sidebar-foreground/80 hover:text-white transition-colors"
              >
                <Phone size={20} />
                {contact.main.formattedPhone}
              </a>
            </div>
          </div>

          {/* Redes Sociais Removidas */}

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Início
              </a>
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Imóveis
              </a>
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#" className="block text-sidebar-foreground/80 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-sidebar-foreground/20 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-sidebar-foreground/60">
              © 2026 Renato Landim — Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
