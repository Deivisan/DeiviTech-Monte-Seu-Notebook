# Fluxos de WhatsApp identificados

## Cenários atuais

1. **Resumo do configurador**
   - Usuário finaliza seleção.
   - Botão "Finalizar Pedido" abre modal → gera texto com lista de componentes, serviços e valor total.
   - Link `https://wa.me/55...` com query `?text=` dispara conversa.

2. **Notebooks prontos**
   - Cada card possui CTA "Quero este" → dispara mensagem com nome do modelo + specs resumidos.

3. **Trade-in**
   - Formulário pergunta marca/modelo, estado, upgrades e expectativa.
   - Gera parágrafo explicando intenção e valor estimado (não há cálculo real).

4. **Serviços**
   - Checkboxes adicionam IDs à lista; botão gera mensagem "Quero agendar ...".

5. **Orçamento específico**
   - Campos livres (profissão, orçamento máximo, urgência). Mensagem vira briefing completo no WhatsApp.

## Problemas detectados

- Mensagens longas com pouca formatação (difícil leitura no celular).
- Faltam emojis e tags visuais que reforcem a identidade.
- Sem controle de idioma/personalização → tudo em português informal.
- URL de WhatsApp replicada em múltiplos arquivos.

## Requisitos para a nova versão

1. **Gerador centralizado** (`lib/whatsapp.ts`) com funções:
   - `buildConfiguratorMessage(state: ConfigState)`
   - `buildReadyNotebookMessage(notebookId)`
   - `buildServiceMessage(servicesSelected)`
   - `buildTradeInMessage(formData)`
2. **Templates** com quebra de linha `\n`, bullets `•`, divisores `———` e uso de emojis da DeiviTech (⚙️, 💡, 🚀 etc.).
3. **CTA componentizado** (`<WhatsAppCTA intent="configurator" payload={...} />`).
4. **Parametrização**: permitir alterar número e saudação via `.env` (`NEXT_PUBLIC_WHATSAPP_NUMBER`).
5. **Fallback**: se navegador bloquear window.open, copiar mensagem para clipboard + mostrar toast.
