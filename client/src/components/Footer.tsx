import { MapPin, Phone } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function Footer() {
  const { contact, main } = condominiumData;
  return (
    <footer className="bg-black text-white py-12 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre Nós */}
          <div className="md:block hidden">
            <h4 className="font-bold mb-4 text-primary">Riva Incorporadora</h4>
            <p className="text-sm text-white/60 leading-relaxed">
              Especialistas em imóveis com conforto, localização privilegiada e alto potencial de valorização em Águas Claras.
            </p>
            <p className="text-sm text-white/60 leading-relaxed mt-4">
              Conectamos você ao Reserva Parque Clube, com atendimento personalizado e segurança em cada etapa da sua conquista.
            </p>
          </div>

          {/* Endereço e Contato */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contato</h4>
            <div className="space-y-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(main.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
              >
                <MapPin size={20} />
                {main.location}
              </a>
              <a
                href={`tel:+${contact.main.phone}`}
                className="flex items-center gap-2 text-white/60 hover:text-primary transition-colors"
              >
                <Phone size={20} />
                {contact.main.formattedPhone}
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Links Rápidos</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-white/60 hover:text-primary transition-colors">
                Início
              </a>
              <a href="#sobre" className="block text-white/60 hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#galeria" className="block text-white/60 hover:text-primary transition-colors">
                Galeria
              </a>
              <a href="#plantas" className="block text-white/60 hover:text-primary transition-colors">
                Plantas
              </a>
              <a href="#contato" className="block text-white/60 hover:text-primary transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/40">
              © 2026 Renato Landim — Todos os direitos reservados.
            </p>
            <div className="text-xs font-bold tracking-widest text-primary">PREMIUM EDITION</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
