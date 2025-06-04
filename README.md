# DeiviTech: Monte Seu Notebook Personalizado

Este projeto é um configurador interativo de notebooks, permitindo que os usuários selecionem diversos componentes (carcaça, placa-mãe, CPU, RAM, armazenamento, GPU, tela, teclado, bateria e periféricos) e vejam o preço total atualizado em tempo real. Ele também inclui uma funcionalidade de estimativa de valor de troca para notebooks usados.

---

## 🚀 Funcionalidades

- **Configuração Modular:** Escolha entre uma variedade de componentes para montar o notebook ideal.
- **Preço em Tempo Real:** O valor total é atualizado dinamicamente a cada seleção.
- **Modos de Configuração:** Alterna entre "Modo Básico" (opções simplificadas) e "Modo Avançado" (todas as opções e detalhes técnicos).
- **Validação de Compatibilidade:** A interface filtra opções incompatíveis com as seleções atuais (ex: tipo de RAM compatível com a placa-mãe, socket da CPU).
- **Controle de Estoque:** Exibe o estoque disponível para cada componente e desabilita opções esgotadas.
- **Estimativa de Troca:** Calcule um valor estimado para o seu notebook usado com base na condição, idade e especificações.
- **Upload de Relatório:** Envie um relatório de sistema (`.txt`, `.html`, `.json`) para uma avaliação de troca mais precisa.
- **Resumo do Pedido:** Uma seção de resumo exibe todas as suas escolhas e o total final.
- **Animações de Scroll:** Seções que aparecem com um efeito de fade-in ao rolar a página.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura base da página.
- **CSS3 (Tailwind CSS):** Estilização e responsividade da interface.
- **JavaScript (Vanilla JS):** Lógica de configuração, cálculo de preços, validação e interatividade.
- **Google Fonts (Inter):** Tipografia moderna e legível.

---

## ⚙️ Como Rodar o Projeto

Este projeto é um arquivo HTML estático e pode ser executado diretamente no navegador.

1. **Clone o Repositório (se aplicável):**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd deivitech-notebook-configurator
    ```

2. **Abra o Arquivo:**
    Simplesmente abra o arquivo `index.html` no seu navegador preferido.

    ```bash
    # Exemplo no Linux/macOS
    open index.html

    # Exemplo no Windows
    start index.html
    ```

---

## 📂 Estrutura do Projeto

```
/
├── index.html         # Página principal do configurador
├── README.md          # Este arquivo de documentação
└── (outros arquivos de suporte, se necessário)
```

---

## 📊 Gráficos e Visualizações

O projeto pode ser facilmente adaptado para incluir gráficos de comparação de preços, desempenho ou estatísticas de escolha dos usuários utilizando bibliotecas como [Chart.js](https://www.chartjs.org/) ou [Google Charts](https://developers.google.com/chart).  
Basta adicionar o script da biblioteca desejada e criar um `<canvas>` ou `<div>` para exibir os gráficos, alimentando-os com os dados das escolhas feitas no configurador.

---

Desenvolvido por DeiviTech.
