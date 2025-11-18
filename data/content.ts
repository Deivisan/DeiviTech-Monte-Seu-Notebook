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
  budget?: string;
};

export type ServiceSnapshot = {
  title: string;
  description: string;
  checklist: string[];
};

export const highlightCards: HighlightCard[] = [
  {
    title: "Sistemas Revisados",
    description: "Windows 11 com IA ou Linux otimizado, sempre testado para performance.",
    accent: "Qualidade garantida",
    metric: "Revisados por técnico",
  },
  {
    title: "Tela e IA Integrada",
    description: "Telas amplas para multitarefas e IA de navegador, ideal para produtividade.",
    accent: "Tecnologia atual",
    metric: "144Hz+ suporte",
  },
  {
    title: "Estoque Futuro",
    description: "Lógica pronta para notebooks prontos e peças customizáveis.",
    accent: "Escalável",
    metric: "Próximas adições",
  },
  {
    title: "Engenharia de Precisão",
    description: "Montagem especializada com foco em durabilidade e performance máxima.",
    accent: "Construído para durar",
    metric: "Garantia estendida",
  },
];

export const pipelineSteps: PipelineStep[] = [
  {
    badge: "01",
    title: "Defina seu perfil",
    description: "Trabalho, escola ou jogos — notebooks revisados para seu uso.",
    detail: "Personalização completa",
  },
  {
    badge: "02",
    title: "Configure peças",
    description: "Selecione componentes compatíveis para montagem personalizada.",
    detail: "Compatibilidade garantida",
  },
  {
    badge: "03",
    title: "Revise e finalize",
    description: "Verifique upgrades e feche negócio com suporte técnico.",
    detail: "Negócio seguro",
  },
  {
    badge: "04",
    title: "Receba suporte",
    description: "Entrega com garantia e assistência técnica contínua.",
    detail: "Apoio pós-venda",
  },
];

export const personaCards: PersonaCard[] = [
  {
    title: "Trabalho Remoto",
    tagline: "Notebooks para produtividade com IA integrada e tela ampla.",
    highlights: ["Windows 11 com IA", "Bateria longa", "SSD rápido"],
  },
  {
    title: "Escola Online",
    tagline: "Equipamentos para aulas virtuais e ferramentas educacionais.",
    highlights: ["Webcam HD", "Leve e portátil", "Suporte a IA"],
  },
  {
    title: "Jogos e Entretenimento",
    tagline: "Sistemas com RTX para jogos imersivos e performance.",
    highlights: ["GPU dedicada", "Refrigeração eficiente", "Tela 144Hz"],
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
