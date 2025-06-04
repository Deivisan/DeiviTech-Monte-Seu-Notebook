<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeiviTech: Monte Seu Notebook Profissional</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Custom CSS Variables for Professional Theme */
        :root {
            --color-bg-dark: #0A0A0A; /* Deep almost-black */
            --color-text-light: #E0E0E0; /* Off-white for readability */
            --color-primary-blue: #007BFF; /* Vibrant Blue */
            --color-accent-red: #DC3545; /* Alert/Accent Red */
            --color-card-bg: #1C1C1C; /* Slightly lighter dark for cards */
            --color-border-subtle: #333333; /* Subtle border for separation */
            --color-button-bg-hover: #0056B3; /* Darker blue on hover */
            --color-selected-bg: #0056B3; /* Darker blue for selected items */
            --color-selected-border: #007BFF; /* Primary blue for selected border */
            --color-disabled-text: #6C757D; /* Muted gray for disabled text */
            --color-success-green: #28A745; /* Standard success green */
            --color-summary-bg: #2C2C2C; /* Slightly lighter than card for summary */
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--color-bg-dark);
            color: var(--color-text-light);
            scroll-behavior: smooth;
        }
        h1, h2 {
            font-family: 'Inter', sans-serif;
            color: var(--color-primary-blue);
        }
        .card {
            background-color: var(--color-card-bg);
            border-radius: 0.75rem;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5); /* Deeper shadow */
            padding: 1.5rem;
            border: 1px solid var(--color-border-subtle);
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.5s ease-out;
            opacity: 0;
            transform: translateY(20px);
        }
        .card.in-view {
            opacity: 1;
            transform: translateY(0);
        }
        .option-item {
            display: flex;
            align-items: center;
            padding: 0.75rem;
            border-radius: 0.5rem;
            border: 1px solid var(--color-border-subtle);
            margin-bottom: 0.5rem;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
        }
        .option-item:hover {
            background-color: #2A2A2A;
            border-color: var(--color-primary-blue);
        }
        .option-item.selected {
            background-color: var(--color-selected-bg);
            border-color: var(--color-selected-border);
            box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
        }
        .option-item.disabled {
            opacity: 0.6; /* More visible disabled state */
            cursor: not-allowed;
            background-color: #1A1A1A;
            border-color: #2A2A2A;
        }
        .option-item.disabled:hover {
            background-color: #1A1A1A;
            border-color: #2A2A2A;
        }
        input[type="radio"]:checked + .option-content {
            font-weight: 600;
            color: var(--color-text-light);
        }
        .sticky-summary {
            position: sticky;
            top: 1rem;
            z-index: 10;
        }
        @media (max-width: 1023px) {
            .sticky-summary {
                position: relative;
                top: 0;
                margin-bottom: 2rem;
            }
        }
        .modal {
            display: none;
            position: fixed;
            z-index: 100;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto;
            background-color: rgba(0,0,0,0.85); /* Darker overlay */
            backdrop-filter: blur(6px);
            justify-content: center;
            align-items: center;
        }
        .modal-content {
            background-color: var(--color-card-bg);
            margin: auto;
            padding: 2rem;
            border: 1px solid var(--color-selected-border);
            border-radius: 0.75rem;
            width: 80%;
            max-width: 600px;
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.6);
            color: var(--color-text-light);
        }
        .close-button {
            color: var(--color-accent-red);
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        .close-button:hover,
        .close-button:focus {
            color: #FF0000;
            text-decoration: none;
            cursor: pointer;
        }
        .mode-toggle-btn {
            background-color: #333333;
            color: var(--color-text-light);
            transition: background-color 0.2s ease-in-out;
            border: 1px solid var(--color-border-subtle);
        }
        .mode-toggle-btn.active {
            background-color: var(--color-primary-blue);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(0, 123, 255, 0.4);
        }
        .summary-item-price {
            color: var(--color-primary-blue);
            font-weight: 500;
        }
        .summary-tradein-price {
            color: var(--color-accent-red);
            font-weight: 500;
        }
    </style>
</head>
<body class="bg-neutral-950">
    <main class="container mx-auto px-4 py-8 md:py-12">
        <header class="text-center mb-12">
            <h1 class="text-4xl md:text-5xl font-bold text-blue-500">DeiviTech: Monte Seu Notebook Personalizado</h1>
            <p class="mt-4 text-lg text-gray-400">Escolha cada componente e veja o preço em tempo real!</p>
            <div class="mt-8 flex justify-center gap-4">
                <button id="basic-mode-btn" class="mode-toggle-btn py-2 px-6 rounded-lg font-semibold active">Modo Básico</button>
                <button id="advanced-mode-btn" class="mode-toggle-btn py-2 px-6 rounded-lg font-semibold">Modo Avançado</button>
            </div>
        </header>

        <div class="lg:grid lg:grid-cols-4 lg:gap-8">
            <div class="lg:col-span-3 space-y-8">
                <!-- Notebook Image -->
                <section class="card flex justify-center items-center p-6">
                    <img id="notebook-image" src="https://placehold.co/400x250/121212/e0e0e0?text=Notebook+DeiviTech" alt="Notebook Personalizado" class="rounded-lg shadow-lg border border-gray-700">
                </section>

                <!-- Carcaça Section -->
                <section id="casing-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">1. Escolha a Carcaça</h2>
                    <div id="casing-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Placa Mãe Section -->
                <section id="motherboard-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">2. Selecione a Placa Mãe</h2>
                    <div id="motherboard-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Processador Section -->
                <section id="cpu-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">3. Selecione o Processador (CPU)</h2>
                    <div id="cpu-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Memória RAM Section -->
                <section id="ram-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">4. Configure a Memória RAM</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label for="ram-type-select" class="block text-sm font-medium text-gray-300 mb-2">Tipo de Módulo RAM:</label>
                            <select id="ram-type-select" class="block w-full p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-200 focus:ring-blue-500 focus:border-blue-500">
                                <!-- Options will be dynamically loaded here -->
                            </select>
                        </div>
                        <div>
                            <label for="ram-quantity-input" class="block text-sm font-medium text-gray-300 mb-2">Quantidade de Módulos:</label>
                            <input type="number" id="ram-quantity-input" value="1" min="1" max="4" class="block w-full p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-200 focus:ring-blue-500 focus:border-blue-500">
                            <p class="text-sm text-gray-400 mt-1">Máximo de <span id="ram-max-modules">4</span> módulos (dependendo da placa-mãe).</p>
                        </div>
                    </div>
                </section>

                <!-- Armazenamento Section 1 -->
                <section id="storage1-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">5. Armazenamento Principal</h2>
                    <div id="storage1-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Armazenamento Section 2 (Optional) -->
                <section id="storage2-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">6. Armazenamento Secundário (Opcional)</h2>
                    <div id="storage2-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="option-item" data-id="none" data-price="0" data-category="storage2">
                            <input type="radio" id="storage2-none" name="storage2" value="none" class="hidden" checked>
                            <label for="storage2-none" class="flex-grow cursor-pointer">
                                <div class="option-content">
                                    <p class="font-medium text-gray-200">Nenhum</p>
                                    <p class="text-sm text-gray-400">Não adicionar armazenamento secundário.</p>
                                    <p class="text-sm text-gray-300 font-semibold">R$ 0,00</p>
                                </div>
                            </label>
                        </div>
                        <!-- Other options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Placa de Vídeo Section -->
                <section id="gpu-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">7. Selecione a Placa de Vídeo (GPU)</h2>
                    <div id="gpu-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Tela Section -->
                <section id="display-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">8. Escolha a Tela</h2>
                    <div id="display-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Teclado Section -->
                <section id="keyboard-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">9. Selecione o Teclado</h2>
                    <div id="keyboard-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Bateria Section -->
                <section id="battery-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">10. Escolha a Bateria</h2>
                    <div id="battery-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Peripherals Section -->
                <section id="peripherals-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-blue-400">11. Adicione Periféricos</h2>
                    <div id="peripherals-options" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <!-- Options will be dynamically loaded here -->
                    </div>
                </section>

                <!-- Trade-in Section -->
                <section id="tradein-section" class="card">
                    <h2 class="text-2xl font-bold mb-6 text-red-400">12. Troque Seu Notebook Usado</h2>
                    <p class="text-gray-300 mb-4">Estime o valor do seu notebook usado para abater no preço final.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <label for="tradein-condition" class="block text-sm font-medium text-gray-300 mb-2">Condição:</label>
                            <select id="tradein-condition" class="block w-full p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-200 focus:ring-red-500 focus:border-red-500">
                                <option value="excellent">Excelente (quase novo)</option>
                                <option value="good">Boa (poucas marcas de uso)</option>
                                <option value="fair">Razoável (desgaste visível)</option>
                                <option value="poor">Ruim (muito desgastado/com defeitos)</option>
                            </select>
                        </div>
                        <div>
                            <label for="tradein-age" class="block text-sm font-medium text-gray-300 mb-2">Idade:</label>
                            <select id="tradein-age" class="block w-full p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-200 focus:ring-red-500 focus:border-red-500">
                                <option value="<1year">Menos de 1 ano</option>
                                <option value="1-3years">1 a 3 anos</option>
                                <option value=">3years">Mais de 3 anos</option>
                            </select>
                        </div>
                        <div class="md:col-span-2">
                            <label for="tradein-specs" class="block text-sm font-medium text-gray-300 mb-2">Especificações Gerais:</label>
                            <select id="tradein-specs" class="block w-full p-3 border border-gray-600 rounded-lg shadow-sm bg-gray-700 text-gray-200 focus:ring-red-500 focus:border-red-500">
                                <option value="high-end">Alto Desempenho (i7/Ryzen 7+, RTX/RX equivalente)</option>
                                <option value="mid-range">Médio Desempenho (i5/Ryzen 5, GTX/RX equivalente)</option>
                                <option value="low-end">Baixo Desempenho (i3/Ryzen 3, GPU integrada)</option>
                            </select>
                        </div>
                    </div>
                    <button id="calculate-tradein" class="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 mb-4">
                        Calcular Valor de Troca
                    </button>
                    <p id="tradein-value-display" class="text-center text-lg font-bold text-red-300">Valor Estimado: R$ 0,00</p>

                    <div class="mt-8 border-t border-gray-700 pt-6">
                        <h3 class="text-xl font-bold text-red-400 mb-4">Envie um Relatório para Avaliação Detalhada</h3>
                        <p class="text-gray-300 mb-4">Para uma precificação mais precisa, envie um relatório de informações do sistema (ex: `dxdiag.txt`, `msinfo32.txt`, ou `lshw.txt` do Linux).</p>
                        <input type="file" id="system-info-file" accept=".txt,.html,.json" class="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100">
                        <button id="upload-info-btn" class="mt-4 w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                            Processar Relatório
                        </button>
                        <p id="file-evaluation-result" class="mt-4 text-center text-md text-red-300"></p>
                    </div>
                </section>
            </div>

            <!-- Summary Section -->
            <div class="lg:col-span-1 mt-8 lg:mt-0">
                <div class="sticky-summary card p-6 bg-gray-800 border-blue-600">
                    <h2 class="text-2xl font-bold mb-4 text-blue-400">Resumo do Pedido</h2>
                    <div id="summary-details" class="text-gray-300 text-sm space-y-2 mb-6">
                        <p><strong>Carcaça:</strong> <span id="summary-casing">N/A</span></p>
                        <p><strong>Placa Mãe:</strong> <span id="summary-motherboard">N/A</span></p>
                        <p><strong>CPU:</strong> <span id="summary-cpu">N/A</span></p>
                        <p><strong>RAM:</strong> <span id="summary-ram">N/A</span></p>
                        <p><strong>Armazenamento 1:</strong> <span id="summary-storage1">N/A</span></p>
                        <p><strong>Armazenamento 2:</strong> <span id="summary-storage2">N/A</span></p>
                        <p><strong>GPU:</strong> <span id="summary-gpu">N/A</span></p>
                        <p><strong>Tela:</strong> <span id="summary-display">N/A</span></p>
                        <p><strong>Teclado:</strong> <span id="summary-keyboard">N/A</span></p>
                        <p><strong>Bateria:</strong> <span id="summary-battery">N/A</span></p>
                        <p><strong>Periféricos:</strong> <span id="summary-peripherals">N/A</span></p>
                        <p class="text-red-300"><strong>Crédito de Troca:</strong> <span id="summary-tradein-credit">R$ 0,00</span></p>
                    </div>
                    <div class="border-t border-blue-600 pt-4 mt-4">
                        <p class="text-xl font-bold text-blue-400">Total: <span id="total-price-display">R$ 0,00</span></p>
                    </div>
                    <button id="order-button" class="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                        Finalizar Pedido
                    </button>
                </div>
            </div>
        </div>

        <footer class="text-center mt-16 text-gray-500 text-sm">
            <p>&copy; 2025 DeiviTech. Todos os direitos reservados. Preços são estimativas.</p>
        </footer>
    </main>

    <!-- Order Confirmation Modal -->
    <div id="order-modal" class="modal">
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <h2 class="text-2xl font-bold text-blue-400 mb-4">Pedido Finalizado com Sucesso!</h2>
            <p class="text-gray-300 mb-4">Seu notebook personalizado DeiviTech foi configurado. Um de nossos especialistas entrará em contato para confirmar os detalhes e finalizar a compra.</p>
            <div id="modal-order-summary" class="bg-gray-800 p-4 rounded-lg border border-gray-700 text-sm text-gray-200">
                <!-- Summary will be injected here -->
            </div>
            <p class="text-lg font-bold text-blue-400 mt-4">Total: <span id="modal-total-price">R$ 0,00</span></p>
            <button class="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200" onclick="document.getElementById('order-modal').style.display='none';">
                Fechar
            </button>
        </div>
    </div>

    <script>
        // Helper to get CSS variable value
        function getCssVar(name) {
            return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
        }

        const components = {
            casing: [
                { id: 'standard-black', name: 'Carcaça Padrão (Preta)', price: 200, description_basic: 'Material durável e leve, acabamento fosco.', description_advanced: 'Carcaça de policarbonato de alta densidade com acabamento anodizado fosco, resistente a arranhões.', image: 'https://placehold.co/400x250/121212/e0e0e0?text=Notebook+Preto', stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'standard-silver', name: 'Carcaça Padrão (Prata)', price: 220, description_basic: 'Material durável e leve, acabamento prateado.', description_advanced: 'Carcaça de policarbonato com revestimento metálico prateado, oferece equilíbrio entre peso e durabilidade.', image: 'https://placehold.co/400x250/a0a0a0/121212?text=Notebook+Prata', stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'premium-aluminum', name: 'Carcaça Premium (Alumínio)', price: 500, description_basic: 'Acabamento sofisticado e maior resistência, design elegante.', description_advanced: 'Chassi unibody em liga de alumínio de grau aeroespacial, oferecendo rigidez estrutural superior e dissipação térmica aprimorada.', image: 'https://placehold.co/400x250/808080/121212?text=Notebook+Aluminio', stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'gaming-aggressive', name: 'Carcaça Gaming (Design Agressivo)', price: 650, description_basic: 'Estilo arrojado com ventilação otimizada e iluminação RGB.', description_advanced: 'Design angular em compósito de fibra de carbono e policarbonato, com zonas de ventilação agressivas e iluminação RGB personalizável (perfil ICC).', image: 'https://placehold.co/400x250/400000/e0e0e0?text=Notebook+Gaming', stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'ultrabook-slim', name: 'Carcaça Ultrabook (Fina)', price: 700, description_basic: 'Design ultrafino e leve, ideal para portabilidade.', description_advanced: 'Construção em liga de magnésio-alumínio, resultando em um perfil de 12mm e peso inferior a 1.2kg, otimizado para portabilidade extrema.', image: 'https://placehold.co/400x250/000040/e0e0e0?text=Notebook+Ultrafino', stock: Math.floor(Math.random() * 10) + 5 }
            ],
            motherboard: [
                { id: 'intel-h610', name: 'Intel H610 (Básico)', price: 300, description_basic: 'Chipset de entrada para CPUs Intel, essencial.', description_advanced: 'Chipset Intel H610, suporte a LGA1700, 2 slots DDR4 SO-DIMM (máx. 32GB), 1x M.2 PCIe Gen3, 2x SATA III, 1x PCIe x16 Gen4.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, cpu_socket: 'LGA1700', ram_type: 'DDR4', ram_slots: 2, nvme_slots: 1, sata_ports: 2, pcie_gen: 'Gen4' },
                { id: 'intel-b760', name: 'Intel B760 (Intermediário)', price: 450, description_basic: 'Chipset balanceado para CPUs Intel, bom para uso geral.', description_advanced: 'Chipset Intel B760, suporte a LGA1700, 2 slots DDR4 SO-DIMM (máx. 64GB), 2x M.2 PCIe Gen4, 4x SATA III, 1x PCIe x16 Gen4.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, cpu_socket: 'LGA1700', ram_type: 'DDR4', ram_slots: 2, nvme_slots: 2, sata_ports: 4, pcie_gen: 'Gen4' },
                { id: 'intel-z790', name: 'Intel Z790 (Avançado)', price: 800, description_basic: 'Chipset high-end para CPUs Intel, overclock e conectividade avançada.', description_advanced: 'Chipset Intel Z790, suporte a LGA1700, 4 slots DDR5 SO-DIMM (máx. 128GB), 3x M.2 PCIe Gen5, 4x SATA III, 1x PCIe x16 Gen5, Thunderbolt 4.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, cpu_socket: 'LGA1700', ram_type: 'DDR5', ram_slots: 4, nvme_slots: 3, sata_ports: 4, pcie_gen: 'Gen5' },
                { id: 'amd-a620', name: 'AMD A620 (Básico)', price: 280, description_basic: 'Chipset de entrada para CPUs AMD, essencial.', description_advanced: 'Chipset AMD A620, suporte a AM5, 2 slots DDR5 SO-DIMM (máx. 32GB), 1x M.2 PCIe Gen4, 2x SATA III, 1x PCIe x16 Gen4.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, cpu_socket: 'AM5', ram_type: 'DDR5', ram_slots: 2, nvme_slots: 1, sata_ports: 2, pcie_gen: 'Gen4' },
                { id: 'amd-b650', name: 'AMD B650 (Intermediário)', price: 420, description_basic: 'Chipset balanceado para CPUs AMD, bom para uso geral.', description_advanced: 'Chipset AMD B650, suporte a AM5, 2 slots DDR5 SO-DIMM (máx. 64GB), 2x M.2 PCIe Gen4, 4x SATA III, 1x PCIe x16 Gen4.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, cpu_socket: 'AM5', ram_type: 'DDR5', ram_slots: 2, nvme_slots: 2, sata_ports: 4, pcie_gen: 'Gen4' },
                { id: 'amd-x670e', name: 'AMD X670E (Avançado)', price: 750, description_basic: 'Chipset high-end para CPUs AMD, múltiplas GPUs e PCIe 5.0.', description_advanced: 'Chipset AMD X670E, suporte a AM5, 4 slots DDR5 SO-DIMM (máx. 128GB), 3x M.2 PCIe Gen5, 4x SATA III, 1x PCIe x16 Gen5, Wi-Fi 6E.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, cpu_socket: 'AM5', ram_type: 'DDR5', ram_slots: 4, nvme_slots: 3, sata_ports: 4, pcie_gen: 'Gen5' },
                { id: 'intel-z790-thunderbolt', name: 'Intel Z790 (Thunderbolt 4)', price: 950, description_basic: 'Chipset Z790 com portas Thunderbolt 4 para alta velocidade.', description_advanced: 'Chipset Intel Z790 com controladora Thunderbolt 4 integrada, oferecendo 40Gbps por porta, ideal para estações de trabalho móveis.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, cpu_socket: 'LGA1700', ram_type: 'DDR5', ram_slots: 4, nvme_slots: 3, sata_ports: 4, pcie_gen: 'Gen5' },
                { id: 'amd-x670e-wifi6e', name: 'AMD X670E (Wi-Fi 6E)', price: 880, description_basic: 'Chipset X670E com suporte a Wi-Fi 6E para conectividade ultra-rápida.', description_advanced: 'Chipset AMD X670E com módulo Wi-Fi 6E e Bluetooth 5.3 integrados, garantindo conectividade sem fio de última geração.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, cpu_socket: 'AM5', ram_type: 'DDR5', ram_slots: 4, nvme_slots: 3, sata_ports: 4, pcie_gen: 'Gen5' }
            ],
            cpu: [
                { id: 'i5-13600hx', name: 'Intel Core i5-13600HX', price: 1800, description_basic: 'Excelente para produtividade e jogos leves.', description_advanced: 'Processador Intel Core i5-13600HX (14 Cores, 20 Threads, até 4.8 GHz), ideal para multitarefas e gaming em 1080p.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, socket: 'LGA1700' },
                { id: 'i7-13700hx', name: 'Intel Core i7-13700HX', price: 2500, description_basic: 'Alto desempenho para multitarefas e jogos.', description_advanced: 'Processador Intel Core i7-13700HX (16 Cores, 24 Threads, até 5.0 GHz), performance superior para aplicações exigentes e jogos em altas taxas de quadros.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, socket: 'LGA1700' },
                { id: 'i9-13900hx', name: 'Intel Core i9-13900HX', price: 3500, description_basic: 'Potência máxima para tarefas exigentes e gaming extremo.', description_advanced: 'Processador Intel Core i9-13900HX (24 Cores, 32 Threads, até 5.4 GHz), o ápice da performance para gaming, edição de vídeo 4K e renderização 3D.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, socket: 'LGA1700' },
                { id: 'r7-7745hx', name: 'AMD Ryzen 7 7745HX', price: 2300, description_basic: 'Ótimo equilíbrio entre performance e eficiência.', description_advanced: 'Processador AMD Ryzen 7 7745HX (8 Cores, 16 Threads, até 5.1 GHz), arquitetura Zen 4, excelente para jogos e produtividade com eficiência energética.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, socket: 'AM5' },
                { id: 'r9-7945hx', name: 'AMD Ryzen 9 7945HX', price: 3300, description_basic: 'Desempenho de ponta para criadores de conteúdo e gamers.', description_advanced: 'Processador AMD Ryzen 9 7945HX (16 Cores, 32 Threads, até 5.4 GHz), a solução AMD de ponta para cargas de trabalho intensas e gaming competitivo.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, socket: 'AM5' },
                { id: 'i5-14600hx', name: 'Intel Core i5-14600HX', price: 2000, description_basic: 'Geração mais recente do i5, melhor eficiência.', description_advanced: 'Processador Intel Core i5-14600HX (14 Cores, 20 Threads, até 5.0 GHz), otimizações de IA e eficiência aprimorada sobre a geração anterior.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, socket: 'LGA1700' },
                { id: 'i7-14700hx', name: 'Intel Core i7-14700HX', price: 2800, description_basic: 'Geração mais recente do i7, com mais núcleos.', description_advanced: 'Processador Intel Core i7-14700HX (20 Cores, 28 Threads, até 5.5 GHz), aumento significativo de núcleos e threads para multitarefas extremas.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, socket: 'LGA1700' },
                { id: 'i9-14900hx', name: 'Intel Core i9-14900HX', price: 4000, description_basic: 'O topo de linha Intel, para o máximo de performance.', description_advanced: 'Processador Intel Core i9-14900HX (24 Cores, 32 Threads, até 5.8 GHz), desempenho inigualável para qualquer cenário de uso.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, socket: 'LGA1700' },
                { id: 'r7-8845hs', name: 'AMD Ryzen 7 8845HS', price: 2600, description_basic: 'Nova geração HS, otimizada para eficiência e IA.', description_advanced: 'Processador AMD Ryzen 7 8845HS (8 Cores, 16 Threads, até 5.1 GHz) com Ryzen AI, ideal para notebooks finos e leves com recursos de IA.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, socket: 'AM5' },
                { id: 'r9-8945hs', name: 'AMD Ryzen 9 8945HS', price: 3800, description_basic: 'O topo de linha AMD HS, com gráficos integrados potentes.', description_advanced: 'Processador AMD Ryzen 9 8945HS (8 Cores, 16 Threads, até 5.2 GHz) com gráficos Radeon 780M, excelente para ultrabooks de alto desempenho.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, socket: 'AM5' }
            ],
            ram: [
                { id: 'ddr4-8gb-3200', name: 'DDR4 8GB (3200MHz)', price: 200, description_basic: 'Ideal para uso básico e navegação.', description_advanced: 'Módulo SO-DIMM DDR4 de 8GB, 3200MHz CL22, ideal para sistemas com chipset DDR4.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, type: 'DDR4' },
                { id: 'ddr4-16gb-3200', name: 'DDR4 16GB (3200MHz)', price: 350, description_basic: 'Recomendado para multitarefas e jogos.', description_advanced: 'Módulo SO-DIMM DDR4 de 16GB, 3200MHz CL22, para maior capacidade em plataformas DDR4.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, type: 'DDR4' },
                { id: 'ddr4-32gb-3200', name: 'DDR4 32GB (3200MHz)', price: 650, description_basic: 'Para profissionais e gamers exigentes.', description_advanced: 'Módulo SO-DIMM DDR4 de 32GB, 3200MHz CL22, máxima capacidade para notebooks DDR4.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, type: 'DDR4' },
                { id: 'ddr5-8gb-4800', name: 'DDR5 8GB (4800MHz)', price: 250, description_basic: 'Ideal para uso básico e navegação.', description_advanced: 'Módulo SO-DIMM DDR5 de 8GB, 4800MHz CL40, para plataformas DDR5 de entrada.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, type: 'DDR5' },
                { id: 'ddr5-16gb-4800', name: 'DDR5 16GB (4800MHz)', price: 450, description_basic: 'Recomendado para multitarefas e jogos.', description_advanced: 'Módulo SO-DIMM DDR5 de 16GB, 4800MHz CL40, padrão para notebooks modernos.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, type: 'DDR5' },
                { id: 'ddr5-32gb-4800', name: 'DDR5 32GB (4800MHz)', price: 850, description_basic: 'Para profissionais e gamers exigentes.', description_advanced: 'Módulo SO-DIMM DDR5 de 32GB, 4800MHz CL40, alta capacidade para DDR5.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, type: 'DDR5' },
                { id: 'ddr5-16gb-5200', name: 'DDR5 16GB (5200MHz)', price: 500, description_basic: 'Maior velocidade para desempenho aprimorado.', description_advanced: 'Módulo SO-DIMM DDR5 de 16GB, 5200MHz CL38, otimizado para CPUs de alto desempenho.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, type: 'DDR5' },
                { id: 'ddr5-32gb-5200', name: 'DDR5 32GB (5200MHz)', price: 950, description_basic: 'Alta velocidade para cargas de trabalho pesadas.', description_advanced: 'Módulo SO-DIMM DDR5 de 32GB, 5200MHz CL38, para edição de vídeo e máquinas virtuais.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, type: 'DDR5' },
                { id: 'ddr5-64gb-5200', name: 'DDR5 64GB (5200MHz)', price: 1800, description_basic: 'Máxima capacidade para virtualização e edição 4K.', description_advanced: 'Módulo SO-DIMM DDR5 de 64GB, 5200MHz CL38, capacidade extrema para as tarefas mais exigentes.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, type: 'DDR5' },
                { id: 'ddr5-32gb-5600', name: 'DDR5 32GB (5600MHz)', price: 1050, description_basic: 'Velocidade extrema para o máximo de FPS.', description_advanced: 'Módulo SO-DIMM DDR5 de 32GB, 5600MHz CL36, o mais rápido para gaming competitivo e aplicações de baixa latência.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, type: 'DDR5' },
                { id: 'ddr5-64gb-5600', name: 'DDR5 64GB (5600MHz)', price: 2000, description_basic: 'O ápice da performance em memória RAM.', description_advanced: 'Módulo SO-DIMM DDR5 de 64GB, 5600MHz CL36, a melhor performance e capacidade disponível para notebooks.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, type: 'DDR5' }
            ],
            storage: [ // Used for both storage1 and storage2
                { id: 'nvme-512gb-gen4', name: 'SSD NVMe 512GB (PCIe Gen4)', price: 300, description_basic: 'Velocidade e espaço para o sistema e programas essenciais.', description_advanced: 'SSD NVMe PCIe Gen4 x4 de 512GB, velocidades de leitura/escrita sequenciais de até 7000/5000 MB/s.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, interface: 'NVMe', pcie_gen: 'Gen4' },
                { id: 'nvme-1tb-gen4', name: 'SSD NVMe 1TB (PCIe Gen4)', price: 500, description_basic: 'Amplo espaço e alta velocidade para jogos e arquivos grandes.', description_advanced: 'SSD NVMe PCIe Gen4 x4 de 1TB, ideal para gamers e criadores de conteúdo com grandes bibliotecas.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, interface: 'NVMe', pcie_gen: 'Gen4' },
                { id: 'nvme-2tb-gen4', name: 'SSD NVMe 2TB (PCIe Gen4)', price: 900, description_basic: 'Capacidade máxima e performance superior.', description_advanced: 'SSD NVMe PCIe Gen4 x4 de 2TB, oferece o máximo de espaço e velocidade para a maioria dos usuários exigentes.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, interface: 'NVMe', pcie_gen: 'Gen4' },
                { id: 'nvme-512gb-gen5', name: 'SSD NVMe 512GB (PCIe Gen5)', price: 500, description_basic: 'Velocidade ultra-rápida para o futuro.', description_advanced: 'SSD NVMe PCIe Gen5 x4 de 512GB, velocidades de leitura/escrita sequenciais de até 10000/8000 MB/s, para o futuro do armazenamento.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, interface: 'NVMe', pcie_gen: 'Gen5' },
                { id: 'nvme-1tb-gen5', name: 'SSD NVMe 1TB (PCIe Gen5)', price: 800, description_basic: 'O dobro da velocidade do Gen4 para os mais exigentes.', description_advanced: 'SSD NVMe PCIe Gen5 x4 de 1TB, o dobro da performance do Gen4, ideal para cargas de trabalho de dados massivas.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, interface: 'NVMe', pcie_gen: 'Gen5' },
                { id: 'nvme-2tb-gen5', name: 'SSD NVMe 2TB (PCIe Gen5)', price: 1500, description_basic: 'Atingindo o limite de velocidade para SSDs.', description_advanced: 'SSD NVMe PCIe Gen5 x4 de 2TB, a solução de armazenamento mais rápida e espaçosa disponível atualmente.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, interface: 'NVMe', pcie_gen: 'Gen5' },
                { id: 'sata-ssd-500gb', name: 'SSD SATA 500GB', price: 200, description_basic: 'Opção econômica para armazenamento rápido.', description_advanced: 'SSD de 2.5" SATA III de 500GB, velocidades de leitura/escrita sequenciais de até 550/500 MB/s, para notebooks com portas SATA.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, interface: 'SATA' },
                { id: 'sata-ssd-1tb', name: 'SSD SATA 1TB', price: 350, description_basic: 'Opção econômica com maior capacidade.', description_advanced: 'SSD de 2.5" SATA III de 1TB, oferece boa capacidade e velocidade para uso geral.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, interface: 'SATA' },
                { id: 'hdd-1tb', name: 'HDD 1TB (5400RPM)', price: 150, description_basic: 'Opção econômica para armazenamento de dados em massa.', description_advanced: 'Disco rígido de 2.5" SATA III de 1TB, 5400RPM, ideal para armazenamento de arquivos grandes e backups.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, interface: 'SATA' },
                { id: 'hdd-2tb', name: 'HDD 2TB (5400RPM)', price: 250, description_basic: 'Maior capacidade para arquivos grandes.', description_advanced: 'Disco rígido de 2.5" SATA III de 2TB, 5400RPM, para quem precisa de máxima capacidade de armazenamento.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, interface: 'SATA' }
            ],
            gpu: [
                { id: 'integrated', name: 'GPU Integrada (Intel Iris Xe / AMD Radeon)', price: 0, description_basic: 'Suficiente para tarefas diárias e multimídia.', description_advanced: 'Processador gráfico integrado (iGPU) da Intel (Iris Xe) ou AMD (Radeon Graphics), adequado para navegação, vídeo e jogos leves.', basic_only: true, stock: 999, pcie_gen: 'N/A' },
                { id: 'rtx-4050', name: 'NVIDIA GeForce RTX 4050 (6GB)', price: 1500, description_basic: 'Bom desempenho para jogos em 1080p.', description_advanced: 'GPU dedicada NVIDIA GeForce RTX 4050 com 6GB GDDR6, ideal para jogos em 1080p e tarefas de criação de conteúdo.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, pcie_gen: 'Gen4' },
                { id: 'rtx-4060', name: 'NVIDIA GeForce RTX 4060 (8GB)', price: 2500, description_basic: 'Excelente para jogos em 1080p e 1440p.', description_advanced: 'GPU dedicada NVIDIA GeForce RTX 4060 com 8GB GDDR6, oferece excelente performance para jogos em 1080p e 1440p, com suporte a DLSS 3.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, pcie_gen: 'Gen4' },
                { id: 'rtx-4070', name: 'NVIDIA GeForce RTX 4070 (8GB)', price: 3500, description_basic: 'Performance de alto nível para jogos e criação de conteúdo.', description_advanced: 'GPU dedicada NVIDIA GeForce RTX 4070 com 8GB GDDR6, para jogos em 1440p com altas taxas de quadros e aceleração de IA.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5, pcie_gen: 'Gen4' },
                { id: 'rtx-4080', name: 'NVIDIA GeForce RTX 4080 (12GB)', price: 5000, description_basic: 'Potência extrema para jogos em 4K e renderização.', description_advanced: 'GPU dedicada NVIDIA GeForce RTX 4080 com 12GB GDDR6, oferece performance de desktop em um formato móvel, ideal para entusiastas e profissionais.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, pcie_gen: 'Gen5' },
                { id: 'rtx-4090', name: 'NVIDIA GeForce RTX 4090 (16GB)', price: 7000, description_basic: 'A GPU mais poderosa para notebooks, sem compromissos.', description_advanced: 'GPU dedicada NVIDIA GeForce RTX 4090 com 16GB GDDR6, a placa de vídeo mais potente para notebooks, sem compromissos de desempenho.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, pcie_gen: 'Gen5' },
                { id: 'rx-7600s', name: 'AMD Radeon RX 7600S (8GB)', price: 2000, description_basic: 'Alternativa AMD competitiva para jogos.', description_advanced: 'GPU dedicada AMD Radeon RX 7600S com 8GB GDDR6, uma forte concorrente para jogos em 1080p e 1440p.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5, pcie_gen: 'Gen4' },
                { id: 'rx-7700s', name: 'AMD Radeon RX 7700S (12GB)', price: 3000, description_basic: 'GPU AMD de alto desempenho para gamers.', description_advanced: 'GPU dedicada AMD Radeon RX 7700S com 12GB GDDR6, performance otimizada para jogos e criação de conteúdo.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, pcie_gen: 'Gen4' },
                { id: 'rx-7800s', name: 'AMD Radeon RX 7800S (16GB)', price: 4500, description_basic: 'O topo de linha AMD para notebooks.', description_advanced: 'GPU dedicada AMD Radeon RX 7800S com 16GB GDDR6, a solução gráfica mais avançada da AMD para notebooks de alta performance.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1, pcie_gen: 'Gen5' }
            ],
            display: [
                { id: '15.6-fhd-120hz', name: '15.6" IPS FHD (120Hz)', price: 400, description_basic: 'Qualidade de imagem nítida e fluidez para o dia a dia.', description_advanced: 'Tela IPS de 15.6 polegadas, resolução Full HD (1920x1080), taxa de atualização de 120Hz, 300 nits de brilho, 100% sRGB.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: '15.6-qhd-165hz', name: '15.6" IPS QHD (165Hz)', price: 700, description_basic: 'Resolução superior e alta taxa de atualização para jogos e trabalho.', description_advanced: 'Tela IPS de 15.6 polegadas, resolução QHD (2560x1440), taxa de atualização de 165Hz, 400 nits de brilho, 100% DCI-P3, G-Sync/FreeSync.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: '17.3-fhd-144hz', name: '17.3" IPS FHD (144Hz)', price: 600, description_basic: 'Tela maior com boa fluidez para imersão.', description_advanced: 'Tela IPS de 17.3 polegadas, resolução Full HD (1920x1080), taxa de atualização de 144Hz, 300 nits de brilho, 100% sRGB.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: '17.3-qhd-240hz', name: '17.3" IPS QHD (240Hz)', price: 1000, description_basic: 'Experiência visual definitiva com alta resolução e taxa de atualização.', description_advanced: 'Tela IPS de 17.3 polegadas, resolução QHD (2560x1440), taxa de atualização de 240Hz, 500 nits de brilho, 100% DCI-P3, G-Sync/FreeSync Ultimate.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: '16-oled-4k', name: '16" OLED 4K (60Hz)', price: 1500, description_basic: 'Cores vibrantes e pretos perfeitos para criadores de conteúdo.', description_advanced: 'Tela OLED de 16 polegadas, resolução 4K (3840x2400), taxa de atualização de 60Hz, 600 nits de brilho (pico), 100% DCI-P3, HDR True Black 500.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: '18-qhd-300hz', name: '18" IPS QHD (300Hz)', price: 1800, description_basic: 'Tela gigante com taxa de atualização insana para eSports.', description_advanced: 'Tela IPS de 18 polegadas, resolução QHD (2560x1440), taxa de atualização de 300Hz, 500 nits de brilho, 100% sRGB, ideal para eSports e imersão total.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: '14-oled-2.8k', name: '14" OLED 2.8K (90Hz)', price: 1200, description_basic: 'Compacta com qualidade OLED e alta resolução.', description_advanced: 'Tela OLED de 14 polegadas, resolução 2.8K (2880x1800), taxa de atualização de 90Hz, 400 nits de brilho, 100% DCI-P3, para ultrabooks premium.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 }
            ],
            keyboard: [
                { id: 'standard-backlit-us', name: 'Teclado Padrão (Retroiluminado, US)', price: 100, description_basic: 'Layout americano, conforto e visibilidade.', description_advanced: 'Teclado chiclet de membrana, layout US ANSI, retroiluminação branca de 3 níveis, curso de tecla de 1.5mm.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'standard-backlit-br', name: 'Teclado Padrão (Retroiluminado, BR ABNT2)', price: 120, description_basic: 'Layout brasileiro, conforto e visibilidade.', description_advanced: 'Teclado chiclet de membrana, layout BR ABNT2, retroiluminação branca de 3 níveis, curso de tecla de 1.5mm.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'mechanical-rgb-lowprofile', name: 'Teclado Mecânico (RGB, Low-Profile)', price: 300, description_basic: 'Switches de baixo perfil, resposta tátil e iluminação personalizável.', description_advanced: 'Teclado mecânico com switches de baixo perfil (ex: Kailh Choc V2), iluminação RGB por tecla, N-Key Rollover e anti-ghosting.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: 'optical-rgb', name: 'Teclado Óptico (RGB)', price: 350, description_basic: 'Switches ópticos para acionamento ultra-rápido.', description_advanced: 'Teclado óptico com switches de acionamento a laser, latência ultra-baixa, iluminação RGB por tecla e durabilidade superior.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: 'per-key-rgb', name: 'Teclado com RGB por Tecla', price: 200, description_basic: 'Iluminação RGB individual para cada tecla.', description_advanced: 'Teclado de membrana com iluminação RGB individualmente configurável por tecla, múltiplos efeitos de iluminação e software de personalização.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5 }
            ],
            battery: [
                { id: '50wh', name: 'Bateria 50Wh', price: 150, description_basic: 'Autonomia padrão para uso moderado.', description_advanced: 'Bateria de íon de lítio de 50Wh, autonomia estimada de 4-6 horas de uso misto.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: '70wh', name: 'Bateria 70Wh', price: 250, description_basic: 'Maior autonomia para longas sessões de trabalho.', description_advanced: 'Bateria de íon de lítio de 70Wh, autonomia estimada de 6-9 horas de uso misto, ideal para produtividade em trânsito.', basic_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: '90wh', name: 'Bateria 90Wh', price: 350, description_basic: 'Máxima autonomia para mobilidade estendida.', description_advanced: 'Bateria de íon de lítio de 90Wh, autonomia estimada de 9-12 horas de uso misto, para máxima liberdade sem tomada.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: '99wh', name: 'Bateria 99.9Wh (Máx. Permitido em Aviões)', price: 450, description_basic: 'A maior bateria possível para notebooks, ideal para viagens.', description_advanced: 'Bateria de íon de lítio de 99.9Wh, a maior capacidade permitida em voos comerciais, oferecendo autonomia estendida para viagens e longas jornadas.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 }
            ],
            peripherals: [
                { id: 'none-peripherals', name: 'Nenhum Periférico', price: 0, description_basic: 'Não adicionar periféricos.', description_advanced: 'Nenhum periférico adicional será incluído na sua encomenda.', basic_only: true, advanced_only: true, stock: 999 },
                { id: 'gaming-mouse', name: 'Mouse Gamer RGB', price: 150, description_basic: 'Mouse de alta precisão com iluminação RGB.', description_advanced: 'Mouse óptico gamer com sensor de 16000 DPI, 7 botões programáveis, iluminação RGB personalizável e cabo paracord.', basic_only: true, advanced_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'gaming-headset', name: 'Headset Gamer 7.1', price: 250, description_basic: 'Áudio imersivo para jogos e comunicação.', description_advanced: 'Headset gamer com som surround virtual 7.1, drivers de 50mm, microfone retrátil com cancelamento de ruído e almofadas de couro sintético.', basic_only: true, advanced_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'external-monitor-fhd', name: 'Monitor Externo 24" FHD (144Hz)', price: 800, description_basic: 'Monitor adicional para produtividade ou jogos.', description_advanced: 'Monitor IPS de 24 polegadas, Full HD (1920x1080), 144Hz, 1ms MPRT, FreeSync Premium, ideal para setup de dois monitores.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: 'external-monitor-qhd', name: 'Monitor Externo 27" QHD (165Hz)', price: 1200, description_basic: 'Monitor de alta resolução para uma experiência visual superior.', description_advanced: 'Monitor IPS de 27 polegadas, QHD (2560x1440), 165Hz, 1ms GtG, G-Sync Compatible, HDR400, para imersão e alta fidelidade visual.', advanced_only: true, stock: Math.floor(Math.random() * 5) + 1 },
                { id: 'webcam-fhd', name: 'Webcam Externa FHD', price: 100, description_basic: 'Qualidade de vídeo aprimorada para chamadas e streaming.', description_advanced: 'Webcam Full HD 1080p a 30fps, lente de vidro, correção automática de luz, microfone estéreo integrado, ideal para videoconferências e streaming.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5 },
                { id: 'usb-c-hub', name: 'Hub USB-C Multiportas', price: 80, description_basic: 'Expanda a conectividade do seu notebook.', description_advanced: 'Hub USB-C 7 em 1: 2x USB 3.0, 1x HDMI 4K, 1x SD/MicroSD, 1x Ethernet Gigabit, 1x USB-C PD (100W), ideal para notebooks com poucas portas.', advanced_only: true, stock: Math.floor(Math.random() * 10) + 5 }
            ]
        };

        let selectedComponents = {
            casing: null,
            motherboard: null,
            cpu: null,
            ram: { type: null, quantity: 1 },
            storage1: { type: null },
            storage2: { type: 'none' },
            gpu: null,
            display: null,
            keyboard: null,
            battery: null,
            peripherals: 'none-peripherals'
        };

        let tradeInCredit = 0;
        let currentMode = 'basic'; // 'basic' or 'advanced'

        const formatPrice = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

        function getComponentPrice(category, id) {
            if (id === 'none') return 0;
            const componentList = components[category];
            const component = componentList.find(c => c.id === id);
            return component ? component.price : 0;
        }

        function getComponentStock(category, id) {
            if (id === 'none') return 999; // Unlimited stock for "None" option
            const componentList = components[category];
            const component = componentList.find(c => c.id === id);
            return component ? component.stock : 0;
        }

        function getComponentDescription(item, mode) {
            return mode === 'basic' ? item.description_basic : item.description_advanced;
        }

        function updateTotal() {
            let totalPrice = 0;

            for (const category in selectedComponents) {
                if (category === 'ram') {
                    if (selectedComponents.ram.type && selectedComponents.ram.quantity > 0) {
                        totalPrice += getComponentPrice('ram', selectedComponents.ram.type) * selectedComponents.ram.quantity;
                    }
                } else if (category === 'storage1') {
                    if (selectedComponents.storage1.type) {
                        totalPrice += getComponentPrice('storage', selectedComponents.storage1.type);
                    }
                } else if (category === 'storage2') {
                    if (selectedComponents.storage2.type && selectedComponents.storage2.type !== 'none') {
                        totalPrice += getComponentPrice('storage', selectedComponents.storage2.type);
                    }
                } else if (category === 'peripherals') {
                    if (selectedComponents.peripherals && selectedComponents.peripherals !== 'none-peripherals') {
                        totalPrice += getComponentPrice('peripherals', selectedComponents.peripherals);
                    }
                } else {
                    if (selectedComponents[category]) {
                        totalPrice += getComponentPrice(category, selectedComponents[category]);
                    }
                }
            }

            let finalPrice = totalPrice - tradeInCredit;
            if (finalPrice < 0) finalPrice = 0;

            document.getElementById('total-price-display').textContent = formatPrice(finalPrice);
            updateSummary();
        }

        function updateSummary() {
            // Update summary details
            const summaryDetails = document.getElementById('summary-details');
            summaryDetails.innerHTML = `
                <p><strong>Carcaça:</strong> <span class="summary-item-name">${selectedComponents.casing ? components.casing.find(c => c.id === selectedComponents.casing).name : 'N/A'}</span></p>
                <p><strong>Placa Mãe:</strong> <span class="summary-item-name">${selectedComponents.motherboard ? components.motherboard.find(c => c.id === selectedComponents.motherboard).name : 'N/A'}</span></p>
                <p><strong>CPU:</strong> <span class="summary-item-name">${selectedComponents.cpu ? components.cpu.find(c => c.id === selectedComponents.cpu).name : 'N/A'}</span></p>
                <p><strong>RAM:</strong> <span class="summary-item-name">${selectedComponents.ram.type ? `${selectedComponents.ram.quantity}x ${components.ram.find(c => c.id === selectedComponents.ram.type).name}` : 'N/A'}</span></p>
                <p><strong>Armazenamento 1:</strong> <span class="summary-item-name">${selectedComponents.storage1.type ? components.storage.find(c => c.id === selectedComponents.storage1.type).name : 'N/A'}</span></p>
                <p><strong>Armazenamento 2:</strong> <span class="summary-item-name">${selectedComponents.storage2.type === 'none' ? 'Nenhum' : (selectedComponents.storage2.type ? components.storage.find(c => c.id === selectedComponents.storage2.type).name : 'N/A')}</span></p>
                <p><strong>GPU:</strong> <span class="summary-item-name">${selectedComponents.gpu ? components.gpu.find(c => c.id === selectedComponents.gpu).name : 'N/A'}</span></p>
                <p><strong>Tela:</strong> <span class="summary-item-name">${selectedComponents.display ? components.display.find(c => c.id === selectedComponents.display).name : 'N/A'}</span></p>
                <p><strong>Teclado:</strong> <span class="summary-item-name">${selectedComponents.keyboard ? components.keyboard.find(c => c.id === selectedComponents.keyboard).name : 'N/A'}</span></p>
                <p><strong>Bateria:</strong> <span class="summary-item-name">${selectedComponents.battery ? components.battery.find(c => c.id === selectedComponents.battery).name : 'N/A'}</span></p>
                <p><strong>Periféricos:</strong> <span class="summary-item-name">${selectedComponents.peripherals === 'none-peripherals' ? 'Nenhum' : (selectedComponents.peripherals ? components.peripherals.find(c => c.id === selectedComponents.peripherals).name : 'N/A')}</span></p>
                <p class="text-red-300"><strong>Crédito de Troca:</strong> <span id="summary-tradein-credit" class="summary-tradein-price">${formatPrice(tradeInCredit)}</span></p>
            `;
        }

        function createOptionElement(item, category, isRadio = true) {
            const container = document.createElement('div');
            container.className = 'option-item';
            container.dataset.id = item.id;
            container.dataset.price = item.price;
            container.dataset.category = category;

            const input = document.createElement('input');
            input.type = isRadio ? 'radio' : 'hidden';
            input.id = `${category}-${item.id}`;
            input.name = category;
            input.value = item.id;
            input.className = 'hidden';

            const label = document.createElement('label');
            label.htmlFor = `${category}-${item.id}`;
            label.className = 'flex-grow cursor-pointer';

            const descriptionText = getComponentDescription(item, currentMode);
            const stockText = item.stock !== undefined && item.stock !== 999 ? ` (Estoque: ${item.stock})` : '';
            const disabledClass = item.stock !== undefined && item.stock <= 0 ? 'disabled' : '';

            if (disabledClass) {
                container.classList.add(disabledClass);
                container.style.pointerEvents = 'none';
            }

            const content = document.createElement('div');
            content.className = 'option-content';
            content.innerHTML = `
                <p class="font-medium ${disabledClass ? 'text-gray-500' : 'text-gray-200'}">${item.name} ${stockText}</p>
                <p class="text-sm ${disabledClass ? 'text-gray-600' : 'text-gray-400'}">${descriptionText}</p>
                <p class="text-sm ${disabledClass ? 'text-gray-500' : 'text-gray-300'} font-semibold">${formatPrice(item.price)}</p>
            `;
            label.appendChild(content);
            container.appendChild(input);
            container.appendChild(label);

            container.addEventListener('click', () => {
                if (container.classList.contains('disabled')) return;

                const parent = container.parentNode;
                parent.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                container.classList.add('selected');
                input.checked = true;
                
                // Logic to handle stock decrement/increment and selection update
                if (item.stock !== undefined && item.stock !== 999) {
                    if (category === 'ram') {
                        if (selectedComponents.ram.type) {
                            const prevRamType = components.ram.find(r => r.id === selectedComponents.ram.type);
                            if (prevRamType && prevRamType.stock !== 999) prevRamType.stock += selectedComponents.ram.quantity;
                        }
                        selectedComponents.ram.type = item.id;
                        if (item.stock !== 999) item.stock -= selectedComponents.ram.quantity;
                    } else if (category.startsWith('storage')) {
                        const prevStorageId = selectedComponents[category].type;
                        if (prevStorageId && prevStorageId !== 'none') {
                            const prevStorageItem = components.storage.find(s => s.id === prevStorageId);
                            if (prevStorageItem && prevStorageItem.stock !== 999) prevStorageItem.stock++;
                        }
                        selectedComponents[category].type = item.id;
                        if (item.stock !== 999 && item.id !== 'none') item.stock--;
                    } else if (category === 'peripherals') {
                        const prevPeripheralId = selectedComponents.peripherals;
                        if (prevPeripheralId && prevPeripheralId !== 'none-peripherals') {
                            const prevPeripheralItem = components.peripherals.find(p => p.id === prevPeripheralId);
                            if (prevPeripheralItem && prevPeripheralItem.stock !== 999) prevPeripheralItem.stock++;
                        }
                        selectedComponents.peripherals = item.id;
                        if (item.stock !== 999 && item.id !== 'none-peripherals') item.stock--;
                    } else {
                        if (selectedComponents[category]) {
                            const prevItem = components[category].find(c => c.id === selectedComponents[category]);
                            if (prevItem && prevItem.stock !== 999) prevItem.stock++;
                        }
                        selectedComponents[category] = item.id;
                        if (item.stock !== 999) item.stock--;
                    }
                }
                
                // Trigger re-population of dependent options for compatibility
                if (category === 'motherboard' || category === 'cpu') {
                    // Reset dependent selections if they become incompatible
                    const newMb = category === 'motherboard' ? item : (selectedComponents.motherboard ? components.motherboard.find(mb => mb.id === selectedComponents.motherboard) : null);
                    const newCpu = category === 'cpu' ? item : (selectedComponents.cpu ? components.cpu.find(cpu => cpu.id === selectedComponents.cpu) : null);

                    // Check CPU compatibility with new MB
                    if (newMb && selectedComponents.cpu && (!newCpu || newCpu.socket !== newMb.cpu_socket)) {
                        selectedComponents.cpu = null;
                    }
                    // Check MB compatibility with new CPU
                    if (newCpu && selectedComponents.motherboard && (!newMb || newMb.cpu_socket !== newCpu.socket)) {
                        selectedComponents.motherboard = null;
                    }

                    // Reset RAM, Storage, GPU if they become incompatible
                    if (newMb) {
                        if (selectedComponents.ram.type && components.ram.find(r => r.id === selectedComponents.ram.type).type !== newMb.ram_type) {
                            selectedComponents.ram.type = null;
                            selectedComponents.ram.quantity = 1;
                        }
                        // Check NVMe/SATA slots
                        let currentNvmeCount = 0;
                        let currentSataCount = 0;
                        if (selectedComponents.storage1.type && selectedComponents.storage1.type !== 'none') {
                            const s1 = components.storage.find(s => s.id === selectedComponents.storage1.type);
                            if (s1 && s1.interface === 'NVMe') currentNvmeCount++;
                            if (s1 && s1.interface === 'SATA') currentSataCount++;
                        }
                        if (selectedComponents.storage2.type && selectedComponents.storage2.type !== 'none') {
                            const s2 = components.storage.find(s => s.id === selectedComponents.storage2.type);
                            if (s2 && s2.interface === 'NVMe') currentNvmeCount++;
                            if (s2 && s2.interface === 'SATA') currentSataCount++;
                        }

                        if (currentNvmeCount > newMb.nvme_slots) {
                            // Reset one NVMe if over limit, prioritize storage2
                            if (selectedComponents.storage2.type && components.storage.find(s => s.id === selectedComponents.storage2.type)?.interface === 'NVMe') {
                                selectedComponents.storage2.type = 'none';
                            } else if (selectedComponents.storage1.type && components.storage.find(s => s.id === selectedComponents.storage1.type)?.interface === 'NVMe') {
                                selectedComponents.storage1.type = null;
                            }
                        }
                        if (currentSataCount > newMb.sata_ports) {
                            // Reset one SATA if over limit, prioritize storage2
                            if (selectedComponents.storage2.type && components.storage.find(s => s.id === selectedComponents.storage2.type)?.interface === 'SATA') {
                                selectedComponents.storage2.type = 'none';
                            } else if (selectedComponents.storage1.type && components.storage.find(s => s.id === selectedComponents.storage1.type)?.interface === 'SATA') {
                                selectedComponents.storage1.type = null;
                            }
                        }

                        if (selectedComponents.gpu && selectedComponents.gpu !== 'integrated') {
                             const gpuItem = components.gpu.find(g => g.id === selectedComponents.gpu);
                             if (gpuItem && gpuItem.pcie_gen !== 'N/A' && gpuItem.pcie_gen !== newMb.pcie_gen) {
                                 selectedComponents.gpu = null; // Incompatible GPU
                             }
                        }
                    }

                    populateOptions(); // Re-populate all to apply new filters
                } else if (category === 'ram') {
                    const selectedMb = selectedComponents.motherboard ? components.motherboard.find(mb => mb.id === selectedComponents.motherboard) : null;
                    document.getElementById('ram-max-modules').textContent = selectedMb ? selectedMb.ram_slots : 4;
                    document.getElementById('ram-quantity-input').max = selectedMb ? selectedMb.ram_slots : 4;
                    if (parseInt(document.getElementById('ram-quantity-input').value) > (selectedMb ? selectedMb.ram_slots : 4)) {
                        document.getElementById('ram-quantity-input').value = (selectedMb ? selectedMb.ram_slots : 4);
                        selectedComponents.ram.quantity = (selectedMb ? selectedMb.ram_slots : 4);
                    }
                } else if (category.startsWith('storage')) {
                    // Re-populate storage options to reflect slot availability
                    populateOptions();
                } else if (category === 'gpu') {
                    // Re-populate GPU options if motherboard changes
                    populateOptions();
                }

                updateTotal();

                if (category === 'casing') {
                    document.getElementById('notebook-image').src = item.image;
                }
            });

            return container;
        }

        function getFilteredOptions(category) {
            let filtered = components[category];

            const selectedMb = selectedComponents.motherboard ? components.motherboard.find(mb => mb.id === selectedComponents.motherboard) : null;
            const selectedCpu = selectedComponents.cpu ? components.cpu.find(cpu => cpu.id === selectedComponents.cpu) : null;

            // Apply mode filter first
            filtered = filtered.filter(item => {
                const showInBasic = item.basic_only === true;
                const showInAdvanced = item.advanced_only === true;
                return (currentMode === 'basic' && showInBasic) || (currentMode === 'advanced' && (showInBasic || showInAdvanced));
            });

            // Apply compatibility filters
            if (category === 'cpu' && selectedMb) {
                filtered = filtered.filter(item => item.socket === selectedMb.cpu_socket);
            } else if (category === 'motherboard' && selectedCpu) {
                filtered = filtered.filter(item => item.cpu_socket === selectedCpu.socket);
            } else if (category === 'ram' && selectedMb) {
                filtered = filtered.filter(item => item.type === selectedMb.ram_type);
            } else if (category === 'storage') { // For storage1 and storage2
                // Count currently selected NVMe/SATA drives
                let currentNvmeCount = 0;
                let currentSataCount = 0;
                if (selectedComponents.storage1.type && selectedComponents.storage1.type !== 'none') {
                    const s1 = components.storage.find(s => s.id === selectedComponents.storage1.type);
                    if (s1 && s1.interface === 'NVMe') currentNvmeCount++;
                    if (s1 && s1.interface === 'SATA') currentSataCount++;
                }
                if (selectedComponents.storage2.type && selectedComponents.storage2.type !== 'none') {
                    const s2 = components.storage.find(s => s.id === selectedComponents.storage2.type);
                    if (s2 && s2.interface === 'NVMe') currentNvmeCount++;
                    if (s2 && s2.interface === 'SATA') currentSataCount++;
                }

                filtered = filtered.filter(item => {
                    if (!selectedMb) return true; // No motherboard selected, no limits
                    if (item.interface === 'NVMe' && currentNvmeCount >= selectedMb.nvme_slots) {
                        // Allow selection if this is the currently selected item
                        if (selectedComponents.storage1.type === item.id || selectedComponents.storage2.type === item.id) return true;
                        return false;
                    }
                    if (item.interface === 'SATA' && currentSataCount >= selectedMb.sata_ports) {
                        // Allow selection if this is the currently selected item
                        if (selectedComponents.storage1.type === item.id || selectedComponents.storage2.type === item.id) return true;
                        return false;
                    }
                    return true;
                });
            } else if (category === 'gpu') {
                filtered = filtered.filter(item => {
                    if (item.id === 'integrated') return true; // Always allow integrated GPU
                    if (!selectedMb) return true; // No motherboard selected, allow all dedicated GPUs
                    // Check PCIe generation compatibility
                    return item.pcie_gen === selectedMb.pcie_gen || item.pcie_gen === 'N/A'; // N/A for integrated is always compatible
                });
            }

            return filtered;
        }

        function populateOptions() {
            const categoriesToPopulate = ['casing', 'motherboard', 'cpu', 'gpu', 'display', 'keyboard', 'battery', 'peripherals'];
            
            categoriesToPopulate.forEach(category => {
                const container = document.getElementById(`${category}-options`);
                if (container) {
                    container.innerHTML = ''; // Clear previous options
                    const options = getFilteredOptions(category);
                    options.forEach(item => {
                        const optionElement = createOptionElement(item, category);
                        container.appendChild(optionElement);
                    });
                }
            });

            // Populate RAM type select
            const ramTypeSelect = document.getElementById('ram-type-select');
            ramTypeSelect.innerHTML = '<option value="">Selecione o tipo de RAM...</option>';
            const ramOptions = getFilteredOptions('ram');
            ramOptions.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;
                option.textContent = `${item.name} - ${formatPrice(item.price)} (Estoque: ${item.stock})`;
                if (item.stock <= 0) option.disabled = true;
                ramTypeSelect.appendChild(option);
            });

            // Populate Storage 1 options
            const storage1OptionsContainer = document.getElementById('storage1-options');
            storage1OptionsContainer.innerHTML = '';
            const storage1Options = getFilteredOptions('storage');
            storage1Options.forEach(item => {
                const optionElement = createOptionElement(item, 'storage1');
                storage1OptionsContainer.appendChild(optionElement);
            });

            // Populate Storage 2 options (excluding 'none' which is static)
            const storage2OptionsContainer = document.getElementById('storage2-options');
            // Keep the "Nenhum" option, clear others
            const noneOptionEl = storage2OptionsContainer.querySelector('[data-id="none"]');
            storage2OptionsContainer.innerHTML = '';
            if (noneOptionEl) storage2OptionsContainer.appendChild(noneOptionEl);

            const storage2Options = getFilteredOptions('storage');
            storage2Options.forEach(item => {
                const optionElement = createOptionElement(item, 'storage2');
                storage2OptionsContainer.appendChild(optionElement);
            });

            // Re-select previously chosen options and handle invalidations
            for (const category in selectedComponents) {
                let selectedId = selectedComponents[category];

                if (category === 'ram') {
                    selectedId = selectedComponents.ram.type;
                    const ramItem = components.ram.find(r => r.id === selectedId);
                    if (selectedId && (!ramItem || !getFilteredOptions('ram').some(opt => opt.id === selectedId) || ramItem.stock <= 0)) {
                        selectedComponents.ram.type = null;
                        ramTypeSelect.value = '';
                    } else if (selectedId) {
                        ramTypeSelect.value = selectedId;
                    }
                } else if (category === 'storage1' || category === 'storage2') {
                    selectedId = selectedComponents[category].type;
                    if (selectedId && selectedId !== 'none') {
                        const storageItem = components.storage.find(s => s.id === selectedId);
                        if (!storageItem || !getFilteredOptions('storage').some(opt => opt.id === selectedId) || storageItem.stock <= 0) {
                            selectedComponents[category].type = (category === 'storage2' ? 'none' : null);
                        }
                    }
                    const el = document.getElementById(`${category}-options`).querySelector(`[data-id="${selectedComponents[category].type}"]`);
                    if (el) el.classList.add('selected');
                } else if (category === 'peripherals') {
                    selectedId = selectedComponents.peripherals;
                    if (selectedId && selectedId !== 'none-peripherals') {
                        const peripheralItem = components.peripherals.find(p => p.id === selectedId);
                        if (!peripheralItem || !getFilteredOptions('peripherals').some(opt => opt.id === selectedId) || peripheralItem.stock <= 0) {
                            selectedComponents.peripherals = 'none-peripherals';
                        }
                    }
                    const el = document.getElementById(`${category}-options`).querySelector(`[data-id="${selectedComponents.peripherals}"]`);
                    if (el) el.classList.add('selected');
                }
                else {
                    const item = components[category].find(c => c.id === selectedId);
                    if (selectedId && (!item || !getFilteredOptions(category).some(opt => opt.id === selectedId) || item.stock <= 0)) {
                        selectedComponents[category] = null;
                    }
                    const el = document.getElementById(`${category}-options`).querySelector(`[data-id="${selectedComponents[category]}"]`);
                    if (el) el.classList.add('selected');
                }
            }

            // Update RAM quantity max based on motherboard
            const selectedMb = selectedComponents.motherboard ? components.motherboard.find(mb => mb.id === selectedComponents.motherboard) : null;
            document.getElementById('ram-max-modules').textContent = selectedMb ? selectedMb.ram_slots : 4;
            document.getElementById('ram-quantity-input').max = selectedMb ? selectedMb.ram_slots : 4;
            if (parseInt(document.getElementById('ram-quantity-input').value) > (selectedMb ? selectedMb.ram_slots : 4)) {
                document.getElementById('ram-quantity-input').value = (selectedMb ? selectedMb.ram_slots : 4);
                selectedComponents.ram.quantity = (selectedMb ? selectedMb.ram_slots : 4);
            }

            updateTotal();
        }

        function setupEventListeners() {
            document.getElementById('ram-quantity-input').addEventListener('input', (event) => {
                let quantity = parseInt(event.target.value);
                const maxRam = parseInt(event.target.max);
                if (isNaN(quantity) || quantity < 1) quantity = 1;
                if (quantity > maxRam) quantity = maxRam;
                selectedComponents.ram.quantity = quantity;
                event.target.value = quantity;
                updateTotal();
            });

            document.getElementById('ram-type-select').addEventListener('change', (event) => {
                selectedComponents.ram.type = event.target.value;
                updateTotal();
            });

            // Mode toggle buttons
            document.getElementById('basic-mode-btn').addEventListener('click', () => {
                currentMode = 'basic';
                document.getElementById('basic-mode-btn').classList.add('active');
                document.getElementById('advanced-mode-btn').classList.remove('active');
                populateOptions();
            });

            document.getElementById('advanced-mode-btn').addEventListener('click', () => {
                currentMode = 'advanced';
                document.getElementById('advanced-mode-btn').classList.add('active');
                document.getElementById('basic-mode-btn').classList.remove('active');
                populateOptions();
            });

            // Trade-in calculation
            document.getElementById('calculate-tradein').addEventListener('click', () => {
                const condition = document.getElementById('tradein-condition').value;
                const age = document.getElementById('tradein-age').value;
                const specs = document.getElementById('tradein-specs').value;
                let baseValue = 0;

                if (specs === 'high-end') baseValue = 3000;
                else if (specs === 'mid-range') baseValue = 1500;
                else baseValue = 500;

                if (age === '1-3years') baseValue *= 0.7;
                else if (age === '>3years') baseValue *= 0.4;

                if (condition === 'good') baseValue *= 0.9;
                else if (condition === 'fair') baseValue *= 0.6;
                else if (condition === 'poor') baseValue *= 0.3;

                tradeInCredit = Math.round(baseValue / 10) * 10;
                document.getElementById('tradein-value-display').textContent = `Valor Estimado: ${formatPrice(tradeInCredit)}`;
                updateTotal();
            });

            // File upload for detailed evaluation
            document.getElementById('upload-info-btn').addEventListener('click', () => {
                const fileInput = document.getElementById('system-info-file');
                const file = fileInput.files[0];
                const resultDisplay = document.getElementById('file-evaluation-result');

                if (!file) {
                    resultDisplay.textContent = "Por favor, selecione um arquivo para processar.";
                    resultDisplay.style.color = 'red';
                    return;
                }

                const reader = new FileReader();
                reader.onload = (e) => {
                    const content = e.target.result;
                    let fileValue = 0;

                    if (content.toLowerCase().includes('rtx 3080') || content.toLowerCase().includes('rtx 4070') || content.toLowerCase().includes('ryzen 9') || content.toLowerCase().includes('i9-')) {
                        fileValue = 4000;
                    } else if (content.toLowerCase().includes('rtx 2060') || content.toLowerCase().includes('rtx 3050') || content.toLowerCase().includes('ryzen 7') || content.toLowerCase().includes('i7-')) {
                        fileValue = 2500;
                    } else {
                        fileValue = 1000;
                    }

                    fileValue *= (0.8 + Math.random() * 0.4);
                    fileValue = Math.round(fileValue / 10) * 10;

                    tradeInCredit = fileValue;
                    document.getElementById('tradein-value-display').textContent = `Valor Detalhado: ${formatPrice(tradeInCredit)}`;
                    resultDisplay.textContent = "Relatório processado! Valor de troca atualizado.";
                    resultDisplay.style.color = getCssVar('--color-success-green');
                    updateTotal();
                };
                reader.onerror = () => {
                    resultDisplay.textContent = "Erro ao ler o arquivo.";
                    resultDisplay.style.color = 'red';
                };
                reader.readAsText(file);
            });

            // Order button and modal
            const orderButton = document.getElementById('order-button');
            const orderModal = document.getElementById('order-modal');
            const closeButton = document.querySelector('.close-button');

            orderButton.addEventListener('click', () => {
                let allSelected = true;
                const requiredCategories = ['casing', 'motherboard', 'cpu', 'ram', 'storage1', 'gpu', 'display', 'keyboard', 'battery'];
                
                requiredCategories.forEach(cat => {
                    if (cat === 'ram') {
                        if (!selectedComponents.ram.type) allSelected = false;
                    } else if (cat === 'storage1') {
                        if (!selectedComponents.storage1.type) allSelected = false;
                    } else if (!selectedComponents[cat]) {
                        allSelected = false;
                    }
                });

                if (!allSelected) {
                    const modalContent = document.getElementById('modal-order-summary');
                    modalContent.innerHTML = `<p class="text-red-400">Por favor, selecione todos os componentes obrigatórios antes de finalizar o pedido.</p>`;
                    document.getElementById('modal-total-price').textContent = document.getElementById('total-price-display').textContent;
                    orderModal.style.display = 'flex';
                    return;
                }

                let modalSummaryHtml = '';
                for (const key in selectedComponents) {
                    let componentDisplay = '';
                    let componentPrice = 0;

                    if (key === 'ram') {
                        if (selectedComponents.ram.type) {
                            const ramType = components.ram.find(c => c.id === selectedComponents.ram.type);
                            componentDisplay = `${selectedComponents.ram.quantity}x ${ramType.name}`;
                            componentPrice = ramType.price * selectedComponents.ram.quantity;
                        }
                    } else if (key === 'storage1') {
                        if (selectedComponents.storage1.type) {
                            const storageType = components.storage.find(c => c.id === selectedComponents.storage1.type);
                            componentDisplay = storageType.name;
                            componentPrice = storageType.price;
                        }
                    } else if (key === 'storage2') {
                        if (selectedComponents.storage2.type === 'none') {
                            componentDisplay = 'Nenhum';
                        } else if (selectedComponents.storage2.type) {
                            const storageType = components.storage.find(c => c.id === selectedComponents.storage2.type);
                            componentDisplay = storageType.name;
                            componentPrice = storageType.price;
                        }
                    } else if (key === 'peripherals') {
                        if (selectedComponents.peripherals === 'none-peripherals') {
                            componentDisplay = 'Nenhum';
                        } else if (selectedComponents.peripherals) {
                            const peripheral = components.peripherals.find(c => c.id === selectedComponents.peripherals);
                            componentDisplay = peripheral.name;
                            componentPrice = peripheral.price;
                        }
                    } else {
                        if (selectedComponents[key]) {
                            const componentData = components[key].find(c => c.id === selectedComponents[key]);
                            componentDisplay = componentData.name;
                            componentPrice = componentData.price;
                        }
                    }
                    
                    if (componentDisplay) {
                        modalSummaryHtml += `<p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${componentDisplay} (${formatPrice(componentPrice)})</p>`;
                    }
                }
                modalSummaryHtml += `<p class="text-red-300"><strong>Crédito de Troca:</strong> ${formatPrice(tradeInCredit)}</p>`;

                document.getElementById('modal-order-summary').innerHTML = modalSummaryHtml;
                document.getElementById('modal-total-price').textContent = document.getElementById('total-price-display').textContent;
                orderModal.style.display = 'flex';
            });

            closeButton.addEventListener('click', () => {
                orderModal.style.display = 'none';
            });

            window.addEventListener('click', (event) => {
                if (event.target === orderModal) {
                    orderModal.style.display = 'none';
                }
            });
        }

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        function observeSections() {
            document.querySelectorAll('section.card').forEach(section => {
                observer.observe(section);
            });
        }

        // Initialize on DOMContentLoaded
        document.addEventListener('DOMContentLoaded', () => {
            populateOptions();
            setupEventListeners();
            updateTotal();
            observeSections();
        });
    </script>
</body>
</html>
