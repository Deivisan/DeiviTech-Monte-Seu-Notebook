# 00 — Contexto Histórico do Projeto

## Identidade & Propósito

- **Marca:** DeiviTech — Monte Seu Notebook Personalizado.
- **Owner:** Deivison Santana (Deivisan).
- **Canal atual:** GitHub Pages totalmente estático.
- **Missão:** Permitir que clientes montem notebooks sob demanda, entendendo o impacto real de cada componente no preço, desempenho e disponibilidade.
- **Contato oficial:** WhatsApp [`https://wa.me/5575981231019`](https://wa.me/5575981231019) — não há checkout integrado.

## Fluxo Geral Atual (Legado)

1. Usuário acessa uma das páginas HTML independentes (concept, configure, ready, etc.).
2. Cada página replica cabeçalho/rodapé via `fetch` de `header.html`/`footer.html`.
3. A lógica central mora em `script.js` (~2000 linhas) que controla dados, cálculos, presets e serviços.
4. Tudo roda no browser: cálculo de preço, validação de compatibilidade, modo IA, trade-in e persistência local.

## Informações Essenciais

- **Catálogo de componentes:** Plataformas, carcaças, placas-mãe, CPUs, RAM, storage SATA/NVMe, GPUs, telas, teclados, sistemas operacionais, baterias e periféricos.
- **Serviços oferecidos:** Instalação de sistemas, upgrades, limpeza/pasta térmica, backup, consultoria e teste IPTV.
- **Notebooks prontos:** OfficeStart, StudentPlus, DevMaster, GamerBlast, Air Copilot+ (conceitual) e outros.
- **Presets:** Econômico, Balanceado e Performance (definem baseline da UX assistida).
- **Validações:** Socket CPU x placa-mãe, tipo de RAM, limite de slots NVMe, consumo estimado e alertas PCIe.
- **Persistência:** localStorage com autosave a cada 30 segundos e botões salvar/carregar/limpar.
- **Modo IA legado:** Formulários e cards estáticos descrevendo casos de uso; sem IA real.

## Principais Dores

- HTML duplicado em muitas páginas, causando manutenção dolorosa.
- CSS inline gigante (1000+ linhas por arquivo) e sem qualquer pipeline de build.
- JS monolítico, global e sem tipagem; difícil de testar ou escalar.
- Falta de testes, lint, bundler, minificação ou code splitting.
- Impossível integrar IA real, estoque externo ou analytics mantendo o formato atual.

## Direção Desejada

- Migrar para **Next.js + TypeScript + Tailwind**, exportável para GitHub Pages.
- Reimaginar "Kelly" como assistente conectada a todo o site.
- Deixar estrutura pronta para receber estoque e catálogos dinâmicos (dados externos futuramente).
- Visual inspirado no repositório “DeiviTech formatação”: tech premium + disruptividade controlada.
- Incluir chat de IA para recomendações rápidas antes do contato humano.
- Centralizar contato em WhatsApp com mensagens pré-formatadas.
