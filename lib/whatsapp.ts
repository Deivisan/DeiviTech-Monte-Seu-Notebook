type WhatsAppIntent = "configurator" | "services" | "tradein" | "kelly";

const DEFAULT_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5575981231019";

export type TemplatePayload = {
  summary?: string;
  profile?: string;
  budget?: string;
  extras?: string[];
};

const templates: Record<WhatsAppIntent, (payload?: TemplatePayload) => string> = {
  configurator: (payload) =>
    [
      "🚀 *Quero montar meu notebook DeiviTech!*",
      payload?.summary ?? "Preciso de ajuda para definir CPU, RAM, storage e GPU.",
      payload?.profile ? `• Perfil de uso: ${payload.profile}` : undefined,
      payload?.budget ? `• Orçamento ideal: ${payload.budget}` : undefined,
      "Pode me guiar com o configurador assistido?",
    ]
      .filter(Boolean)
      .join("\n"),
  services: (payload) =>
    [
      "🧰 *Serviços e upgrades DeiviTech*",
      payload?.summary ?? "Quero agendar formatação/upgrade/limpeza.",
      payload?.extras?.length
        ? `• Itens: ${payload.extras.map((item) => item.trim()).join(", ")}`
        : undefined,
      payload?.budget ? `• Faixa de investimento: ${payload.budget}` : undefined,
      "Disponibilidade para atendimento?",
    ]
      .filter(Boolean)
      .join("\n"),
  tradein: (payload) =>
    [
      "♻️ *Avaliação de notebook usado*",
      payload?.summary ?? "Tenho um notebook para trade-in.",
      payload?.extras?.length ? `• Estado: ${payload.extras.join(" / ")}` : undefined,
      "Pode me enviar os próximos passos?",
    ]
      .filter(Boolean)
      .join("\n"),
  kelly: (payload) =>
    [
      "🤖 *Kelly me indicou esta configuração*",
      payload?.summary ?? "Recebi recomendações e quero validar com você.",
      payload?.profile ? `• Perfil: ${payload.profile}` : undefined,
      payload?.extras?.length ? `• Destaques: ${payload.extras.join(" | ")}` : undefined,
      "Seguimos com orçamento final?",
    ]
      .filter(Boolean)
      .join("\n"),
};

export const buildWhatsAppLink = (
  intent: WhatsAppIntent,
  payload?: TemplatePayload,
) => {
  const sanitizedNumber = DEFAULT_NUMBER.replace(/[^\d]/g, "");
  const message = templates[intent](payload);
  return `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;
};