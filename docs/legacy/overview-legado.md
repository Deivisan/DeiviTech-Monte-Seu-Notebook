# Overview do Legado DeiviTech

## Estrutura de Páginas

| Página | Objetivo | Observações |
| --- | --- | --- |
| `index.html` | Landing principal com cards e call-to-action | Híbrido entre manifesto da marca e painéis interativos |
| `configure.html` | Configurador completo (componentes, presets, resumo de preços) | Compartilha 100% da lógica com `script.js` |
| `ready.html` | Catálogo de notebooks prontos | Cards estáticos com placehold.it |
| `tradein.html` | Simulador de trade-in | Calcula crédito estimado e gera texto para WhatsApp |
| `services.html` | Lista de serviços (formatação, upgrades etc.) | Checkbox para adicionar serviços ao pedido |
| `specific-budget.html` | Formulário aberto para orçamentos sob demanda | Exporta resumo textual para WhatsApp |
| `ai-integration.html` | Página "Kelly" (IA) conceitual | Inputs de caso de uso mas sem back-end |
| `concept.html` & `info-projeto.html` | Conteúdo institucional | Explicam o manifesto DeiviTech |

## Assets Relevantes

- `script.js`: Mega arquivo com dados, lógica de preços, validação e persistência.
- `styles.css` + `style.css`: Mistura de Tailwind (CDN) com CSS custom; forte dependência de variáveis CSS.
- `shared.js`: Responsável por carregar header/footer e alguns utilitários.
- `assets/css/styles.css`: Versão alternativa do tema (mais recente) mas não integrada a todas as páginas.

## Fluxos Críticos

1. **Seleção de componentes** → Atualiza `selectedComponents`, roda validação e recalcula preços.
2. **Presets** → Ajustam múltiplos componentes de uma vez e forçam modo básico/avançado.
3. **Serviços + Software** → Arrays separados que refletem no preço final.
4. **Trade-in** → Apenas desconto numérico; usuário preenche manualmente.
5. **WhatsApp CTA** → Monta mensagem com encoding básico e abre `wa.me`.

## Pontos Fortes

- Narrativa educativa forte: explica cada peça e oferece dicas contextuais.
- Validador de compatibilidade razoável para uso front-end.
- Autosave no navegador evita perder configurações.
- Uso pesado de ícones e animações dá sensação "premium experimental".

## Pontos Fracos

- Sem componentização → qualquer ajuste exige editar múltiplos HTMLs redundantes.
- Código difícil de testar/automatizar (JS global + manipulação direta do DOM).
- Performance prejudicada por CSS inline, múltiplos fetch sincronizados e ausência de bundler.
- Experiência mobile inconsistente (cards gigantes, scrolls horizontais desconhecidos).

## Decisões para a Nova Fase

1. **Source of Truth em TypeScript** com modelos para componentes, serviços, presets, perguntas frequentes etc.
2. **Next.js (App Router)** para compartilhar layout, SEO e roteamento SPA + export estático.
3. **Design System** leve (Tailwind + tokens) inspirado no repositório "DeiviTech formatação".
4. **Kelly Assist** como componente React reutilizável, pronto para plugar API futura.
5. **Integração WhatsApp** centralizada, gerando mensagens padronizadas a partir do estado do configurador.
6. **Documentação** contínua para facilitar o hand-off futuro (estoque real, dados externos, IA conectada).
