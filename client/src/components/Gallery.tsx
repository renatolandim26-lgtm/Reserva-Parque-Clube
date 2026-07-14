import { useState } from "react";
import { condominiumData } from "@/lib/data";

type GalleryCategory = "fachada" | "enxoval" | "plantas" | "empreendimento";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("fachada");
  const gallery = condominiumData.gallery;

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: "fachada", label: "Fachada" },
    { key: "enxoval", label: "Área de Lazer" },
    { key: "empreendimento", label: "Empreendimento" }
  ];

  const currentImages = gallery[activeCategory] as Array<{ title: string; image: string; description?: string }>;

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary">Experiência Visual</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Conheça o Projeto
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-12" />

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary text-black shadow-lg"
                    : "bg-white/5 text-primary border border-primary/20 hover:bg-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((item, index) => (
            <div
              key={index}
              className="relative h-72 md:h-80 rounded-2xl overflow-hidden border border-primary/10 shadow-lg hover:border-primary/40 transition-all group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-sm font-bold uppercase tracking-wider">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
