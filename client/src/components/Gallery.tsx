import { useState } from "react";
import { condominiumData } from "@/lib/data";

type GalleryCategory = "fachada" | "enxoval" | "plantas" | "empreendimento";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("fachada");
  const gallery = condominiumData.gallery;

  const categories: { key: GalleryCategory; label: string }[] = [
    { key: "fachada", label: "Fachada" },
    { key: "enxoval", label: "Enxoval" },
    { key: "empreendimento", label: "Empreendimento" }
  ];

  const currentImages = gallery[activeCategory] as Array<{ title: string; image: string; description?: string }>;

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary" style={{ fontFamily: "var(--font-display)" }}>
            Conheça o Projeto
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-lg"
                    : "bg-gray-100 text-primary hover:bg-gray-200"
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
              className="relative h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay removed as requested */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
