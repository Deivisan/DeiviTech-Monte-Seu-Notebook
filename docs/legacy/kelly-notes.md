# Kelly — Assistente IA (Legado)

## Papel Original

- Página `ai-integration.html` mostra Kelly como guia para configurações otimizadas em IA.
- Atua como consultora: pergunta caso de uso, frameworks favoritos, tamanho de dataset, VRAM necessária.
- Exibe recomendações de hardware estáticas + cards de "AI Starter", "ML Professional", "AI Workstation".

## Limitações Atuais

- Não existe motor de IA real: apenas textos informativos.
- Não há contexto compartilhado com outras páginas.
- Não personaliza WhatsApp nem salva histórico de conversa.
- A UI é pesada (muitos elementos, mesma densidade das outras seções) → difícil usar em mobile.

## Expectativa para a Nova Versão

- Kelly deve ser "multi conectada": enxergar configurações, serviços, estoque e FAQs.
- Chat reativo embutido no layout, com respostas curtas e CTA rápidos.
- Estrutura pronta para integrar API externa (OpenRouter, Gemini, etc.) mas com fallback local.
- Opção de "Enviar para WhatsApp" a partir da sugestão da Kelly.
- Capacidade de contextualizar perfil do usuário (gaming, dev, estudante, IA, manutenção, trade-in).

## Requisitos Técnicos

1. **Widget React client-side** com estado isolado e persistência opcional `localStorage`.
2. **Adaptadores**: `mock` (dados locais) e `remote` (POST para endpoint configurável via `NEXT_PUBLIC_KELLY_ENDPOINT`).
3. **Mensagens**: incluir tags internas (`[configurator]`, `[services]`, `[trade-in]`) para que o front destaque ações.
4. **Fallback**: se não houver endpoint configurado, usar heurísticas baseadas em dados estáticos.
5. **Acessibilidade**: suportar teclado, ARIA roles e anúncio de novas mensagens.
