import React from "react";

// Pontos de interesse com coordenadas (ajustadas para Águas Claras)
const pointsOfInterest = [
  { name: "Parque Ecológico de Águas Claras", category: "LAZER" },
  { name: "Passagem Exclusiva La Salle", category: "EDUCAÇÃO" },
  { name: "Colégio La Salle", category: "EDUCAÇÃO" },
  { name: "Estação Concessionárias (Metrô)", category: "MOBILIDADE" },
  { name: "Novo Acesso EPTG", category: "MOBILIDADE" },
  { name: "DF Plaza Shopping", category: "COMPRAS E SERVIÇOS" },
  { name: "Taguatinga Shopping", category: "COMPRAS E SERVIÇOS" },
  { name: "Sam's Club", category: "COMPRAS E SERVIÇOS" },
  { name: "Pão de Açúcar", category: "COMPRAS E SERVIÇOS" },
  { name: "Big Box", category: "COMPRAS E SERVIÇOS" },
  { name: "Shopping Felicittà", category: "COMPRAS E SERVIÇOS" },
  { name: "Praça das Araras", category: "LAZER" },
  { name: "Academia Bluefit", category: "LAZER" },
  { name: "Hospital Alvorada", category: "SAÚDE" },
  { name: "Clínicas Médicas (Rua 31 Norte)", category: "SAÚDE" },
  { name: "Restaurante Coco Bambu", category: "RESTAURANTES" },
  { name: "Outback Steakhouse", category: "RESTAURANTES" },
  { name: "Madero Container", category: "RESTAURANTES" },
  { name: "Jeronimo Burger", category: "RESTAURANTES" },
  { name: "McDonald's", category: "RESTAURANTES" },
];

// Cores para cada categoria
const categoryColors: Record<string, string> = {
  "EDUCAÇÃO": "#3b82f6",
  "MOBILIDADE": "#06b6d4",
  "COMPRAS E SERVIÇOS": "#8b5cf6",
  "LAZER": "#ec4899",
  "SAÚDE": "#10b981",
  "RESTAURANTES": "#f59e0b"
};

export default function InterestMap() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary/60">Localização Privilegiada</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Tudo o que você precisa ao seu redor
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            O Reserva Parque Clube está no coração de Águas Claras, cercado por lazer, educação e as melhores conveniências da cidade.
          </p>
        </div>

        {/* Lista de Pontos de Interesse */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(
            pointsOfInterest.reduce((acc, point) => {
              if (!acc[point.category]) {
                acc[point.category] = [];
              }
              acc[point.category].push(point);
              return acc;
            }, {} as Record<string, typeof pointsOfInterest>)
          ).map(([category, items]) => (
            <div key={category} className="rounded-3xl border border-blue-50 bg-white p-6 shadow-sm transition hover:shadow-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-4 text-primary" style={{ fontFamily: "var(--font-display)" }}>
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-foreground">
                    <span
                      className="inline-flex items-center justify-center w-6 h-6 rounded-full text-white text-[10px] font-bold flex-shrink-0"
                      style={{ backgroundColor: categoryColors[item.category] }}
                    >
                      {itemIdx + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
