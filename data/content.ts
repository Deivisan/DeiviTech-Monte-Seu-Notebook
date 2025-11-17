export type HighlightCard = {
  title: string;
  description: string;
  accent: string;
  metric: string;
};

export type PipelineStep = {
  badge: string;
  title: string;
  description: string;
  detail: string;
};

export type PersonaCard = {
  title: string;
  tagline: string;
  highlights: string[];
  budget: string;
};

export type ServiceSnapshot = {
  title: string;
  description: string;
  checklist: string[];
};

export const highlightCards: HighlightCard[] = [
  {
    title: "Configuração Modular Inteligente",
    description:
      "Monte notebooks peça a peça com validações automáticas de compatibilidade, presets guiados e estimativas em tempo real.",
    accent: "Assistido, básico ou avançado",
    metric: "+120 combinações mapeadas",
  },
  {
    title: "Sistemas Otimizados",
    description:
      "Integrações futuras para recomendações inteligentes, compatibilidade com ferramentas avançadas e perfis otimizados como Ghost Spectre ou Arch Linux.",
    accent: "Engenharia avançada",
    metric: "Inspirado em DeiviTech Formatação",
  },
  {
    title: "Fluxos WhatsApp unificados",
    description:
      "Mensagens formatadas com emojis e bullets para pedidos, serviços, trade-in e orçamentos específicos.",
    accent: "Templates centralizados em lib/whatsapp",
    metric: "5 estratégias de contato",
  },
  {
    title: "Pronto para estoque futuro",
    description:
      "Dados tipados em TypeScript, camada de domínio separada e espaço reservado para integrações de inventário.",
    accent: "Next.js + Tailwind + TS",
    metric: "Deploy estático no GitHub Pages",
  },
];

export const pipelineSteps: PipelineStep[] = [
  {
    badge: "01",
    title: "Explorar necessidades",
    description:
      "Mapeamos perfis como gamer, criativo, dev, IA ou manutenção a partir de perguntas rápidas ou presets.",
    detail: "Documentado em docs/legacy/dados-componentes",
  },
  {
    badge: "02",
    title: "Configurar com contexto",
    description:
      "Componentes, serviços e notebooks prontos compartilham mesma base de dados e regras de compatibilidade.",
    detail: "Resumos dinâmicos + estimativa de performance",
  },
  {
    badge: "03",
    title: "Otimizar com engenharia",
    description:
      "Sugestões inteligentes baseadas em perfis, como Ghost Spectre para gaming ou Arch Linux para devs.",
    detail: "Inspirado em DeiviTech Formatação",
  },
  {
    badge: "04",
    title: "Fechar pelo WhatsApp",
    description:
      "Templates aplicam tags, emojis e bullets para facilitar leitura e acelerar conversão direto com DeiviTech.",
    detail: "Número configurável via NEXT_PUBLIC_WHATSAPP_NUMBER",
  },
];

export const personaCards: PersonaCard[] = [
  {
    title: "Gamers & Streamers",
    tagline: "Sistema Ghost Spectre otimizado para gaming máximo, baixa latência e performance.",
    highlights: ["RTX série 40", "Refrigeração premium", "Perfis de energia customizados"],
    budget: "R$ 8k — 18k",
  },
  {
    title: "Criadores & Devs",
    tagline: "Arch Linux ou dual boot para desenvolvimento, com Ryzen + NVMe Gen4.",
    highlights: ["32 GB DDR5", "Linux + Windows", "Containers e compilações rápidas"],
    budget: "R$ 6k — 12k",
  },
  {
    title: "IA & Dados",
    tagline: "Workstations móveis com VRAM dedicada para processamento avançado e treinamentos.",
    highlights: ["NPU/GPU otimizada", "Modelos pré-carregados", "Backup e consultoria"],
    budget: "Sob consulta",
  },
];

export const serviceSnapshots: ServiceSnapshot[] = [
  {
    title: "Serviços DeiviTech",
    description:
      "Formatação premium, upgrades, limpeza térmica e consultorias com relatório técnico para cada atendimento.",
    checklist: [
      "Instalação Windows/Linux com perfis",
      "Upgrades de RAM, SSD e Wi-Fi",
      "Limpeza interna + pasta térmica",
      "Backup e diagnóstico avançado",
    ],
  },
  {
    title: "Trade-in inteligente",
    description:
      "Transforme seu notebook usado em crédito com avaliação guiada e upload de relatório DxDiag ou CPU-Z.",
    checklist: [
      "Condição, idade e specs",
      "Upload opcional de relatório",
      "Crédito estimado até 50%",
      "Mensagem personalizada no WhatsApp",
    ],
  },
];
