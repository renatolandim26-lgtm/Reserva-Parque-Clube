import { Bath, BedDouble, MessageCircle, Ruler, Home } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function Units() {
  const { units } = condominiumData.main;
  const { contact } = condominiumData;

  return (
    <section id="plantas" className="bg-background py-20 border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary">Plantas exclusivas</p>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Escolha o espaço ideal para sua família</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8" />
          <p className="text-lg leading-relaxed text-white/70">
            Apartamentos de 2 e 3 quartos com suíte e lazer completo. Veja a melhor opção e fale comigo para receber uma simulação personalizada.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {units.map((unit) => {
            const whatsappUrl = `https://wa.me/${contact.main.phone}?text=${encodeURIComponent(unit.whatsappMessage)}`;

            return (
              <article
                key={unit.id}
                className="group overflow-hidden rounded-3xl border border-primary/10 bg-card shadow-xl transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden bg-black/40 p-4">
                  <img
                    src={unit.image}
                    alt={`Planta do apartamento ${unit.name} no Reserva Parque Clube`}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-4 top-4 flex justify-between gap-3">
                    <span className="rounded-full bg-primary px-4 py-2 text-sm font-extrabold text-black shadow-md">
                      {unit.area}
                    </span>
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-extrabold text-black shadow-md">
                      {unit.bedrooms} quartos
                    </span>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-primary">{unit.name}</h3>
                  </div>
                  <p className="mb-6 min-h-14 leading-relaxed text-white/60">{unit.highlight}</p>

                  <div className="mb-7 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-black/40 p-4 border border-primary/5">
                      <Ruler className="mx-auto mb-2 text-primary" size={22} />
                      <p className="text-xs font-semibold uppercase text-white/40">Área</p>
                      <p className="font-extrabold text-white">{unit.area}</p>
                    </div>
                    <div className="rounded-2xl bg-black/40 p-4 border border-primary/5">
                      {unit.name.toLowerCase().includes("cobertura") ? (
                        <Home className="mx-auto mb-2 text-primary" size={22} />
                      ) : (
                        <BedDouble className="mx-auto mb-2 text-primary" size={22} />
                      )}
                      <p className="text-xs font-semibold uppercase text-white/40">
                        {unit.name.toLowerCase().includes("cobertura") ? "Tipo" : "Quartos"}
                      </p>
                      <p className="font-extrabold text-white">
                        {unit.name.toLowerCase().includes("cobertura") ? "Cobertura" : unit.bedrooms}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-black/40 p-4 border border-primary/5">
                      <Bath className="mx-auto mb-2 text-primary" size={22} />
                      <p className="text-xs font-semibold uppercase text-white/40">Banhos</p>
                      <p className="font-extrabold text-white">{unit.bathrooms}</p>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 font-extrabold text-black shadow-md transition hover:opacity-90 hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] active:scale-95"
                  >
                    <MessageCircle size={20} />
                    Simular esta planta
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
