# Diretrizes de UX extraídas do Legado

## Linguagem Visual

- Gradientes azul/verde/amarelo com textura tech/partículas.
- Fonte primária **Inter**, acentos com **Orbitron** em títulos.
- Uso extensivo de ícones Font Awesome (hardware, serviços, pagamentos).
- Cards com borda arredondada, sombras suaves e animação `translateY` ao entrar em viewport.
- Modo escuro alternável adiciona tons azul-marinho + verde neon.

## Tonalidade & Mensagem

- Narrativa "laboratório/consultoria" — explica tudo com voz amigável.
- Muitos tooltips, alertas e mensagens de validação emoji-friendly.
- Foco em educação: cada componente traz descrição básica + avançada.

## Estrutura de Conteúdo

1. **Hero** com CTA duplo: "Experimentar configurador" + "Falar no WhatsApp".
2. **Seções temáticas** (Conceito, Configurar, Notebooks Prontos, Trade-In, Serviços, IA, FAQ).
3. **Resumo de preços** sticky no desktop.
4. **Formulários** com selects e checkboxes customizados.
5. **Modais** para confirmação e resumo do pedido.

## Ganchos de Conversão

- Botões "Gerar orçamento no WhatsApp" presentes em quase todas as páginas.
- Cards de serviços exibem `basePrice` + detalhamento collapsible.
- Seção de pagamento lista bandeiras (Visa, Master, Elo, etc.).
- Depoimentos/FAQ ainda não implementados, mas existe placeholder.

## Problemas de UX atuais

- Abas horizontais com overflow em telas pequenas (sem carrossel).
- Falta de breadcrumbs ou rota real (cada HTML é isolado).
- Estados de carregamento inexistentes; lista "pisca" ao trocar modo.
- Conteúdo muito denso na vertical; difícil localizar seções específicas.

## Oportunidades para a Versão Next.js

- Utilizar **App Router** para rotas estáticas (`/`, `/configurator`, `/ready-made`, `/services`, `/trade-in`, `/ai`...).
- Criar **components** reutilizáveis: `SectionHeading`, `InfoCard`, `SpecGrid`, `WhatsAppCTA`.
- Adicionar **tabs responsivas** com scroll-snap e ícones.
- Implementar **motion leve** (Framer Motion ou CSS) + Intersection Observer via hook.
- Preparar **estados vazios** com placeholders e mensagens claras.
- Centralizar CTA de WhatsApp com texto dinâmico (tipo de contato + resumo curto).
