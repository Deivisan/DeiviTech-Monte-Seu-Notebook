# DeiviTech • Configurador Inteligente ⚙️🚀

Next.js + TypeScript + Tailwind para reconstruir todo o ecossistema da DeiviTech com foco em IA, WhatsApp e GitHub Pages.

## 🌌 Visão Geral

- **Objetivo** → entregar um site único, estático e exportável, que sirva como hub para configurador, serviços, trade-in e Kelly (assistente IA).
- **Legado preservado** → toda a documentação antiga vive agora em [`docs/legacy`](docs/legacy) — inclusive o README original.
- **Stack nova** → App Router, componentes React reutilizáveis, dados tipados em `data/`, utilitários em `lib/` e mensagens centralizadas para WhatsApp.

## ✨ Destaques do MVP atual

- Seções hero, highlights, jornada do configurador e snapshots de serviços com texto real baseado nos documentos legados.
- Componente de chat “Kelly” já pronto para receber integrações externas via `NEXT_PUBLIC_KELLY_ENDPOINT`.
- Funções reutilizáveis em `lib/whatsapp.ts` para gerar links com templates específicos (`configurator`, `services`, `tradein`, `kelly`).
- CSS global renovado com grid cósmico, painéis glassmorphism e tokens de cor centralizados em CSS custom properties.

## 🧱 Stack Técnica

- **Framework:** Next.js 16 (App Router) com `output: "export"` → pronto para GitHub Pages.
- **Linguagem:** TypeScript estrito.
- **Estilos:** Tailwind CSS v4 + utilitários customizados em `globals.css`.
- **Lint:** ESLint `core-web-vitals` + `typescript` (Scrape/temp ignorados).
- **Gerador de mensagens:** `lib/whatsapp.ts` com número configurável.

## 📁 Estrutura Rápida

```text
├── app/
│   ├── layout.tsx          # Metadados + fontes + tema global
│   ├── page.tsx            # Landing page com todas as seções atuais
│   └── globals.css         # Estilos base + tokens de cor
├── data/content.ts         # Arrays tipados para highlights, pipeline, personas e serviços
├── lib/whatsapp.ts         # Builder reutilizável para CTAs do WhatsApp
├── docs/legacy/            # Documentação completa do sistema anterior (contexto, tech debt etc.)
├── .env                    # Variáveis públicas (WhatsApp e endpoint Kelly)
└── ...
```

## ⚙️ Setup & Scripts

```bash
npm install         # instala dependências
npm run dev         # ambiente de desenvolvimento (http://localhost:3000)
npm run lint        # ESLint (Scrape/ e temp/ ignorados por padrão)
npm run build       # gera saída estática (next export)
```

> ⚠️ Para deploy estático, rode `npm run build` e publique o conteúdo de `out/` no GitHub Pages (já suportado pelo repo).

## 🔐 Variáveis de Ambiente

Arquivo `.env` (já versionado com placeholders conforme instruções):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5575981231019
NEXT_PUBLIC_KELLY_ENDPOINT=
```

## 🗺️ Próximos Passos Sugeridos

- [ ] Implementar o configurador em React com dados vindos de `data/` e camada de domínio em `lib/`.
- [ ] Criar componente real da Kelly com estado cliente (ex.: Zustand) e fallback local.
- [ ] Adicionar testes unitários para funções críticas (`whatsapp`, futuras regras de compatibilidade).
- [ ] Conectar ações do site com fluxo de deploy automático (GitHub Actions → Pages).

---

Feito com 💻 por DeiviTech. Qualquer dúvida, abra uma issue ou fale direto pelo botão de WhatsApp no site! 💬
