import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { condominiumData } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { consultants } = condominiumData.contact;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-2 w-72 overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
          >
            <div className="bg-[#1f9d55] p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">Fale com nossos consultores</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-1 transition hover:bg-white/20"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-xs opacity-90">Escolha um consultor para iniciar o atendimento</p>
            </div>

            <div className="flex flex-col p-2">
              {consultants.map((consultant) => (
                <a
                  key={consultant.name}
                  href={`https://wa.me/${consultant.phone}?text=${encodeURIComponent(consultant.defaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl p-3 transition hover:bg-gray-50 active:scale-[0.98]"
                >
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-[#1f9d55]/20 bg-gray-100">
                    <img 
                      src={consultant.image} 
                      alt={consultant.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-800">{consultant.name}</h4>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider">{consultant.role}</p>
                  </div>
                  <div className="rounded-full bg-[#1f9d55]/10 p-2 text-[#1f9d55]">
                    <MessageCircle size={16} />
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir opções de WhatsApp"
        className="inline-flex items-center gap-3 rounded-full bg-[#1f9d55] px-5 py-4 font-extrabold text-white shadow-2xl transition hover:-translate-y-1 hover:bg-[#18864a] active:scale-95"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {isOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </motion.div>
        <span className="hidden sm:inline">Simular pelo WhatsApp</span>
      </button>
    </div>
  );
}
