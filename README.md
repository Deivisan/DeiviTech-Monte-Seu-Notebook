# README.md

## DeiviTech - Monte Seu Notebook Personalizado

Este projeto é um configurador de notebooks profissionais, onde o usuário pode montar seu notebook escolhendo cada componente, visualizar o preço em tempo real e até simular a troca de um notebook usado.

### Lógica do Site

- **Componentes Dinâmicos:** Todas as opções de carcaça, placa-mãe, CPU, RAM, armazenamento, GPU, tela, teclado, bateria e periféricos são carregadas dinamicamente a partir de arrays JavaScript.
- **Compatibilidade:** O sistema filtra automaticamente as opções compatíveis (ex: só mostra CPUs compatíveis com a placa-mãe escolhida, RAM do tipo correto, limita quantidade de slots, etc).
- **Estoque:** Cada opção tem um estoque simulado. Opções sem estoque aparecem desabilitadas.
- **Modo Básico/Avançado:** O usuário pode alternar entre modos para ver opções mais simples ou avançadas.
- **Resumo em Tempo Real:** O resumo do pedido é atualizado automaticamente conforme as escolhas, mostrando todos os itens e o preço total.
- **Simulação de Troca:** O usuário pode simular o valor de troca do seu notebook antigo, preenchendo informações ou enviando um relatório do sistema.
- **Finalização:** Ao finalizar o pedido, um modal mostra o resumo completo e o valor total.

### Como usar

1. Abra o arquivo `index.html` em seu navegador.
2. Escolha cada componente do notebook.
3. Veja o preço total atualizado automaticamente.
4. Simule o valor de troca do seu notebook antigo (opcional).
5. Clique em "Finalizar Pedido" para ver o resumo.

### Adaptação

- Para adicionar/remover modelos, edite os arrays no JavaScript.
- O site é totalmente estático, não requer backend.

---

Desenvolvido por DeiviTech.
