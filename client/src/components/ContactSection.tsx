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
  const [selectedConsultant, setSelectedConsultant] = useState<number | null>(null);
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
        toast.success("Cadastro realizado. Vou te chamar no WhatsApp.");
        
        if (selectedConsultant !== null) {
          const consultant = contact.consultants[selectedConsultant];
          const message = `Olá ${consultant.name}! Meu nome é ${formData.name}. Vim pelo site do Reserva Parque Clube. Tenho interesse na planta: ${formData.plan}, objetivo: ${formData.interest}, prazo: ${formData.timeline}, entrada/FGTS: ${formData.downPayment}.`;

          setTimeout(() => {
            window.open(`https://wa.me/${consultant.phone}?text=${encodeURIComponent(message)}`, "_blank");
          }, 900);
        } else {
          setShowConsultantSelector(true);
        }

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

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] items-start">
            <aside className="relative overflow-hidden rounded-[2rem] shadow-2xl transition-transform hover:scale-[1.02] border border-primary/20">
              <button
                onClick={() => setShowConsultantSelector(!showConsultantSelector)}
                className="block w-full cursor-pointer"
              >
                <img 
                  src="/images/team-card.png" 
                  alt="Cartão de Visita - Davyd Duarte & Renato Landim - Riva Incorporadora" 
                  className="w-full h-auto"
                />
              </button>

              <AnimatePresence>
                {showConsultantSelector && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                    onClick={() => setShowConsultantSelector(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.9, y: 20 }}
                      onClick={(e) => e.stopPropagation()}
                      className="w-full max-w-md overflow-hidden rounded-2xl bg-card border border-primary/20 shadow-2xl"
                    >
                      <div className="bg-primary p-6 text-black">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-bold">Escolha seu consultor</h3>
                          <button 
                            onClick={() => setShowConsultantSelector(false)}
                            className="rounded-full p-1 transition hover:bg-black/10"
                          >
                            <X size={20} />
                          </button>
                        </div>
                        <p className="text-sm font-semibold opacity-80">Selecione com quem deseja falar</p>
                      </div>

                      <div className="flex flex-col p-4">
                        {contact.consultants.map((consultant, index) => (
                          <button
                            key={consultant.name}
                            onClick={() => handleConsultantClick(index)}
                            className="flex items-center gap-4 rounded-xl p-4 transition hover:bg-white/5 active:scale-[0.98]"
                          >
                            <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary/20 bg-black/40 flex-shrink-0">
                              <img 
                                src={consultant.image} 
                                alt={consultant.name}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1 text-left">
                              <h4 className="text-base font-bold text-white">{consultant.name}</h4>
                              <p className="text-xs text-white/40 uppercase tracking-wider">{consultant.role}</p>
                              <p className="text-xs text-primary font-bold mt-1">{consultant.formattedPhone}</p>
                            </div>
                            <div className="rounded-full bg-primary/10 p-2 text-primary flex-shrink-0">
                              <MessageCircle size={18} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </aside>

            <div className="rounded-3xl border border-primary/10 bg-card p-6 shadow-lg md:p-8">
              <form onSubmit={handleSubmit} className="grid gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Nome *</label>
                    <Input
                      type="text"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 rounded-xl border-2 border-primary/10 bg-black/20 text-white focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">WhatsApp *</label>
                    <Input
                      type="tel"
                      placeholder="(61) 9 9999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 rounded-xl border-2 border-primary/10 bg-black/20 text-white focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">E-mail *</label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12 rounded-xl border-2 border-primary/10 bg-black/20 text-white focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Objetivo</label>
                    <Select value={formData.interest} onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                      <SelectTrigger className="h-12 rounded-xl border-2 border-primary/10 bg-black/20 text-white focus:border-primary">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary/20 text-white">
                        <SelectItem value="morar">Para Morar</SelectItem>
                        <SelectItem value="investir">Para Investir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Prazo para compra</label>
                    <Select value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                      <SelectTrigger className="h-12 rounded-xl border-2 border-primary/10 bg-black/20 text-white focus:border-primary">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary/20 text-white">
                        <SelectItem value="imediato">Imediato</SelectItem>
                        <SelectItem value="3meses">Até 3 meses</SelectItem>
                        <SelectItem value="6meses">Até 6 meses</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Planta de interesse</label>
                    <Select value={formData.plan} onValueChange={(value) => setFormData({ ...formData, plan: value })}>
                      <SelectTrigger className="h-12 rounded-xl border-2 border-primary/10 bg-black/20 text-white focus:border-primary">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary/20 text-white">
                        <SelectItem value="2quartos">2 Quartos</SelectItem>
                        <SelectItem value="3quartos">3 Quartos</SelectItem>
                        <SelectItem value="cobertura">Cobertura</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Entrada ou FGTS</label>
                    <Select value={formData.downPayment} onValueChange={(value) => setFormData({ ...formData, downPayment: value })}>
                      <SelectTrigger className="h-12 rounded-xl border-2 border-primary/10 bg-black/20 text-white focus:border-primary">
                        <SelectValue placeholder="Selecione..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-primary/20 text-white">
                        <SelectItem value="25k">Até 25 mil</SelectItem>
                        <SelectItem value="50k">Até 50 mil</SelectItem>
                        <SelectItem value="100k">Até 100 mil</SelectItem>
                        <SelectItem value="mais100k">Mais de 100 mil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="pt-2">
                  <p className="text-[10px] leading-relaxed text-white/40">
                    Ao enviar, você concorda com nossa{" "}
                    <button
                      type="button"
                      onClick={() => setIsPolicyModalOpen(true)}
                      className="font-semibold text-primary underline hover:opacity-80"
                    >
                      Política de Privacidade
                    </button>{" "}
                    e está ciente de que seus dados de contato serão compartilhados com os consultores Davyd Duarte e Renato Landim para fins de atendimento personalizado.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-14 rounded-full bg-primary font-extrabold text-black transition-all hover:opacity-90 shadow-[0_0_15px_rgba(197,160,89,0.3)]"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar informações direto com consultor"}
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
