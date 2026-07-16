import { MessageCircle, Phone, Award, Handshake, Key, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { condominiumData } from "@/lib/data";

export default function ContactSection() {
  const { contact } = condominiumData;
  const [showConsultantSelector, setShowConsultantSelector] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "morar",
    timeline: "imediato",
    plan: "2quartos",
    downPayment: "25k"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Preencha nome, e-mail e WhatsApp para receber o atendimento.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mojyejbd", {
        method: "POST",
        body: JSON.stringify({
          ...formData,
          empreendimento: "Reserva Parque Clube",
          origem: "Site Reserva Parque Clube"
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });

      if (response.ok) {
        toast.success("Cadastro realizado com sucesso! Em breve entraremos em contato.");
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "morar",
          timeline: "imediato",
          plan: "2quartos",
          downPayment: "25k"
        });
      } else {
        toast.error("Não foi possível enviar agora. Tente pelo botão de WhatsApp.");
      }
    } catch (error) {
      console.error("Erro:", error);
      toast.error("Erro de conexão. Tente pelo botão de WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleConsultantClick = (consultantIndex: number) => {
    const consultant = contact.consultants[consultantIndex];
    const message = `Olá ${consultant.name}! Vim pelo site do Reserva Parque Clube e quero receber uma simulação.`;
    window.open(`https://wa.me/${consultant.phone}?text=${encodeURIComponent(message)}`, "_blank");
    setShowConsultantSelector(false);
  };

  return (
    <section id="contato" className="bg-background py-20 border-t border-primary/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-primary">Atendimento Personalizado</p>
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">Receba uma simulação gratuita</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-8" />
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
              Preencha seus dados para receber condições, disponibilidade e orientação de compra do Reserva Parque Clube.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr] items-center">
            <div className="relative group overflow-hidden rounded-[2.5rem] border border-primary/30 shadow-[0_0_50px_rgba(197,160,89,0.1)] bg-[#050505]">
              <div className="relative aspect-[16/9] lg:aspect-square overflow-hidden">
                <img 
                  src="/images/team-premium.png" 
                  alt="Davyd Duarte & Renato Landim - Consultores Riva" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 mt-20 lg:mt-32">
                  <button
                    onClick={() => setShowConsultantSelector(true)}
                    className="group/btn relative flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C5A059] to-[#8E723D] px-8 py-4 font-bold text-black shadow-[0_10px_30px_rgba(197,160,89,0.4)] transition-all hover:scale-105 hover:shadow-[0_15px_40px_rgba(197,160,89,0.6)] active:scale-95"
                  >
                    <div className="rounded-full bg-black/10 p-1">
                      <MessageCircle size={22} fill="currentColor" />
                    </div>
                    <span className="text-lg uppercase tracking-wider">Falar com um Consultor</span>
                  </button>
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[#C5A059] drop-shadow-lg">
                    Atendimento rápido e personalizado
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {showConsultantSelector && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
                    onClick={() => setShowConsultantSelector(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full max-w-md overflow-hidden rounded-[2rem] bg-[#0A0A0A] border border-primary/30 shadow-[0_0_50px_rgba(197,160,89,0.2)]"
                    >
                      <div className="bg-gradient-to-r from-[#C5A059] to-[#8E723D] p-8 text-black">
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-black uppercase tracking-tight">Escolha seu consultor</h3>
                          <button 
                            onClick={() => setShowConsultantSelector(false)}
                            className="rounded-full p-2 transition hover:bg-black/10"
                          >
                            <X size={24} />
                          </button>
                        </div>
                        <p className="mt-1 text-sm font-bold opacity-80 uppercase tracking-widest">Conexão direta via WhatsApp</p>
                      </div>

                      <div className="flex flex-col p-6 space-y-4">
                        {contact.consultants.map((consultant, index) => (
                          <button
                            key={consultant.name}
                            onClick={() => handleConsultantClick(index)}
                            className="flex items-center gap-5 rounded-2xl p-5 transition-all hover:bg-white/5 hover:border-primary/20 border border-transparent active:scale-[0.98] group/item"
                          >
                            <div className="h-20 w-20 overflow-hidden rounded-full border-2 border-primary/30 bg-black shadow-lg flex-shrink-0">
                              <img 
                                src={consultant.image} 
                                alt={consultant.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 text-left">
                              <h4 className="text-lg font-bold text-white group-hover/item:text-primary transition-colors">{consultant.name}</h4>
                              <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-2">{consultant.role}</p>
                              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                                <MessageCircle size={14} fill="currentColor" />
                                {consultant.formattedPhone}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="rounded-[1.5rem] md:rounded-[2.5rem] border border-primary/10 bg-card p-5 sm:p-8 md:p-10 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 h-48 w-48 bg-primary/5 blur-[100px] rounded-full" />
              
              <form onSubmit={handleSubmit} className="grid gap-4 sm:gap-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary/80">Nome Completo *</label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-primary/10 bg-black/40 text-white focus:border-primary transition-all placeholder:text-white/20 text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary/80">WhatsApp *</label>
                    <Input
                      type="tel"
                      placeholder="(61) 9 9999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-primary/10 bg-black/40 text-white focus:border-primary transition-all placeholder:text-white/20 text-sm sm:text-base"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary/80">E-mail Corporativo *</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-primary/10 bg-black/40 text-white focus:border-primary transition-all placeholder:text-white/20 text-sm sm:text-base"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary/80">Objetivo</label>
                    <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                      <SelectTrigger className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-primary/10 bg-black/40 text-white focus:border-primary text-sm sm:text-base">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A0A0A] border-primary/20 text-white">
                        <SelectItem value="morar">Para Morar</SelectItem>
                        <SelectItem value="investir">Para Investir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary/80">Prazo de Aquisição</label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                      <SelectTrigger className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-primary/10 bg-black/40 text-white focus:border-primary text-sm sm:text-base">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A0A0A] border-primary/20 text-white">
                        <SelectItem value="imediato">Imediato</SelectItem>
                        <SelectItem value="3meses">Até 3 meses</SelectItem>
                        <SelectItem value="6meses">Até 6 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary/80">Planta Desejada</label>
                    <Select value={formData.plan} onValueChange={(value) => setFormData({ ...formData, plan: value })}>
                      <SelectTrigger className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-primary/10 bg-black/40 text-white focus:border-primary text-sm sm:text-base">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A0A0A] border-primary/20 text-white">
                        <SelectItem value="2quartos">2 Quartos</SelectItem>
                        <SelectItem value="3quartos">3 Quartos</SelectItem>
                        <SelectItem value="cobertura">Cobertura</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-primary/80">Entrada / FGTS</label>
                    <Select value={formData.downPayment} onValueChange={(value) => setFormData({ ...formData, downPayment: value })}>
                      <SelectTrigger className="h-12 sm:h-14 rounded-xl sm:rounded-2xl border-2 border-primary/10 bg-black/40 text-white focus:border-primary text-sm sm:text-base">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-[#0A0A0A] border-primary/20 text-white">
                        <SelectItem value="25k">Até 25 mil</SelectItem>
                        <SelectItem value="50k">Até 50 mil</SelectItem>
                        <SelectItem value="100k">Até 100 mil</SelectItem>
                        <SelectItem value="mais100k">Mais de 100 mil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-2 sm:pt-4">
                  <p className="text-[10px] leading-relaxed text-white/30 text-center">
                    Ao solicitar informações, você concorda com nossa{" "}
                    <button
                      type="button"
                      onClick={() => setIsPolicyModalOpen(true)}
                      className="font-bold text-primary/80 underline hover:text-primary transition-colors"
                    >
                      Política de Privacidade
                    </button>{" "}
                    e autoriza o contato exclusivo de nossos consultores parceiros.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 sm:h-16 rounded-full bg-gradient-to-r from-[#C5A059] to-[#8E723D] font-black text-black uppercase tracking-widest transition-all hover:opacity-90 hover:shadow-[0_10px_30px_rgba(197,160,89,0.3)] active:scale-95 text-xs sm:text-sm"
                >
                  {isSubmitting ? "Processando..." : "Solicitar Atendimento Exclusivo"}
                </Button>

                <PrivacyPolicyModal isOpen={isPolicyModalOpen} onClose={() => setIsPolicyModalOpen(false)} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
