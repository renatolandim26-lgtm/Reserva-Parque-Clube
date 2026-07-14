import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { condominiumData } from "@/lib/data";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#plantas", label: "Plantas" },
  { href: "#contato", label: "Contato" }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${condominiumData.contact.main.phone}?text=${encodeURIComponent(
    "Olá Renato! Quero saber mais sobre as condições do Reserva Parque Clube."
  )}`;

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-black/95 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3" aria-label="Voltar ao início do site Reserva Parque Clube">
            <div className="text-2xl font-black tracking-[0.18em] text-primary">RIVA</div>
            <div className="hidden h-8 w-px bg-primary/30 sm:block" />
            <div className="hidden text-left text-xs font-semibold uppercase tracking-[0.18em] text-white sm:block">
              Reserva Parque
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-bold text-white/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-black shadow-md transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] active:scale-95"
            >
              <MessageCircle size={18} />
              Simular agora
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-primary transition-colors hover:bg-white/5 md:hidden"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="space-y-2 border-t border-primary/10 bg-black py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-4 py-3 font-semibold text-white/90 transition-colors hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-extrabold text-black"
            >
              <MessageCircle size={18} />
              Simular pelo WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
