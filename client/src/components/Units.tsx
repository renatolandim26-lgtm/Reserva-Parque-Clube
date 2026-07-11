import { Bath, BedDouble, MessageCircle, Ruler, Home } from "lucide-react";
import { condominiumData } from "@/lib/data";

export default function Units() {
  const { units } = condominiumData.main;
  const { contact } = condominiumData;

  return (
    <section id="plantas" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary/60">Plantas disponíveis</p>
          <h2 className="mb-4 text-4xl font-bold text-primary md:text-5xl">Escolha o espaço ideal para sua família</h2>
          <p className="text-lg leading-relaxed text-foreground/70">
            Apartamentos de 2 e 3 quartos com suíte e varanda gourmet. Veja a melhor opção e fale comigo para receber uma simulação personalizada.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {units.map((unit) => {
            const whatsappUrl = `https://wa.me/${contact.main.phone}?text=${encodeURIComponent(unit.whatsappMessage)}`;

            return (
              <article
                key={unit.id}
                className="group overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="relative h-72 overflow-hidden bg-blue-50">
                  <img
                    src={unit.image}
                    alt={`Planta do apartamento ${unit.name} no Alto Sobradinho`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-4 top-4 flex justify-between gap-3">
                    <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-primary shadow-md">
                      {unit.area}
                    </span>
                    <span className="rounded-full bg-primary/95 px-4 py-2 text-sm font-extrabold text-white shadow-md">
                      {unit.bedrooms} quartos
                    </span>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <h3 className="mb-3 text-2xl font-bold text-primary">{unit.name}</h3>
                  <p className="mb-6 min-h-14 leading-relaxed text-foreground/70">{unit.highlight}</p>

                  <div className="mb-7 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-2xl bg-blue-50 p-4">
                      <Ruler className="mx-auto mb-2 text-primary" size={22} />
                      <p className="text-xs font-semibold uppercase text-foreground/55">Área</p>
                      <p className="font-extrabold text-primary">{unit.area}</p>
                    </div>
                    <div className="rounded-2xl bg-blue-50 p-4">
                      {unit.name.toLowerCase().includes("cobertura") ? (
                        <Home className="mx-auto mb-2 text-primary" size={22} />
                      ) : (
                        <BedDouble className="mx-auto mb-2 text-primary" size={22} />
                      )}
                      <p className="text-xs font-semibold uppercase text-foreground/55">
                        {unit.name.toLowerCase().includes("cobertura") ? "Tipo" : "Quartos"}
                      </p>
                      <p className="font-extrabold text-primary">
                        {unit.name.toLowerCase().includes("cobertura") ? "Cobertura" : unit.bedrooms}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-blue-50 p-4">
                      <Bath className="mx-auto mb-2 text-primary" size={22} />
                      <p className="text-xs font-semibold uppercase text-foreground/55">Banhos</p>
                      <p className="font-extrabold text-primary">{unit.bathrooms}</p>
                    </div>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-4 font-extrabold text-white shadow-md transition hover:bg-primary/90 hover:shadow-lg active:scale-95"
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
