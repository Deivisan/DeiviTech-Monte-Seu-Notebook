# Tech Debt Mapeado

## Arquitetura

- **Páginas duplicadas:** cada HTML contém todo o CSS + JS inline.
- **Sem bundler:** dependências carregadas via CDN, impossibilitando tree-shaking ou versões fixas.
- **Estado global improvisado:** objetos mutáveis expostos no `window`.
- **Ausência de módulos:** tudo no mesmo arquivo dificulta reaproveitamento.

## Performance

- CSS bloqueando renderização; nenhum `preload`/`preconnect` bem configurado.
- Chart.js e Font Awesome carregados em toda página, mesmo sem uso.
- Observers e intervals nunca são limpos → risco de vazamento.
- Nenhum debounce/throttle em listeners pesados fora os poucos `setTimeout`.

## Segurança

- Uso intenso de `innerHTML` com strings vindas de objetos sem sanitização.
- Nenhum Content Security Policy — perigoso para futura integração com APIs.
- Formulários não validam entrada antes de montar mensagem para WhatsApp.

## Manutenibilidade

- Dificuldade de localizar estilos específicos; variáveis replicadas com nomes diferentes.
- Lógica de preço/validação misturada com manipulação do DOM.
- Dados hardcoded nas páginas; alterar uma GPU exige sincronizar múltiplos arquivos.

## Requisitos para a Reescrita

1. **Separar dados de apresentação** (pasta `data/` em TS).
2. **Criar camada de domínio** (`lib/pricing`, `lib/validation`).
3. **Componentização** com React + Tailwind.
4. **Testes unitários** para validações e cálculo de preço.
5. **Configuração para static export** (Next 15 `output: 'export'`).
6. **Infra mínima de lint/test/build** (ESLint, Prettier, Vitest ou Jest dependendo da escolha).
