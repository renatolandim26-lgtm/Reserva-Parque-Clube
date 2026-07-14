import { Banknote, CalendarCheck, ChevronDown, MapPin, MessageCircle, Waves, Trees } from "lucide-react";
import { condominiumData } from "@/lib/data";

const benefits = [
  { icon: Waves, label: "Lazer de clube" },
  { icon: Trees, label: "Ao lado do Parque" },
  { icon: MapPin, label: "Acesso pela EPTG" }
];

export default function Hero() {
  const { contact, main } = condominiumData;
  const whatsappUrl = `https://wa.me/${contact.main.phone}?text=${encodeURIComponent(
    "Olá Renato! Vim pelo site do Reserva Parque Clube e quero receber uma simulação."
  )}`;

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-background text-foreground">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/1000056128.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/75 to-[#0A0A0A]/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs md:text-sm font-bold uppercase tracking-[0.42em] text-primary">
            Riva Incorporadora | Edição Premium
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-7xl font-bold leading-[0.98] tracking-tight mb-12 text-white">
            {main.tagline}
          </h1>

          <div className="mx-auto mt-9 flex max-w-4xl flex-col gap-3 rounded-3xl bg-black/60 p-3 shadow-2xl border border-primary/20 backdrop-blur-md md:flex-row md:items-center md:justify-center md:rounded-full md:px-6 md:py-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.label}
                  className={`flex items-center justify-center gap-3 px-4 py-2 text-sm font-bold uppercase tracking-wide text-white ${
                    index > 0 ? "md:border-l md:border-primary/30" : ""
                  }`}
                >
                  <Icon size={22} strokeWidth={1.8} className="text-primary" />
                  <span>{benefit.label}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-extrabold text-black shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] active:scale-95 sm:w-auto"
            >
              <MessageCircle size={22} />
              Solicitar Simulação Gratuita
            </a>

            <a
              href="#galeria"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-primary/40 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur transition-all hover:bg-white/10 active:scale-95 sm:w-auto"
            >
              <CalendarCheck size={22} />
              Ver Galeria
            </a>
          </div>

          <a
            href="#sobre"
            className="mx-auto mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary/80 transition hover:text-primary"
            aria-label="Ver mais informações sobre o Reserva Parque Clube"
          >
            Conheça o empreendimento
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
