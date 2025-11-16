// GENERAL INITIALIZATION
document.getElementById('current-year').textContent = new Date().getFullYear();
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); }});
}, { threshold: 0.05 });
function observeSections() { document.querySelectorAll('section.card, .ready-notebook-card, .service-item, .tab-content').forEach(section => { observer.observe(section); }); }

// GLOBAL STATE VARIABLES
let selectedPlatform = null;
let selectedComponents = {
    platform: null, casing: null, motherboard: null, cpu: null,
    ram: { type: null, quantity: 1 },
    storage1: { type: null }, storage2: { type: 'none' },
    gpu: null, display: null, keyboard: null, os: null,
    os2: null, dualboot_disk: 'same',
    network_adapter: null, battery: null,
    peripherals: [],
    software: [] // Consolidated array for all selected software
};
let selectedServices = []; // Array of service IDs
let tradeInCredit = 0;
let currentMode = 'basic';
let currentPresetName = "Balanceado";
let activeTab = 'configure'; 
let currentSoftwareTab = 'multimedia'; // Default software sub-tab

// DATA (Components, Presets, Ready Notebooks, Software Categories, Services)
const components = {
    platform: [
        { id: 'intel', name: 'Plataforma Intel', price: 0, stock: 50, performance_score: 0, icon: 'fab fa-intel', description_basic: 'Processadores e chipsets Intel.', description_advanced: 'Ideal para uma vasta gama de aplicações, desde produtividade a gaming de ponta, com tecnologias como Thunderbolt e suporte a memórias DDR4/DDR5 dependendo do chipset. Ótima compatibilidade de software.' },
        { id: 'amd', name: 'Plataforma AMD', price: 0, stock: 45, performance_score: 0, icon: 'fa-brands fa-amd', description_basic: 'Processadores e chipsets AMD.', description_advanced: 'Foco em multitarefas e eficiência energética com CPUs Ryzen. Excelente performance em jogos e criação de conteúdo, especialmente com APUs potentes (gráficos integrados). Suporte a DDR4/DDR5.' }
    ],            casing: [ 
        { id: 'casing-eco', name: 'Carcaça EcoFlex Preta', price: 75, stock: 20, performance_score: 5, icon: 'fas fa-box-open', description_basic: 'Funcional e leve.', description_advanced: 'Policarbonato reciclado, ventilação básica, design minimalista, 1x USB 3.0, 2x USB 2.0.' },
        { id: 'casing-silverstone', name: 'Carcaça SilverStone Slim Prata', price: 95, stock: 18, performance_score: 10, icon: 'fas fa-laptop', description_basic: 'Elegante e portátil.', description_advanced: 'Liga de alumínio escovado fina, ideal para portabilidade com estilo. 2x USB 3.1, 1x USB-C.' },
        { id: 'casing-pro-alum', name: 'Carcaça Pro Alumínio Grafite', price: 220, stock: 12, performance_score: 15, icon: 'fas fa-laptop-code', description_basic: 'Robusta, alumínio premium.', description_advanced: 'Chassi unibody em alumínio aeroespacial, dissipação térmica superior, durabilidade extra. 2x USB 3.2, 1x Thunderbolt 4 (se mobo suportar).' },
        { id: 'casing-gamer-rgb', name: 'Carcaça Gamer RGB Fusion X', price: 280, stock: 10, performance_score: 20, icon: 'fas fa-gamepad', description_basic: 'Design agressivo, RGB.', description_advanced: 'Compósito com zonas RGB personalizáveis, fluxo de ar otimizado para gaming intenso, múltiplas portas USB 3.2, áudio aprimorado.' },
        { id: 'casing-ultrabook-mag', name: 'Carcaça Ultrabook Magnésio Sky', price: 320, stock: 8, performance_score: 18, icon: 'fas fa-feather-alt', description_basic: 'Ultra fina e leve.', description_advanced: 'Liga de magnésio, perfil <13mm, peso <1.1kg, máxima portabilidade e design sofisticado. 2x USB-C (Thunderbolt opcional).' },
        { id: 'casing-workstation', name: 'Carcaça Workstation Titan Pro', price: 380, stock: 6, performance_score: 22, advanced_only: true, icon: 'fas fa-briefcase', description_basic: 'Durabilidade e expansão.', description_advanced: 'Estrutura reforçada, múltiplas baias internas (se aplicável ao form factor), ventilação robusta, ideal para workstations móveis de alta performance. Suporte a múltiplas conexões I/O.' },
        { id: 'casing-convertible', name: 'Carcaça Convertível Stylus Air', price: 420, stock: 7, performance_score: 16, advanced_only: true, icon: 'fas fa-tablet-alt', description_basic: '2-em-1 com caneta.', description_advanced: 'Dobradiça 360°, tela touch (requer tela compatível), chassi leve e versátil para criatividade. Inclui slot para caneta stylus (caneta opcional).' },
    ],             motherboard: [ 
        { id: 'intel-h610m', name: 'Intel H610M Chipset Mobile', price: 140, platform: 'intel', cpu_socket: 'LGA1700-Mobile', ram_type: 'DDR4', ram_slots: 2, nvme_slots: 1, sata_ports: 2, pcie_gen: 'Gen4', ethernet_speed: '1Gbps', stock: 20, performance_score: 20, basic_only: true, icon: 'fas fa-microchip', description_basic: 'Entrada, DDR4.', description_advanced: 'Chipset H610 para notebooks, 2x DDR4 SO-DIMM (máx 64GB @3200MHz), 1x M.2 PCIe 3.0 x4, 2x SATA III, USB 3.2 Gen1. Ideal para tarefas básicas.' },
        { id: 'intel-b760m-wifi', name: 'Intel B760M Mobile Wi-Fi', price: 220, platform: 'intel', cpu_socket: 'LGA1700-Mobile', ram_type: 'DDR4', ram_slots: 2, nvme_slots: 2, sata_ports: 2, pcie_gen: 'Gen4', ethernet_speed: '2.5Gbps', stock: 15, performance_score: 35, icon: 'fas fa-wifi', description_basic: 'Intermediária, DDR4, Wi-Fi.', description_advanced: 'Chipset B760 para notebooks, 2x DDR4 SO-DIMM (máx 64GB @3200MHz+), 2x M.2 PCIe 4.0 x4, Wi-Fi 6 integrado, Bluetooth 5.2. Bom para jogos e produtividade.' }, 
        { id: 'intel-z790-pro-wifi', name: 'Intel Z790 Pro Mobile Wi-Fi DDR5', price: 380, platform: 'intel', cpu_socket: 'LGA1700-Mobile', ram_type: 'DDR5', ram_slots: 2, nvme_slots: 2, sata_ports: 2, pcie_gen: 'Gen5', ethernet_speed: '2.5Gbps', stock: 10, performance_score: 60, advanced_only: true, icon: 'fas fa-broadcast-tower', description_basic: 'Avançada, DDR5, Wi-Fi 6E.', description_advanced: 'Chipset Z790 para notebooks, 2x DDR5 SO-DIMM (máx 64GB @5600MHz+), 2x M.2 (1x PCIe 5.0 x4, 1x PCIe 4.0 x4), Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4 header. Para notebooks high-end.' },
        { id: 'amd-a620m', name: 'AMD A620M Mobile Chipset', price: 130, platform: 'amd', cpu_socket: 'AM5-Mobile', ram_type: 'DDR5', ram_slots: 2, nvme_slots: 1, sata_ports: 2, pcie_gen: 'Gen4', ethernet_speed: '1Gbps', stock: 18, performance_score: 22, basic_only: true, icon: 'fas fa-microchip', description_basic: 'Entrada AM5, DDR5.', description_advanced: 'Chipset A620 para notebooks AMD, 2x DDR5 SO-DIMM (máx 32GB @5200MHz), 1x M.2 PCIe 4.0 x4, USB 3.2 Gen2. Entrada para notebooks Ryzen 7000/8000.' },
        { id: 'amd-b650m-plus-wifi', name: 'AMD B650M Mobile Plus Wi-Fi', price: 240, platform: 'amd', cpu_socket: 'AM5-Mobile', ram_type: 'DDR5', ram_slots: 2, nvme_slots: 2, sata_ports: 2, pcie_gen: 'Gen4', ethernet_speed: '2.5Gbps', stock: 14, performance_score: 40, icon: 'fas fa-wifi', description_basic: 'Intermediária AM5, DDR5, Wi-Fi.', description_advanced: 'Chipset B650 para notebooks, 2x DDR5 SO-DIMM (máx 64GB @6000MHz+), 2x M.2 (1x PCIe 5.0 x4, 1x PCIe 4.0 x4), Wi-Fi 6E, Bluetooth 5.2. Ótimo custo-benefício para Ryzen móvel.' }, 
        { id: 'amd-x670e-extreme', name: 'AMD X670E Extreme Mobile Gaming', price: 460, platform: 'amd', cpu_socket: 'AM5-Mobile', ram_type: 'DDR5', ram_slots: 2, nvme_slots: 2, sata_ports: 2, pcie_gen: 'Gen5', ethernet_speed: '10Gbps', stock: 7, performance_score: 68, advanced_only: true, icon: 'fas fa-dragon', description_basic: 'High-end AM5, PCIe 5.0.', description_advanced: 'Chipset X670E para notebooks gaming, 2x DDR5 SO-DIMM (suporte a EXPO), Dual M.2 PCIe 5.0, 10GbE LAN, Wi-Fi 7, áudio de alta definição. VRM robusto para notebooks de alto desempenho.' },
    ],            cpu: [ 
        { id: 'intel-i3-13100h', name: 'Intel Core i3-13100H Mobile', price: 320, socket: 'LGA1700-Mobile', performance_score: 40, stock: 25, icon: 'fas fa-brain', description_basic: 'Entrada eficiente (4C/8T).', description_advanced: '4 Cores, 8 Threads, até 4.5GHz. CPU móvel otimizada para notebooks com eficiência energética. Bom para tarefas do dia a dia e navegação.' }, 
        { id: 'intel-i5-13500h', name: 'Intel Core i5-13500H Mobile', price: 520, socket: 'LGA1700-Mobile', performance_score: 65, stock: 20, icon: 'fas fa-brain', description_basic: 'Bom custo-benefício (12C/16T).', description_advanced: '8 Performance-cores + 4 Efficient-cores, 16 Threads, até 4.7GHz. Excelente para notebooks gaming e produtividade.' }, 
        { id: 'intel-i7-13700h', name: 'Intel Core i7-13700H Mobile', price: 880, socket: 'LGA1700-Mobile', performance_score: 85,stock: 10, advanced_only: true, icon: 'fas fa-brain', description_basic: 'Alta performance (16C/24T).', description_advanced: '8 Performance-cores + 8 Efficient-cores, 24 Threads, até 5.0GHz. Perfeito para notebooks gaming high-end e criação de conteúdo.' },
        { id: 'intel-i9-13900h', name: 'Intel Core i9-13900H Mobile', price: 1400, socket: 'LGA1700-Mobile', performance_score: 100, stock: 5, advanced_only: true, icon: 'fas fa-brain', description_basic: 'Performance extrema (20C/28T).', description_advanced: '8 Performance-cores + 12 Efficient-cores, 28 Threads, até 5.4GHz. Máximo desempenho móvel para notebooks workstation e gaming premium.' },
        { id: 'amd-r5-7535h', name: 'AMD Ryzen 5 7535H Mobile', price: 480, socket: 'AM5-Mobile', performance_score: 62, stock: 18, icon: 'fas fa-brain', description_basic: 'Ótimo p/ notebooks (6C/12T).', description_advanced: '6 Cores, 12 Threads, até 4.55GHz. Excelente performance em notebooks com eficiência energética. Ideal para jogos e produtividade.' }, 
        { id: 'amd-r7-7735h', name: 'AMD Ryzen 7 7735H Mobile', price: 750, socket: 'AM5-Mobile', performance_score: 78, stock: 12, icon: 'fas fa-brain', description_basic: 'CPU móvel potente (8C/16T).', description_advanced: '8 Cores, 16 Threads, até 4.75GHz. Ideal para notebooks gaming e criação de conteúdo com ótima eficiência energética.' }, 
        { id: 'amd-r9-7940h', name: 'AMD Ryzen 9 7940H Mobile', price: 1200, socket: 'AM5-Mobile', performance_score: 95, stock: 6, advanced_only: true, icon: 'fas fa-brain', description_basic: 'Gaming mobile máximo (8C/16T).', description_advanced: '8 Cores, 16 Threads, até 5.2GHz. CPU móvel high-end para notebooks gaming premium e workstations móveis.' },
    ],            ram: [                { id: 'ddr4-8gb-3200-1pk', name: '8GB DDR4 3200MHz SO-DIMM (1x8GB)', price: 75, type: 'DDR4', performance_score: 20, stock: 30, icon: 'fas fa-microchip', description_advanced: 'Módulo único de 8GB DDR4 SO-DIMM a 3200MHz. Ideal para tarefas básicas e sistemas de entrada.' }, 
                { id: 'ddr4-16gb-3200-2pk', name: '16GB DDR4 3200MHz SO-DIMM (2x8GB)', price: 130, type: 'DDR4', performance_score: 30, stock: 25, icon: 'fas fa-microchip', description_advanced: 'Kit dual-channel de 16GB (2x8GB) DDR4 SO-DIMM a 3200MHz. Bom para multitarefas e jogos.' }, 
                { id: 'ddr4-32gb-3600-2pk', name: '32GB DDR4 3600MHz SO-DIMM (2x16GB)', price: 250, type: 'DDR4', performance_score: 40, stock: 12,icon: 'fas fa-microchip', description_advanced: 'Kit dual-channel de 32GB (2x16GB) DDR4 SO-DIMM a 3600MHz. Para usuários avançados e multitarefas intensas.' }, 
                { id: 'ddr5-16gb-5200-1pk', name: '16GB DDR5 5200MHz SO-DIMM (1x16GB)', price: 150, type: 'DDR5', performance_score: 38, stock: 22, icon: 'fas fa-microchip', description_advanced: 'Módulo único de 16GB DDR5 SO-DIMM a 5200MHz. Padrão mais recente para melhor largura de banda.' }, 
                { id: 'ddr5-32gb-5600-2pk', name: '32GB DDR5 5600MHz SO-DIMM (2x16GB)', price: 290, type: 'DDR5', performance_score: 55, stock: 18, icon: 'fas fa-microchip', description_advanced: 'Kit dual-channel de 32GB (2x16GB) DDR5 SO-DIMM a 5600MHz. Excelente para gaming e aplicações exigentes.' }, 
                { id: 'ddr5-64gb-6000-2pk', name: '64GB DDR5 6000MHz SO-DIMM (2x32GB)', price: 580, type: 'DDR5', performance_score: 70, stock: 8, advanced_only: true, icon: 'fas fa-microchip', description_advanced: 'Kit dual-channel de 64GB (2x32GB) DDR5 SO-DIMM a 6000MHz. Para notebooks workstation e tarefas que demandam muita memória.' },
            ],            storage: [ 
                { id: 'sata-ssd-500gb', name: 'SSD SATA 500GB Econômico', price: 100, interface: 'SATA', performance_score: 30, stock: 25, icon: 'fas fa-hdd', description_advanced: 'SSD de 500GB com interface SATA III (até 550MB/s). Bom para upgrade de HDDs e sistemas de entrada.' }, 
                { id: 'sata-ssd-1tb', name: 'SSD SATA 1TB Plus', price: 170, interface: 'SATA', performance_score: 35, stock: 20, icon: 'fas fa-hdd', description_advanced: 'SSD de 1TB com interface SATA III. Mais espaço com boa velocidade para o padrão SATA.' }, 
                { id: 'nvme-gen3-512gb', name: 'SSD NVMe 512GB (PCIe 3.0)', price: 130, interface: 'NVMe', pcie_gen: 'Gen3', performance_score: 48, stock: 22, icon: 'fas fa-compact-disc', description_advanced: 'SSD NVMe de 512GB, interface PCIe 3.0 x4 (até 3500MB/s). Velocidade significativamente maior que SATA.' }, 
                { id: 'nvme-gen4-1tb', name: 'SSD NVMe 1TB (PCIe 4.0) Veloz', price: 250, interface: 'NVMe', pcie_gen: 'Gen4', performance_score: 70, stock: 15, icon: 'fas fa-compact-disc', description_advanced: 'SSD NVMe de 1TB, interface PCIe 4.0 x4 (até 7000MB/s). Ideal para jogos, edição de vídeo e SO.' },
                { id: 'nvme-gen4-2tb', name: 'SSD NVMe 2TB (PCIe 4.0) Ultra', price: 420, interface: 'NVMe', pcie_gen: 'Gen4', performance_score: 80, stock: 10, advanced_only: true, icon: 'fas fa-compact-disc', description_advanced: 'SSD NVMe de 2TB, interface PCIe 4.0 x4. Grande capacidade com velocidades altíssimas.' },
                 { id: 'nvme-gen4-512gb', name: 'SSD NVMe 512GB (PCIe 4.0) Rápido', price: 180, interface: 'NVMe', pcie_gen: 'Gen4', performance_score: 65, stock: 10, icon: 'fas fa-compact-disc', description_advanced: 'SSD NVMe de 512GB, interface PCIe 4.0 x4 (até 7000MB/s). Ponto de entrada veloz para sistemas Gen4.' },
                { id: 'nvme-gen5-1tb', name: 'SSD NVMe 1TB (PCIe 5.0) Extreme', price: 380, interface: 'NVMe', pcie_gen: 'Gen5', performance_score: 95, stock: 7, advanced_only: true, icon: 'fas fa-rocket', description_advanced: 'SSD NVMe de 1TB, interface PCIe 5.0 x4 (até 12000MB/s+). Tecnologia de ponta para máxima performance, requer placa-mãe compatível.' },
                { id: 'nvme-gen5-2tb', name: 'SSD NVMe 2TB (PCIe 5.0) Monstro', price: 680, interface: 'NVMe', pcie_gen: 'Gen5', performance_score: 110, stock: 5, advanced_only: true, icon: 'fas fa-rocket', description_advanced: 'SSD NVMe de 2TB, interface PCIe 5.0 x4. Capacidade e velocidade extremas para os usuários mais exigentes.' },
            ],            gpu: [ 
                { id: 'integrated', name: 'GPU Integrada (Processador)', price: 0, pcie_gen: 'N/A', performance_score: 15, stock: 999, icon: 'fas fa-image', description_advanced: 'Utiliza os gráficos integrados ao processador (Intel Iris Xe, AMD Radeon Graphics). Adequada para tarefas básicas, multimídia e jogos muito leves. O desempenho varia conforme a CPU.', tdp: 0 }, 
                { id: 'nvidia-gtx-1650-mobile', name: 'NVIDIA GTX 1650 Mobile (4GB GDDR6)', price: 380, pcie_gen: 'Gen3', performance_score: 40, stock: 12, icon: 'fas fa-gamepad', description_advanced: 'NVIDIA GeForce GTX 1650 para notebooks com 4GB de memória GDDR6. Boa para jogos em 1080p com configurações médias. Eficiência energética otimizada.', tdp: 50 }, 
                { id: 'nvidia-rtx-3050-mobile', name: 'NVIDIA RTX 3050 Mobile (6GB GDDR6)', price: 520, pcie_gen: 'Gen4', performance_score: 58, stock: 15, icon: 'fas fa-gamepad', description_advanced: 'NVIDIA GeForce RTX 3050 Mobile com 6GB GDDR6. Suporte a Ray Tracing e DLSS. Boa para jogos em 1080p (médio-alto) em notebooks.', tdp: 80 }, 
                { id: 'nvidia-rtx-4060-mobile', name: 'NVIDIA RTX 4060 Mobile (8GB GDDR6)', price: 850, pcie_gen: 'Gen4', performance_score: 80, stock: 10, icon: 'fas fa-gamepad', description_advanced: 'NVIDIA GeForce RTX 4060 Mobile com 8GB GDDR6. Arquitetura Ada Lovelace, eficiente e com DLSS 3. Excelente para 1080p/1440p gaming em notebooks.', tdp: 115 },
                { id: 'nvidia-rtx-4070-mobile', name: 'NVIDIA RTX 4070 Mobile (8GB GDDR6X)', price: 1280, pcie_gen: 'Gen4', performance_score: 100, stock: 7, advanced_only: true, icon: 'fas fa-fighter-jet', description_advanced: 'NVIDIA GeForce RTX 4070 Mobile com 8GB GDDR6X. Alto desempenho para notebooks gaming com Ray Tracing e DLSS 3 em 1440p.', tdp: 140 },
                { id: 'nvidia-rtx-4080-mobile', name: 'NVIDIA RTX 4080 Mobile (12GB GDDR6X)', price: 1850, pcie_gen: 'Gen4', performance_score: 130, stock: 3, advanced_only: true, icon: 'fas fa-space-shuttle', description_advanced: 'NVIDIA GeForce RTX 4080 Mobile com 12GB GDDR6X. Performance máxima para notebooks gaming premium, ideal para 1440p/4K gaming com Ray Tracing.', tdp: 175 },
                { id: 'amd-rx-6600m', name: 'AMD RX 6600M Mobile (8GB GDDR6)', price: 450, pcie_gen: 'Gen4', performance_score: 55, stock: 13, icon: 'fas fa-gamepad', description_advanced: 'AMD Radeon RX 6600M com 8GB GDDR6. Placa móvel RDNA2 para jogos em 1080p (médio-alto) com boa eficiência energética.', tdp: 100 }, 
                { id: 'amd-rx-7600m', name: 'AMD RX 7600M Mobile (8GB GDDR6)', price: 720, pcie_gen: 'Gen4', performance_score: 75, stock: 9, icon: 'fas fa-gamepad', description_advanced: 'AMD Radeon RX 7600M com 8GB GDDR6. Arquitetura RDNA3 móvel. Ótima para jogos em 1080p (alto) e bom desempenho em 1440p em notebooks.', tdp: 120 },
                { id: 'amd-rx-7700m', name: 'AMD RX 7700M Mobile (12GB GDDR6)', price: 1100, pcie_gen: 'Gen4', performance_score: 95, stock: 6, advanced_only: true, icon: 'fas fa-fighter-jet', description_advanced: 'AMD Radeon RX 7700M com 12GB GDDR6. Excelente performance em notebooks gaming para 1440p e competente em 4K.', tdp: 150 },
            ],
            display: [ 
                { id: 'disp-15fhd60', name: '15.6" FHD IPS (1920x1080, 60Hz)', price: 200, performance_score: 20, stock: 18, icon: 'fas fa-desktop', description_advanced: 'Tela de 15.6 polegadas, resolução Full HD (1920x1080), painel IPS para boas cores e ângulos de visão, taxa de atualização de 60Hz. Padrão para uso geral.' }, 
                { id: 'disp-15fhd144', name: '15.6" FHD IPS (1920x1080, 144Hz)', price: 320, performance_score: 35, stock: 15, icon: 'fas fa-desktop', description_advanced: 'Tela de 15.6" FHD IPS com alta taxa de atualização de 144Hz para maior fluidez em jogos e movimentos rápidos. Ideal para gamers.' }, 
                { id: 'disp-17qhd165', name: '17.3" QHD IPS (2560x1440, 165Hz)', price: 580, performance_score: 55, stock: 9, advanced_only: true, icon: 'fas fa-desktop', description_advanced: 'Tela maior de 17.3", resolução QHD (2.5K) para maior nitidez, painel IPS e taxa de atualização de 165Hz. Imersiva para jogos e produtividade.' },
                { id: 'disp-16oled4k60', name: '16" OLED 4K (3840x2160, 60Hz)', price: 850, performance_score: 70, stock: 6, advanced_only: true, icon: 'fas fa-palette', description_advanced: 'Tela de 16" com painel OLED para pretos perfeitos e cores vibrantes, resolução 4K UHD. Ideal para criadores de conteúdo (DCI-P3 100%). 60Hz.' }, 
                { id: 'disp-14touch', name: '14" FHD IPS Touchscreen (1920x1080, 60Hz)', price: 400, performance_score: 28, stock: 8, icon: 'fas fa-hand-pointer', description_advanced: 'Tela de 14" FHD IPS com funcionalidade touchscreen. Versátil para navegação e interação direta. Ideal para notebooks 2-em-1 se a carcaça for compatível.' }, 
                { id: 'disp-ultrawide-qhd', name: '15.6" QHD Ultrawide (2560x1080, 120Hz) Curva', price: 700, performance_score: 60, stock: 4, advanced_only: true, icon: 'fas fa-arrows-alt-h', description_advanced: 'Tela de 15.6" com proporção ultrawide e leve curvatura para maior imersão. Resolução QHD estendida e 120Hz. (Nota: Formato incomum para notebooks, mais conceitual).'},
                { id: 'disp-16miniled-qhd240', name: '16" Mini-LED QHD (2560x1440, 240Hz) HDR1000', price: 1100, performance_score: 85, stock: 3, advanced_only: true, icon: 'fas fa-sun', description_advanced: 'Tela de 16" QHD com retroiluminação Mini-LED para alto contraste e brilho (HDR1000). Taxa de atualização de 240Hz para máxima fluidez. Ideal para gaming HDR e profissionais de imagem.'}
            ],
            keyboard: [ 
                { id: 'kbd-membrane-br', name: 'Teclado Membrana ABNT2 Simples', price: 40, performance_score: 5, stock: 25, icon: 'fas fa-keyboard', description_basic: 'Teclado de membrana padrão ABNT2, funcional para digitação do dia a dia. Sem retroiluminação.' }, 
                { id: 'kbd-backlit-br', name: 'Teclado Retroiluminado ABNT2 (Branco)', price: 70, performance_score: 10, stock: 18, icon: 'fas fa-keyboard', description_basic: 'Teclado ABNT2 com retroiluminação LED na cor branca para melhor visibilidade em ambientes escuros.' }, 
                { id: 'kbd-mech-rgb-br', name: 'Teclado Mecânico RGB ABNT2 (Switch Red)', price: 160, performance_score: 22, stock: 11, icon: 'fas fa-keyboard', description_basic: 'Teclado mecânico ABNT2 com switches lineares (ex: Red), retroiluminação RGB por tecla personalizável. Ideal para gamers e digitação responsiva.' },
                { id: 'kbd-lowprofile-rgb', name: 'Teclado Low-Profile RGB ABNT2 Silencioso', price: 200, performance_score: 18, stock: 8, advanced_only: true, icon: 'fas fa-keyboard', description_basic: 'Teclado ABNT2 de perfil baixo, com switches mais silenciosos e atuação rápida. Retroiluminação RGB. Design elegante e confortável.' },
                { id: 'kbd-optical-gamer', name: 'Teclado Óptico Gamer RGB (Resposta Rápida)', price: 280, performance_score: 28, stock: 5, advanced_only: true, icon: 'fas fa-keyboard', description_basic: 'Teclado ABNT2 com switches ópticos para resposta ultra-rápida (menor debounce). Retroiluminação RGB e macros programáveis. Foco em performance competitiva.' },
            ],
            os: [
                { id: 'os-deivios', name: 'Linux DeiviOS (Otimizado)', price: 70, description_basic: 'Leve, rápido e customizado para devs.', description_advanced: 'Base Debian com XFCE, focado em performance e ferramentas de desenvolvimento. Kernel otimizado. Ideal para quem busca controle e eficiência. RAM Mín: 500MB.', storage_impact: '~10GB', ram_min: '500MB', performance_score: 10, stock: 999, icon: 'fab fa-dev' },
                { id: 'os-ubuntu', name: 'Linux Ubuntu Desktop LTS', price: 0, description_basic: 'Popular, amigável e com grande suporte.', description_advanced: 'Versão LTS mais recente. Interface GNOME. Ótimo para iniciantes e usuários que buscam estabilidade e vasta comunidade. Perfis de uso podem ser aplicados.', storage_impact: '~20GB', ram_min: '2GB', performance_score: 8, stock: 999, icon: 'fab fa-ubuntu' },
                { id: 'os-mint', name: 'Linux Mint Cinnamon', price: 0, description_basic: 'Elegante, fácil de usar, codecs inclusos.', description_advanced: 'Base Ubuntu LTS, interface Cinnamon similar ao Windows. Conhecido pela facilidade de uso e codecs multimídia pré-instalados.', storage_impact: '~20GB', ram_min: '1GB', performance_score: 7, stock: 999, icon: 'fab fa-linux' }, 
                { id: 'os-fedora', name: 'Linux Fedora Workstation', price: 0, description_basic: 'Inovador, com software de ponta.', description_advanced: 'Focado em software livre e tecnologias recentes. Interface GNOME padrão. Para entusiastas e desenvolvedores que gostam de novidades.', storage_impact: '~18GB', ram_min: '2GB', performance_score: 9, stock: 999, icon: 'fab fa-fedora' },
                { id: 'os-manjaro', name: 'Linux Manjaro XFCE', price: 0, description_basic: 'Base Arch, amigável e poderoso.', description_advanced: 'Rolling release baseado no Arch Linux, mas com foco na facilidade de uso. XFCE é leve e customizável.', storage_impact: '~15GB', ram_min: '1GB', performance_score: 10, stock: 999, icon: 'fas fa-kiwi-bird' }, 
                { id: 'os-endeavouros', name: 'Linux EndeavourOS (Arch Based)', price: 0, description_basic: 'Arch Linux com instalador amigável.', description_advanced: 'Para quem quer a experiência Arch com uma instalação mais simples. Várias opções de DEs durante a instalação.', storage_impact: '~10GB + DE', ram_min: '1GB', performance_score: 11, stock: 999, icon: 'fas fa-rocket' },
                { id: 'os-win10-home', name: 'Windows 10 Home', price: 50, description_basic: 'Windows estável e conhecido.', description_advanced: 'Ideal para quem prefere a interface e compatibilidade do Windows 10. Perfis de uso (Multimídia, Gamer, Corporativo) e softwares adicionais podem ser solicitados.', storage_impact: '~30GB', ram_min: '2GB', performance_score: 4, stock: 50, icon: 'fab fa-windows' },
                { id: 'os-win11-home', name: 'Windows 11 Home', price: 50, description_basic: 'Interface moderna e novos recursos.', description_advanced: 'Suporte a DirectX 12 Ultimate, ideal para jogos e aplicações gerais. Requisitos de TPM 2.0. Perfis de uso (Multimídia, Gamer, Corporativo) e softwares adicionais podem ser solicitados.', storage_impact: '~30GB', ram_min: '4GB', performance_score: 5, stock: 60, icon: 'fab fa-windows' },
                { id: 'os-win11-pro', name: 'Windows 11 Pro', price: 80, description_basic: 'Recursos avançados para profissionais.', description_advanced: 'Inclui BitLocker, Área de Trabalho Remota, Hyper-V. Para uso corporativo e usuários avançados. Perfis de uso e softwares adicionais podem ser solicitados.', storage_impact: '~32GB', ram_min: '4GB', performance_score: 6, stock: 40, advanced_only: true, icon: 'fab fa-windows' },
                { id: 'os-chromeos-flex', name: 'ChromeOS Flex', price: 0, description_basic: 'Rápido, simples e seguro para nuvem.', description_advanced: 'Baseado na nuvem, inicialização rápida, atualizações automáticas. Perfeito para navegação e apps web em hardware mais modesto.', storage_impact: '~10GB', ram_min: '2GB', performance_score: 2, stock: 999, basic_only: true, icon: 'fab fa-chrome' },
                { id: 'os-brunch-chromeos', name: 'Brunch ChromeOS (Full)', price: 15, description_basic: 'ChromeOS com Play Store e Linux.', description_advanced: 'Framework para instalar ChromeOS em PCs genéricos, habilitando Google Play Store e ambiente Linux (Crostini). Requer mais configuração.', storage_impact: '~25GB', ram_min: '4GB', performance_score: 3, stock: 30, advanced_only: true, icon: 'fab fa-google-play' },
                { id: 'os-none', name: 'Nenhum (Traga sua licença/SO)', price: 0, description_basic: 'Você instala seu próprio SO.', description_advanced: 'Nenhum sistema operacional pré-instalado. Requer que você tenha sua própria licença e mídia de instalação. Ideal para usuários avançados ou com licenças específicas.', storage_impact: '0GB', ram_min: 'N/A', performance_score: 0, stock: 999, icon: 'fas fa-times-circle' }
            ],
            // Adaptador de rede removido pois está integrado na placa mãe
            network_adapter: [],
            battery: [ 
                { id: 'bat-45wh', name: 'Bateria 45Wh (Padrão)', price: 80, performance_score: 5, stock: 20, icon: 'fas fa-battery-half', description_advanced: 'Bateria de íon-lítio com capacidade de 45 Watt-hora. Autonomia padrão para uso leve a moderado.' }, 
                { id: 'bat-60wh', name: 'Bateria 60Wh (Longa Duração)', price: 140, performance_score: 10, stock: 12, icon: 'fas fa-battery-full', description_advanced: 'Bateria de 60Wh para maior autonomia, permitindo mais tempo de uso longe da tomada. Ideal para portabilidade.' },
                { id: 'bat-75wh-pro', name: 'Bateria 75Wh (Profissional)', price: 200, performance_score: 15, stock: 8, advanced_only: true, icon: 'fas fa-battery-full', description_advanced: 'Bateria de alta capacidade (75Wh) para uso profissional prolongado ou sessões de gaming mais longas.' },
                { id: 'bat-99wh-max', name: 'Bateria 99.9Wh (Máx. Voo)', price: 260, performance_score: 20, stock: 6, advanced_only: true, icon: 'fas fa-plane-departure', description_advanced: 'Bateria de 99.9Wh, a maior capacidade permitida em voos comerciais. Máxima autonomia para quem está sempre em movimento.' },
            ],
            peripherals: [ 
                { id: 'peri-mouse-basic', name: 'Mouse Óptico Básico USB', price: 25, performance_score: 2, stock: 25, icon: 'fas fa-mouse', description: 'Mouse óptico com fio, conexão USB, 3 botões. Funcional para navegação.' },
                { id: 'peri-mouse-gamer-rgb', name: 'Mouse Gamer RGB ProSensor', price: 80, performance_score: 8, stock: 15, icon: 'fas fa-mouse-pointer', description: 'Mouse gamer com sensor de alta precisão (DPI ajustável), botões programáveis e iluminação RGB.' },
                { id: 'peri-headset-p2', name: 'Headset P2 Confort com Mic', price: 55, performance_score: 5, stock: 18, icon: 'fas fa-headset', description: 'Headset com conexão P2 (3.5mm), almofadas confortáveis e microfone para chamadas e jogos.' },
                { id: 'peri-headset-usb-71', name: 'Headset USB Gamer 7.1 Surround', price: 130, performance_score: 10, stock: 9, advanced_only: true, icon: 'fas fa-headphones-alt', description: 'Headset gamer USB com som surround virtual 7.1, microfone com cancelamento de ruído e iluminação.' },
                { id: 'peri-webcam-hd', name: 'Webcam HD 720p (Integrada/USB)', price: 60, performance_score: 4, stock: 12, icon: 'fas fa-video', description: 'Webcam com resolução HD 720p. Pode ser integrada à carcaça (se compatível) ou externa via USB.' },
                { id: 'peri-webcam-fhd-pro', name: 'Webcam Full HD 1080p Pro USB com Mic', price: 110, performance_score: 7, stock: 7, advanced_only: true, icon: 'fas fa-camera-retro', description: 'Webcam USB com resolução Full HD 1080p, foco automático e microfone embutido de melhor qualidade.' },
                { id: 'peri-hub-usbc-multi', name: 'Hub USB-C Multiportas Essencial (HDMI, USB-A)', price: 95, performance_score: 3, stock: 10, icon: 'fas fa-plug', description: 'Hub USB-C compacto com saídas HDMI, portas USB-A adicionais e, possivelmente, leitor de cartão.' },
                { id: 'peri-cooler-base-led', name: 'Base Cooler para Notebook com LED', price: 70, performance_score: 6, stock: 8, icon: 'fas fa-fan', description: 'Base refrigeradora com ventoinhas para auxiliar na dissipação de calor do notebook. Iluminação LED.' },
                { id: 'peri-mochila-nb', name: 'Mochila Acolchoada para Notebook até 17"', price: 120, performance_score: 1, stock: 11, icon: 'fas fa-briefcase', description: 'Mochila com compartimento acolchoado para proteger notebooks de até 17 polegadas. Múltiplos bolsos.' },
                { id: 'peri-ssd-externo-500gb', name: 'SSD Externo USB 3.2 500GB Portátil', price: 220, performance_score: 9, stock: 6, icon: 'fas fa-external-link-square-alt', description: 'Unidade SSD externa de 500GB com conexão USB 3.2 para transferências rápidas. Portátil e resistente.' },
            ]
        }; 
        
         const softwareCategories = {
            multimedia: [
                { id: 'sw-vlc', name: 'VLC Media Player', price: 0, description: 'Reprodutor multimídia versátil, suporta quase todos os formatos.', icon: 'fas fa-play-circle', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                { id: 'sw-spotify', name: 'Spotify Desktop', price: 0, description: 'Cliente desktop para streaming de música.', icon: 'fab fa-spotify', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-ubuntu', 'os-mint', 'os-fedora'], stock: 999 },
                { id: 'sw-kodi', name: 'Kodi Media Center', price: 0, description: 'Software de media center de código aberto.', icon: 'fas fa-tv', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint'], stock: 999 },
                { id: 'sw-netflix-app', name: 'App Netflix (Windows)', price: 0, description: 'App da loja para Netflix (requer assinatura).', icon: 'fas fa-film', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro'], stock: 999 },
            ],
            design: [
                { id: 'sw-gimp', name: 'GIMP', price: 0, description: 'Editor de imagens poderoso, alternativa ao Photoshop.', icon: 'fas fa-paint-brush', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                { id: 'sw-blender', name: 'Blender', price: 0, description: 'Suíte de criação 3D: modelagem, animação, renderização.', icon: 'fas fa-cube', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                { id: 'sw-krita', name: 'Krita', price: 0, description: 'Software de pintura digital profissional e gratuito.', icon: 'fas fa-palette', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora'], stock: 999 },
                { id: 'sw-davinciresolve', name: 'DaVinci Resolve (Grátis)', price: 0, description: 'Editor de vídeo profissional com correção de cor avançada.', stock: 999, icon: 'fas fa-video', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-ubuntu', 'os-mint', 'os-fedora'] },
                { id: 'sw-inkscape', name: 'Inkscape', price: 0, description: 'Editor de gráficos vetoriais de código aberto.', icon: 'fas fa-vector-square', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora'], stock: 999 },
            ],
            development: [
                { id: 'sw-vscode', name: 'VS Code', price: 0, description: 'Editor de código fonte popular e extensível.', icon: 'fas fa-code', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                { id: 'sw-git', name: 'Git SCM', price: 0, description: 'Sistema de controle de versão distribuído.', icon: 'fab fa-git-alt', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                { id: 'sw-docker', name: 'Docker Desktop', price: 0, description: 'Plataforma de contêineres Light (pode requerer Pro no Windows).', icon: 'fab fa-docker', os_req: ['os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora'], stock: 999 },
                { id: 'sw-python', name: 'Python (Última Versão)', price: 0, description: 'Linguagem de programação Python e pip.', icon: 'fab fa-python', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                { id: 'sw-nodejs', name: 'Node.js (LTS)', price: 0, description: 'Ambiente de execução JavaScript (Node.js e npm).', icon: 'fab fa-node-js', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
            ],
            productivity: [ // Changed from productivity/corp to productivity/Outros based on target UI
                 { id: 'sw-libreoffice', name: 'LibreOffice Suite', price: 0, description: 'Alternativa gratuita e de código aberto ao Microsoft Office.', icon: 'fas fa-file-alt', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                 { id: 'sw-office365-personal-trial', name: 'Microsoft 365 Personal (Trial 1 Mês)', price: 20, description: 'Word, Excel, PowerPoint, Outlook. Requer ativação.', icon: 'fas fa-file-word', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro'], stock: 999 },
                 { id: 'sw-msoffice-home-student-2021', name: 'Microsoft Office Home & Student 2021', price: 350, description: 'Word, Excel, PowerPoint (Licença Perpétua).', icon: 'fas fa-user-graduate', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro'], stock: 20 },
                 { id: 'sw-qbittorrent', name: 'qBittorrent', price: 0, description: 'Cliente BitTorrent leve, rápido e sem anúncios.', icon: 'fas fa-cloud-download-alt', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
                 { id: 'sw-7zip', name: '7-Zip', price: 0, description: 'Compactador/Descompactador de arquivos gratuito.', icon: 'fas fa-file-archive', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora'], stock: 999 },
                 { id: 'sw-powertoys', name: 'Microsoft PowerToys (Windows)', price: 0, description: 'Conjunto de utilitários para customização e produtividade.', icon: 'fas fa-tools', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro'], stock: 999 },
                 { id: 'sw-steam', name: 'Steam Client', price: 0, description: 'Plataforma de jogos digitais.', icon: 'fab fa-steam', os_req: ['os-win10-home', 'os-win11-home', 'os-win11-pro', 'os-deivios', 'os-ubuntu', 'os-mint', 'os-fedora', 'os-manjaro', 'os-endeavouros'], stock: 999 },
            ]
        };

        const services = [
            { 
                id: 'serv-os-install-win', name: 'Instalação Windows (Home/Pro)', basePrice: 80, 
                description: 'Instalação limpa do Windows 10 ou 11 (licença não inclusa se não adquirida conosco). Inclui drivers básicos e otimizações.',
                details: `<strong>Procedimento:</strong><br>1. Backup de dados (se aplicável, cobrado à parte).<br>2. Formatação da unidade de destino.<br>3. Instalação do Windows a partir de mídia oficial.<br>4. Instalação de drivers essenciais da placa-mãe e componentes.<br>5. Otimizações básicas (inicialização, serviços).<br>6. Ativação do Windows (com chave do cliente ou adquirida).<br><i>Perfis de uso (Multimídia +R$30, Gamer +R$40, Corporativo +R$50) podem ser adicionados.</i>`,
                icon: 'fab fa-windows'
            },
            { 
                id: 'serv-os-install-linux', name: 'Instalação Linux (Ubuntu, Mint, DeiviOS etc.)', basePrice: 70, 
                description: 'Instalação da sua distribuição Linux preferida, com ambiente desktop padrão e drivers.',
                details: `<strong>Procedimento:</strong><br>1. Backup de dados (se aplicável).<br>2. Particionamento adequado (manual ou automático).<br>3. Instalação da distribuição Linux escolhida.<br>4. Configuração de drivers e repositórios.<br>5. Instalação de codecs e apps básicos (se solicitado).<br><i>Dual boot com Windows existente: +R$40.</i>`,
                icon: 'fab fa-linux' 
            },
            {
                id: 'serv-ram-upgrade', name: 'Upgrade de Memória RAM', basePrice: 50,
                description: 'Instalação de novos módulos de RAM (custo do(s) módulo(s) de RAM não incluso).',
                details: `<strong>Procedimento:</strong><br>1. Verificação de compatibilidade (tipo DDR, velocidade, capacidade máxima).<br>2. Abertura segura do notebook.<br>3. Instalação dos novos módulos de RAM nos slots corretos.<br>4. Teste de reconhecimento e estabilidade.<br><u>Custo da RAM a ser adicionado</u>. Ex: 8GB DDR4 ~R$100-150. 16GB DDR5 ~R$200-300. Valores variam.`,
                icon: 'fas fa-microchip'
            },
            {
                id: 'serv-storage-upgrade', name: 'Upgrade de Armazenamento (HDD p/ SSD/NVMe)', basePrice: 70,
                description: 'Substituição ou adição de SSD/NVMe (custo do dispositivo não incluso). Clonagem opcional.',
                details: `<strong>Procedimento:</strong><br>1. Verificação de compatibilidade (SATA, M.2 NVMe/SATA, PCIe Gen).<br>2. Opcional: Clonagem do sistema antigo para o novo SSD (+R$50, se viável tecnicamente).<br>3. Instalação física do novo SSD/NVMe.<br>4. Formatação e inicialização (se instalação limpa) ou verificação da clonagem.<br><u>Custo do SSD/NVMe a ser adicionado</u>. Ex: SSD SATA 1TB ~R$250. NVMe 1TB Gen4 ~R$350. Valores variam.`,
                icon: 'fas fa-hdd'
            },
            {
                id: 'serv-wifi-upgrade', name: 'Upgrade de Adaptador Wi-Fi/Bluetooth', basePrice: 60,
                description: 'Substituição do módulo Wi-Fi/BT por um mais moderno (custo do módulo não incluso).',
                details: `<strong>Procedimento:</strong><br>1. Identificação do módulo atual e compatibilidade do slot (geralmente M.2 A+E Key).<br>2. Remoção cuidadosa do módulo antigo e suas antenas.<br>3. Instalação do novo módulo e reconexão das antenas.<br>4. Instalação de drivers e teste de conexão.<br><u>Custo do módulo a ser adicionado</u>. Ex: Wi-Fi 6/BT5.2 ~R$100-180. Valores variam.`,
                icon: 'fas fa-wifi'
            },
             {
                id: 'serv-internal-cleaning', name: 'Limpeza Interna de Componentes + Pasta Térmica', basePrice: 90,
                description: 'Limpeza de poeira em coolers, dissipadores e placa mãe. Troca de pasta térmica (CPU/GPU).',
                details: `<strong>Procedimento:</strong><br>1. Abertura segura do notebook.<br>2. Remoção de poeira acumulada com ar comprimido e pincéis antiestáticos.<br>3. Limpeza de ventoinhas e saídas de ar.<br>4. Remoção da pasta térmica antiga de CPU e GPU.<br>5. Aplicação de nova pasta térmica de qualidade (ex: Arctic MX-4 ou similar).<br>6. Remontagem e teste de temperaturas.`,
                icon: 'fas fa-broom'
            },
            {
                id: 'serv-data-backup', name: 'Backup de Dados (até 500GB)', basePrice: 80,
                description: 'Backup de seus arquivos pessoais para mídia externa ou nuvem (mídia/armazenamento não incluso).',
                details: `<strong>Procedimento:</strong><br>1. Identificação das pastas e arquivos a serem backupeados (Ex: Documentos, Imagens, Desktop).<br>2. Cópia dos dados para um HD externo do cliente ou para novo dispositivo.<br>3. Verificação básica da integridade do backup.<br>Para volumes maiores ou backup de sistema completo (imagem), valor sob consulta.`,
                icon: 'fas fa-save'
            },
            {
                id: 'serv-consultancy', name: 'Consultoria e Diagnóstico Completo Avançado', basePrice: 120,
                description: 'Análise profunda, testes de stress, identificação de gargalos, relatório detalhado e plano de otimização/upgrade.',
                details: `<strong>Inclui:</strong><br>1. Entrevista para entender necessidades e problemas.<br>2. Testes de hardware (CPU, GPU, RAM, Storage, Temperaturas).<br>3. Análise de software e performance do sistema.<br>4. Identificação de gargalos e possíveis falhas.<br>5. Relatório com diagnóstico e sugestões personalizadas.<br><i>Valor pode ser parcialmente abatido em serviços/produtos adquiridos no mesmo atendimento.</i>`,
                icon: 'fas fa-stethoscope'
            },
            {
                id: 'serv-iptv-test', name: 'Solicitar Teste IPTV Grátis (7 dias)', basePrice: 0,
                description: 'Experimente nosso serviço de IPTV parceiro por 7 dias. Sujeito à disponibilidade e termos.',
                details: `<strong>Como funciona:</strong><br>1. Após selecionar este "serviço", entraremos em contato via WhatsApp.<br>2. Forneceremos as credenciais e instruções para o teste.<br>3. O teste é válido por 7 dias corridos.<br>4. Requer aplicativo compatível (ex: para SmartTV, Celular, TV Box) e boa conexão de internet.<br><i>Este é um teste sem compromisso de um serviço parceiro. A DeiviTech não se responsabiliza pelo conteúdo ou estabilidade do serviço de IPTV.</i>`,
                icon: 'fas fa-tv-alt' // Specific IPTV icon from Font Awesome: fas fa-tv-alt / fas fa-satellite-dish
            }
        ];
        
        const qualityPresets = { 
            0: { 
                name: 'Econômico', platform: 'intel', casing: 'casing-eco', motherboard: 'intel-h610m', cpu: 'intel-i3-13100h',
                ram_type: 'ddr4-8gb-3200-1pk', ram_quantity: 1, storage1_type: 'sata-ssd-500gb', storage2_type: 'none',
                gpu: 'integrated', display: 'disp-15fhd60', keyboard: 'kbd-membrane-br', battery: 'bat-45wh',
                os: 'os-deivios', network_adapter: 'wifi5-bt4', peripherals: [], software: ['sw-libreoffice', 'sw-vlc'], mode_target: 'basic'
            },
            1: { 
                name: 'Balanceado', platform: 'amd', casing: 'casing-silverstone', motherboard: 'amd-b650m-plus-wifi', cpu: 'amd-r5-7535h',
                ram_type: 'ddr5-16gb-5200-1pk', ram_quantity: 1, storage1_type: 'nvme-gen4-1tb', storage2_type: 'none',
                gpu: 'nvidia-rtx-3050-mobile', display: 'disp-15fhd144', keyboard: 'kbd-backlit-br', battery: 'bat-60wh',
                os: 'os-win11-home', network_adapter: 'wifi6-bt5', peripherals: ['peri-mouse-gamer-rgb'], software: ['sw-libreoffice', 'sw-vlc', 'sw-steam'], mode_target: 'basic'
            },
            2: { 
                name: 'Performance', platform: 'intel', casing: 'casing-gamer-rgb', motherboard: 'intel-z790-pro-wifi', cpu: 'intel-i7-13700h',
                ram_type: 'ddr5-32gb-5600-2pk', ram_quantity: 1, storage1_type: 'nvme-gen5-1tb', storage2_type: 'nvme-gen4-1tb',
                gpu: 'nvidia-rtx-4070-mobile', display: 'disp-17qhd165', keyboard: 'kbd-mech-rgb-br', battery: 'bat-75wh-pro',
                os: 'os-win11-pro', network_adapter: 'wifi6e-bt53', peripherals: ['peri-mouse-gamer-rgb', 'peri-headset-usb-71'], software: ['sw-steam', 'sw-davinciresolve', 'sw-blender', 'sw-office365-personal-trial'], mode_target: 'advanced'
            }
        };

        const readyNotebooks = [
            {
                id: 'ready-office-basic', name: 'DeiviTech OfficeStart Linux', hardwarePrice: 310, defaultOsId: 'os-deivios', 
                image: 'https://placehold.co/300x200/7f8c8d/ffffff?text=OfficeStart',
                specs: { platform: 'intel', casing: 'casing-eco', motherboard: 'intel-h610m', cpu: 'intel-i3-13100h', ram_type: 'ddr4-8gb-3200-1pk', ram_quantity: 1, storage1: 'sata-ssd-500gb', gpu: 'integrated', display: 'disp-15fhd60', keyboard: 'kbd-membrane-br', battery: 'bat-45wh' },
                description: "Notebook básico e eficiente para estudos e trabalho com Linux. SSD para agilidade."
            },
            {
                id: 'ready-student-plus-win', name: 'DeiviTech StudentPlus Windows', hardwarePrice: 1600, defaultOsId: 'os-win11-home', 
                image: 'https://placehold.co/300x200/2ecc71/ffffff?text=StudentPlus',
                specs: { platform: 'amd', casing: 'casing-silverstone', motherboard: 'amd-a620m', cpu: 'amd-r5-7535h', ram_type: 'ddr5-16gb-5200-1pk', ram_quantity: 1, storage1: 'nvme-gen3-512gb', gpu: 'integrated', display: 'disp-15fhd60', keyboard: 'kbd-backlit-br', battery: 'bat-60wh'},
                description: "Ideal para estudantes: Portátil, bom desempenho com Ryzen 5, SSD NVMe e Windows 11 Home. Tela Full HD e teclado retroiluminado."
            },
             {
                id: 'ready-devmaster-linux', name: 'DeiviTech DevMaster Linux', hardwarePrice: 2780, defaultOsId: 'os-deivios',
                image: 'https://placehold.co/300x200/1abc9c/ffffff?text=DevMaster+Linux',
                specs: { platform: 'amd', casing: 'casing-pro-alum', motherboard: 'amd-b650m-plus-wifi', cpu: 'amd-r7-7735h', ram_type: 'ddr5-32gb-5600-2pk', ram_quantity: 1, storage1: 'nvme-gen4-1tb', gpu: 'integrated', display: 'disp-15fhd144', keyboard: 'kbd-backlit-br', battery: 'bat-60wh' },
                description: "Potência e leveza para desenvolvedores Linux. CPU AMD Ryzen com NPU, 32GB RAM DDR5 e SSD NVMe rápido. Tela Full HD 144Hz e DeiviOS otimizado."
            },
            {
                id: 'ready-gamer-rtx4060', name: 'DeiviTech GamerBlast RTX4060', hardwarePrice: 4250, defaultOsId: 'os-win11-home',
                image: 'https://placehold.co/300x200/e74c3c/ffffff?text=GamerBlast+4060',
                specs: { platform: 'intel', casing: 'casing-gamer-rgb', motherboard: 'intel-b760m-wifi', cpu: 'intel-i5-13500h', ram_type: 'ddr4-16gb-3200-2pk', ram_quantity: 1, storage1: 'nvme-gen4-1tb', gpu: 'nvidia-rtx-4060-mobile', display: 'disp-15fhd144', keyboard: 'kbd-mech-rgb-br', battery: 'bat-60wh'},
                description: "Domine seus jogos com a RTX 4060 e CPU Intel de 13ª geração. 16GB RAM, SSD NVMe veloz e tela 144Hz para uma experiência fluida."
            },
            { 
                id: 'ready-ultralight-copilot', name: 'DeiviTech Air Copilot+', hardwarePrice: 1500, defaultOsId: 'os-win11-home', // Hardware price is mobo + chip + ram etc.
                image: 'https://placehold.co/300x200/3498db/ecf0f1?text=Air+Copilot%2B',
                specs: { platform: 'arm', casing: 'casing-ultrabook-mag', motherboard: 'custom-arm-copilot', cpu: 'snapdragon-x-elite', ram_type: 'lpddr5x-16gb', ram_quantity: 1, storage1: 'nvme-gen4-512gb', gpu: 'adreno-copilot', display: 'disp-14touch', keyboard: 'kbd-lowprofile-rgb', battery: 'bat-75wh-pro' },
                description: "O futuro da computação móvel com Snapdragon X Elite e NPU. Ultraleve, bateria de longa duração e Windows 11 otimizado para IA. (Modelo conceitual)"
            }
        ];

// HELPER FUNCTIONS
const formatPrice = (price) => `R$ ${Number(price).toFixed(2).replace('.', ',')}`;
        
const getComponentById = (category, id) => {
    if (!id || id === 'none' || id === 'peri-none') return null;
    return components[category]?.find(c => c.id === id) || null;
};

// VALIDAÇÃO DE DADOS - NOVAS FUNÇÕES
function validateComponentCompatibility() {
    const errors = [];
    const warnings = [];
    
    // 1. Validação de compatibilidade CPU/Motherboard
    if (selectedComponents.cpu && selectedComponents.motherboard) {
        const cpu = getComponentById('cpu', selectedComponents.cpu);
        const mobo = getComponentById('motherboard', selectedComponents.motherboard);
        
        if (cpu && mobo) {
            if (cpu.socket !== mobo.cpu_socket) {
                errors.push(`❌ CPU ${cpu.name} não é compatível com a placa-mãe ${mobo.name} (socket ${cpu.socket} vs ${mobo.cpu_socket})`);
            }
        }
    }
    
    // 2. Validação de compatibilidade RAM/Motherboard
    if (selectedComponents.ram.type && selectedComponents.motherboard) {
        const ram = getComponentById('ram', selectedComponents.ram.type);
        const mobo = getComponentById('motherboard', selectedComponents.motherboard);
        
        if (ram && mobo) {
            if (ram.type !== mobo.ram_type) {
                errors.push(`❌ Memória ${ram.name} não é compatível com a placa-mãe ${mobo.name} (${ram.type} vs ${mobo.ram_type})`);
            }
            
            if (selectedComponents.ram.quantity > mobo.ram_slots) {
                errors.push(`❌ Quantidade de módulos RAM (${selectedComponents.ram.quantity}) excede os slots disponíveis na placa-mãe (${mobo.ram_slots})`);
            }
        }
    }
    
    // 3. Validação de requisitos de energia (PSU)
    const totalPowerDraw = calculatePowerConsumption();
    if (totalPowerDraw > 0) {
        // Nota: Como não temos seleção de PSU ainda, apenas warning
        if (totalPowerDraw > 300) { // Threshold básico
            warnings.push(`⚠️ Consumo estimado de ${totalPowerDraw}W - considere fonte de alimentação adequada`);
        }
    }
    
    // 4. Validação de compatibilidade GPU/PCIe
    if (selectedComponents.gpu && selectedComponents.motherboard) {
        const gpu = getComponentById('gpu', selectedComponents.gpu);
        const mobo = getComponentById('motherboard', selectedComponents.motherboard);
        
        if (gpu && mobo && gpu.pcie_gen && mobo.pcie_gen) {
            const gpuGen = parseInt(gpu.pcie_gen.replace('Gen', ''));
            const moboGen = parseInt(mobo.pcie_gen.replace('Gen', ''));
            
            if (gpuGen > moboGen) {
                warnings.push(`⚠️ GPU ${gpu.name} requer PCIe ${gpu.pcie_gen}, mas placa-mãe suporta apenas ${mobo.pcie_gen}`);
            }
        }
    }
    
    // 5. Validação de slots de armazenamento
    if (selectedComponents.storage1.type && selectedComponents.motherboard) {
        const storage = getComponentById('storage', selectedComponents.storage1.type);
        const mobo = getComponentById('motherboard', selectedComponents.motherboard);
        
        if (storage && mobo) {
            if (storage.interface === 'NVMe' && mobo.nvme_slots < 1) {
                errors.push(`❌ Armazenamento ${storage.name} requer slot NVMe, mas placa-mãe não possui`);
            }
        }
    }
    
    return { errors, warnings };
}

function calculatePowerConsumption() {
    let totalWatts = 0;
    
    // CPU TDP
    if (selectedComponents.cpu) {
        const cpu = getComponentById('cpu', selectedComponents.cpu);
        if (cpu && cpu.tdp) totalWatts += cpu.tdp;
        else totalWatts += 65; // TDP médio estimado
    }
    
    // GPU TDP
    if (selectedComponents.gpu) {
        const gpu = getComponentById('gpu', selectedComponents.gpu);
        if (gpu && gpu.tdp) totalWatts += gpu.tdp;
        else if (selectedComponents.gpu !== 'integrated') totalWatts += 150; // TDP médio para GPUs dedicadas
    }
    
    // Outros componentes (estimativa)
    totalWatts += 50; // Mobo, RAM, storage, etc.
    
    return totalWatts;
}

// SISTEMA DE PREÇOS DINÂMICOS
function calculateComponentPrices() {
    let totalHardware = 0;
    let totalSoftware = 0;
    let totalServices = 0;
    
    // Calcular hardware
    Object.entries(selectedComponents).forEach(([category, value]) => {
        if (value && typeof value === 'string' && value !== 'none') {
            const component = getComponentById(category, value);
            if (component && component.price) {
                totalHardware += component.price;
            }
        } else if (category === 'ram' && value && value.type) {
            const ram = getComponentById('ram', value.type);
            if (ram && ram.price) {
                totalHardware += ram.price * (value.quantity || 1);
            }
        }
    });
    
    // Calcular software
    if (selectedComponents.software && Array.isArray(selectedComponents.software)) {
        selectedComponents.software.forEach(softwareId => {
            // Procurar em todas as categorias de software
            Object.values(softwareCategories).forEach(category => {
                const software = category.find(s => s.id === softwareId);
                if (software && software.price) {
                    totalSoftware += software.price;
                }
            });
        });
    }
    
    // Calcular serviços
    if (selectedServices && Array.isArray(selectedServices)) {
        selectedServices.forEach(serviceId => {
            const service = services.find(s => s.id === serviceId);
            if (service && service.basePrice) {
                totalServices += service.basePrice;
            }
        });
    }
    
    return { totalHardware, totalSoftware, totalServices };
}

function calculateDynamicMarkup() {
    let markupPercentage = 0;
    let performanceScore = 0;
    let complexityMultiplier = 1;
    
    // Calcular score de performance total
    Object.entries(selectedComponents).forEach(([category, value]) => {
        if (value && typeof value === 'string' && value !== 'none') {
            const component = getComponentById(category, value);
            if (component && component.performance_score) {
                performanceScore += component.performance_score;
            }
        } else if (category === 'ram' && value && value.type) {
            const ram = getComponentById('ram', value.type);
            if (ram && ram.performance_score) {
                performanceScore += ram.performance_score * (value.quantity || 1);
            }
        }
    });
    
    // Markup baseado na performance
    if (performanceScore < 50) {
        markupPercentage = 15; // Básico - markup menor
    } else if (performanceScore < 100) {
        markupPercentage = 25; // Intermediário
    } else if (performanceScore < 150) {
        markupPercentage = 35; // Avançado
    } else {
        markupPercentage = 45; // Premium
    }
    
    // Multiplicador de complexidade
    const componentCount = Object.values(selectedComponents).filter(v => v && v !== 'none').length;
    if (componentCount > 8) complexityMultiplier = 1.1; // Configuração complexa
    if (componentCount > 10) complexityMultiplier = 1.2; // Muito complexa
    
    // Bonus para configurações balanceadas
    const hasCpu = selectedComponents.cpu;
    const hasGpu = selectedComponents.gpu && selectedComponents.gpu !== 'integrated';
    const hasGoodRam = selectedComponents.ram && selectedComponents.ram.type && 
                      getComponentById('ram', selectedComponents.ram.type)?.performance_score > 30;
    
    if (hasCpu && hasGpu && hasGoodRam && performanceScore > 80) {
        complexityMultiplier *= 0.95; // Desconto para configurações bem balanceadas
    }
    
    return { markupPercentage, complexityMultiplier, performanceScore };
}

function calculateFinalPrice() {
    const { totalHardware, totalSoftware, totalServices } = calculateComponentPrices();
    const { markupPercentage, complexityMultiplier } = calculateDynamicMarkup();
    
    // Calcular markup sobre hardware
    const hardwareMarkup = totalHardware * (markupPercentage / 100);
    const finalHardware = (totalHardware + hardwareMarkup) * complexityMultiplier;
    
    // Software e serviços sem markup adicional
    const finalSoftware = totalSoftware;
    const finalServices = totalServices;
    
    // Aplicar desconto trade-in
    const tradeInDiscount = tradeInCredit || 0;
    
    const subtotal = finalHardware + finalSoftware + finalServices;
    const total = Math.max(0, subtotal - tradeInDiscount);
    
    return {
        hardware: finalHardware,
        software: finalSoftware,
        services: finalServices,
        subtotal: subtotal,
        tradeInDiscount: tradeInDiscount,
        total: total,
        markupAmount: hardwareMarkup,
        markupPercentage: markupPercentage,
        complexityMultiplier: complexityMultiplier
    };
}

function updatePriceDisplay() {
    const priceBreakdown = calculateFinalPrice();
    
    // Atualizar elementos na interface
    const hardwarePriceEl = document.getElementById('hardware-price');
    const softwarePriceEl = document.getElementById('software-price');
    const servicesPriceEl = document.getElementById('services-price');
    const subtotalPriceEl = document.getElementById('subtotal-price');
    const tradeInDiscountEl = document.getElementById('tradein-discount');
    const totalPriceEl = document.getElementById('total-price');
    
    if (hardwarePriceEl) hardwarePriceEl.textContent = formatPrice(priceBreakdown.hardware);
    if (softwarePriceEl) softwarePriceEl.textContent = formatPrice(priceBreakdown.software);
    if (servicesPriceEl) servicesPriceEl.textContent = formatPrice(priceBreakdown.services);
    if (subtotalPriceEl) subtotalPriceEl.textContent = formatPrice(priceBreakdown.subtotal);
    if (tradeInDiscountEl) tradeInDiscountEl.textContent = formatPrice(priceBreakdown.tradeInDiscount);
    if (totalPriceEl) totalPriceEl.textContent = formatPrice(priceBreakdown.total);
    
    // Atualizar informações de markup (se houver elementos na UI)
    const markupInfoEl = document.getElementById('markup-info');
    if (markupInfoEl) {
        markupInfoEl.innerHTML = `
            <small class="text-muted">
                Markup: ${priceBreakdown.markupPercentage}% | 
                Complexidade: ${priceBreakdown.complexityMultiplier.toFixed(2)}x
            </small>
        `;
    }
    
    console.log('💰 Preços atualizados:', priceBreakdown);
}

function validateDataIntegrity() {
    const issues = [];
    
    // Verificar se componentes obrigatórios estão selecionados
    const requiredComponents = ['platform', 'motherboard', 'cpu'];
    requiredComponents.forEach(comp => {
        if (!selectedComponents[comp]) {
            issues.push(`Componente obrigatório não selecionado: ${comp}`);
        }
    });
    
    // Verificar estoque
    Object.entries(selectedComponents).forEach(([category, value]) => {
        if (value && typeof value === 'string' && value !== 'none') {
            const component = getComponentById(category, value);
            if (component && component.stock !== undefined && component.stock <= 0) {
                issues.push(`Componente fora de estoque: ${component.name}`);
            }
        }
    });
    
    return issues;
}

function showValidationMessages() {
    const { errors, warnings } = validateComponentCompatibility();
    const dataIssues = validateDataIntegrity();
    
    // Limpar mensagens anteriores
    const existingMessages = document.querySelectorAll('.validation-message');
    existingMessages.forEach(msg => msg.remove());
    
    const container = document.getElementById('configure-tab-content') || document.body;
    
    // Mostrar erros críticos
    if (errors.length > 0) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'validation-message error-message';
        errorDiv.innerHTML = `
            <div class="alert alert-danger">
                <h4><i class="fas fa-exclamation-triangle"></i> Problemas de Compatibilidade Detectados:</h4>
                <ul>${errors.map(err => `<li>${err}</li>`).join('')}</ul>
            </div>
        `;
        container.insertBefore(errorDiv, container.firstChild);
    }
    
    // Mostrar warnings
    if (warnings.length > 0) {
        const warningDiv = document.createElement('div');
        warningDiv.className = 'validation-message warning-message';
        warningDiv.innerHTML = `
            <div class="alert alert-warning">
                <h4><i class="fas fa-exclamation-circle"></i> Avisos de Compatibilidade:</h4>
                <ul>${warnings.map(warn => `<li>${warn}</li>`).join('')}</ul>
            </div>
        `;
        container.insertBefore(warningDiv, container.firstChild);
    }
    
    // Mostrar problemas de dados
    if (dataIssues.length > 0) {
        const dataDiv = document.createElement('div');
        dataDiv.className = 'validation-message data-message';
        dataDiv.innerHTML = `
            <div class="alert alert-info">
                <h4><i class="fas fa-info-circle"></i> Verificações de Dados:</h4>
                <ul>${dataIssues.map(issue => `<li>${issue}</li>`).join('')}</ul>
            </div>
        `;
        container.insertBefore(dataDiv, container.firstChild);
    }
}

// SISTEMA DE PREÇOS DINÂMICOS - ATUALIZAÇÃO DA INTERFACE
function updatePriceDisplay() {
    try {
        const priceBreakdown = calculateFinalPrice();
        
        // Atualizar elementos na interface
        const hardwarePriceEl = document.getElementById('hardware-price');
        const softwarePriceEl = document.getElementById('software-price');
        const servicesPriceEl = document.getElementById('services-price');
        const subtotalPriceEl = document.getElementById('subtotal-price');
        const tradeInDiscountEl = document.getElementById('tradein-discount');
        const totalPriceEl = document.getElementById('total-price');
        
        if (hardwarePriceEl) hardwarePriceEl.textContent = formatPrice(priceBreakdown.hardware);
        if (softwarePriceEl) softwarePriceEl.textContent = formatPrice(priceBreakdown.software);
        if (servicesPriceEl) servicesPriceEl.textContent = formatPrice(priceBreakdown.services);
        if (subtotalPriceEl) subtotalPriceEl.textContent = formatPrice(priceBreakdown.subtotal);
        if (tradeInDiscountEl) tradeInDiscountEl.textContent = formatPrice(priceBreakdown.tradeInDiscount);
        if (totalPriceEl) totalPriceEl.textContent = formatPrice(priceBreakdown.total);
        
        // Atualizar informações de markup (se houver elementos na UI)
        const markupInfoEl = document.getElementById('markup-info');
        if (markupInfoEl) {
            markupInfoEl.innerHTML = `
                <small class="text-muted">
                    Markup: ${priceBreakdown.markupPercentage}% | 
                    Complexidade: ${priceBreakdown.complexityMultiplier.toFixed(2)}x
                </small>
            `;
        }
        
        console.log('💰 Preços atualizados:', priceBreakdown);
    } catch (error) {
        console.error('❌ Erro ao atualizar preços:', error);
        showErrorMessage('Erro ao calcular preços. Verifique a configuração.');
    }
}

// SISTEMA DE PERSISTÊNCIA COM LOCALSTORAGE
function saveConfiguration() {
    try {
        const config = {
            selectedComponents: selectedComponents,
            selectedServices: selectedServices,
            tradeInCredit: tradeInCredit,
            currentMode: currentMode,
            currentPresetName: currentPresetName,
            activeTab: activeTab,
            currentSoftwareTab: currentSoftwareTab,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('notebookConfig', JSON.stringify(config));
        console.log('💾 Configuração salva no localStorage');
        
        showSuccessMessage('Configuração salva com sucesso!');
        
    } catch (error) {
        console.error('❌ Erro ao salvar configuração:', error);
        showErrorMessage('Erro ao salvar configuração. Verifique o espaço disponível no navegador.');
    }
}

function loadConfiguration() {
    try {
        const savedConfig = localStorage.getItem('notebookConfig');
        if (savedConfig) {
            const config = JSON.parse(savedConfig);
            
            // Restaurar estado
            selectedComponents = { ...selectedComponents, ...config.selectedComponents };
            selectedServices = config.selectedServices || [];
            tradeInCredit = config.tradeInCredit || 0;
            currentMode = config.currentMode || 'basic';
            currentPresetName = config.currentPresetName || "Balanceado";
            activeTab = config.activeTab || 'configure';
            currentSoftwareTab = config.currentSoftwareTab || 'multimedia';
            
            console.log('📂 Configuração carregada do localStorage:', config.timestamp);
            
            showSuccessMessage('Configuração carregada com sucesso!');
            
            // Atualizar interface
            setTimeout(() => {
                updateUIFromConfiguration();
                showValidationMessages();
                updatePriceDisplay();
            }, 500);
            
            return true;
        }
    } catch (error) {
        console.error('❌ Erro ao carregar configuração:', error);
        showErrorMessage('Erro ao carregar configuração salva.');
    }
    return false;
}

function clearConfiguration() {
    try {
        localStorage.removeItem('notebookConfig');
        
        // Resetar para valores padrão
        selectedComponents = {
            platform: null, casing: null, motherboard: null, cpu: null,
            ram: { type: null, quantity: 1 },
            storage1: { type: null }, storage2: { type: 'none' },
            gpu: null, display: null, keyboard: null, os: null,
            os2: null, dualboot_disk: 'same',
            network_adapter: null, battery: null,
            peripherals: [],
            software: []
        };
        selectedServices = [];
        tradeInCredit = 0;
        currentMode = 'basic';
        currentPresetName = "Balanceado";
        activeTab = 'configure';
        currentSoftwareTab = 'multimedia';
        
        console.log('🗑️ Configuração limpa');
        
        showSuccessMessage('Configuração limpa com sucesso!');
        
        // Atualizar interface
        updateUIFromConfiguration();
        showValidationMessages();
        updatePriceDisplay();
        
    } catch (error) {
        console.error('❌ Erro ao limpar configuração:', error);
        showErrorMessage('Erro ao limpar configuração.');
    }
}

function updateUIFromConfiguration() {
    try {
        // Atualizar modo (basic/advanced)
        const modeToggle = document.getElementById('mode-toggle');
        if (modeToggle) {
            modeToggle.checked = currentMode === 'advanced';
        }
        
        // Atualizar aba ativa (simulação)
        const tabs = document.querySelectorAll('[data-tab]');
        tabs.forEach(tab => {
            if (tab.getAttribute('data-tab') === activeTab) {
                tab.click();
            }
        });
        
        console.log('🔄 Interface atualizada baseada na configuração');
    } catch (error) {
        console.error('❌ Erro ao atualizar interface:', error);
    }
}

function showErrorMessage(message) {
    try {
        let errorContainer = document.getElementById('global-error-container');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = 'global-error-container';
            errorContainer.className = 'alert alert-danger position-fixed';
            errorContainer.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px;';
            document.body.appendChild(errorContainer);
        }
        
        errorContainer.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i> ${message}
            <button type="button" class="btn-close" onclick="this.parentElement.style.display='none'"></button>
        `;
        errorContainer.style.display = 'block';
        
        // Auto-hide após 5 segundos
        setTimeout(() => {
            if (errorContainer) errorContainer.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        console.error('❌ Erro ao mostrar mensagem de erro:', error);
        alert(message); // Fallback
    }
}

function showSuccessMessage(message) {
    try {
        let successContainer = document.getElementById('global-success-container');
        if (!successContainer) {
            successContainer = document.createElement('div');
            successContainer.id = 'global-success-container';
            successContainer.className = 'alert alert-success position-fixed';
            successContainer.style.cssText = 'top: 20px; right: 20px; z-index: 9999; max-width: 400px;';
            document.body.appendChild(successContainer);
        }
        
        successContainer.innerHTML = `
            <i class="fas fa-check-circle"></i> ${message}
            <button type="button" class="btn-close" onclick="this.parentElement.style.display='none'"></button>
        `;
        successContainer.style.display = 'block';
        
        setTimeout(() => {
            if (successContainer) successContainer.style.display = 'none';
        }, 3000);
        
    } catch (error) {
        console.log('✅', message);
    }
}

// INICIALIZAÇÃO E EVENTOS GLOBAIS
document.addEventListener('DOMContentLoaded', function() {
    // Carregar configuração salva
    loadConfiguration();
    
    // Validação inicial e preços
    setTimeout(() => {
        showValidationMessages();
        updatePriceDisplay();
    }, 1000);
    
    // Adicionar validação e atualização de preços em tempo real (debounced)
    let updateTimeout;
    function debouncedUpdate() {
        clearTimeout(updateTimeout);
        updateTimeout = setTimeout(() => {
            showValidationMessages();
            updatePriceDisplay();
        }, 500);
    }
    
    // Observar mudanças nos componentes selecionados
    const observer = new MutationObserver(debouncedUpdate);
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'checked']
    });
    
    // Event listeners para botões de persistência
    const saveButton = document.getElementById('save-config-button');
    if (saveButton) {
        saveButton.addEventListener('click', saveConfiguration);
    }
    
    const loadButton = document.getElementById('load-config-button');
    if (loadButton) {
        loadButton.addEventListener('click', loadConfiguration);
    }
    
    const clearButton = document.getElementById('clear-config-button');
    if (clearButton) {
        clearButton.addEventListener('click', clearConfiguration);
    }
    
    // Auto-save a cada 30 segundos se houver mudanças
    let lastConfigHash = '';
    setInterval(() => {
        try {
            const currentConfig = JSON.stringify({
                selectedComponents,
                selectedServices,
                tradeInCredit
            });
            if (currentConfig !== lastConfigHash && lastConfigHash !== '') {
                saveConfiguration();
                lastConfigHash = currentConfig;
            } else if (lastConfigHash === '') {
                lastConfigHash = currentConfig;
            }
        } catch (error) {
            console.error('❌ Erro no auto-save:', error);
        }
    }, 30000);
    
    // Validação manual e atualização de preços ao clicar no botão de finalizar
    const finalizeButton = document.getElementById('finalize-config-button');
    if (finalizeButton) {
        finalizeButton.addEventListener('click', function(e) {
            const { errors } = validateComponentCompatibility();
            if (errors.length > 0) {
                e.preventDefault();
                alert('Por favor, corrija os problemas de compatibilidade antes de finalizar o pedido.');
                showValidationMessages();
                return false;
            }
            
            // Salvar configuração antes de finalizar
            saveConfiguration();
            
            // Atualizar preços finais
            updatePriceDisplay();
        });
    }
    
    console.log('✅ Sistema completo inicializado: validação, preços dinâmicos e persistência');
});

// ...existing code...