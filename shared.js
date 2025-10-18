// Dados compartilhados
const componentData = {
    processors: [
        { id: 'i3-12100', name: 'Intel Core i3-12100', price: 1200, performance: 75, energy: 65, cores: 4, threads: 8, baseClock: '3.3GHz', boostClock: '4.3GHz' },
        { id: 'i5-12400', name: 'Intel Core i5-12400', price: 1500, performance: 85, energy: 70, cores: 6, threads: 12, baseClock: '2.5GHz', boostClock: '4.4GHz' },
        { id: 'i7-12700', name: 'Intel Core i7-12700', price: 2000, performance: 95, energy: 75, cores: 12, threads: 20, baseClock: '2.1GHz', boostClock: '4.9GHz' },
        { id: 'r5-5600g', name: 'AMD Ryzen 5 5600G', price: 1400, performance: 80, energy: 60, cores: 6, threads: 12, baseClock: '3.9GHz', boostClock: '4.4GHz' },
        { id: 'r7-5700g', name: 'AMD Ryzen 7 5700G', price: 1800, performance: 90, energy: 65, cores: 8, threads: 16, baseClock: '3.8GHz', boostClock: '4.6GHz' },
        { id: 'r9-5900x', name: 'AMD Ryzen 9 5900X', price: 2500, performance: 100, energy: 80, cores: 12, threads: 24, baseClock: '3.7GHz', boostClock: '4.8GHz' }
    ],
    graphics: [
        { id: 'gtx1650', name: 'NVIDIA GTX 1650', price: 800, performance: 70, energy: 75, vram: '4GB GDDR6', baseClock: '1485MHz', boostClock: '1665MHz' },
        { id: 'rtx3050', name: 'NVIDIA RTX 3050', price: 1200, performance: 80, energy: 80, vram: '8GB GDDR6', baseClock: '1552MHz', boostClock: '1777MHz' },
        { id: 'rtx3060', name: 'NVIDIA RTX 3060', price: 1600, performance: 90, energy: 85, vram: '12GB GDDR6', baseClock: '1320MHz', boostClock: '1777MHz' },
        { id: 'rtx3070', name: 'NVIDIA RTX 3070', price: 2000, performance: 95, energy: 90, vram: '8GB GDDR6', baseClock: '1500MHz', boostClock: '1725MHz' },
        { id: 'rx6600', name: 'AMD RX 6600', price: 1000, performance: 75, energy: 70, vram: '8GB GDDR6', baseClock: '1626MHz', boostClock: '2491MHz' },
        { id: 'rx6700xt', name: 'AMD RX 6700 XT', price: 1400, performance: 85, energy: 75, vram: '12GB GDDR6', baseClock: '2321MHz', boostClock: '2581MHz' }
    ],
    ram: [
        { id: '8gb-ddr4', name: '8GB DDR4-3200', price: 200, performance: 60, energy: 50, capacity: '8GB', speed: '3200MHz', latency: 'CL16' },
        { id: '16gb-ddr4', name: '16GB DDR4-3200', price: 350, performance: 75, energy: 55, capacity: '16GB', speed: '3200MHz', latency: 'CL16' },
        { id: '32gb-ddr4', name: '32GB DDR4-3200', price: 600, performance: 90, energy: 60, capacity: '32GB', speed: '3200MHz', latency: 'CL16' },
        { id: '16gb-ddr5', name: '16GB DDR5-4800', price: 450, performance: 85, energy: 65, capacity: '16GB', speed: '4800MHz', latency: 'CL32' },
        { id: '32gb-ddr5', name: '32GB DDR5-4800', price: 800, performance: 95, energy: 70, capacity: '32GB', speed: '4800MHz', latency: 'CL32' }
    ],
    storage: [
        { id: 'ssd-256gb', name: 'SSD NVMe 256GB', price: 150, performance: 70, energy: 40, capacity: '256GB', type: 'NVMe', readSpeed: '3500MB/s', writeSpeed: '3000MB/s' },
        { id: 'ssd-512gb', name: 'SSD NVMe 512GB', price: 250, performance: 80, energy: 45, capacity: '512GB', type: 'NVMe', readSpeed: '3500MB/s', writeSpeed: '3200MB/s' },
        { id: 'ssd-1tb', name: 'SSD NVMe 1TB', price: 400, performance: 90, energy: 50, capacity: '1TB', type: 'NVMe', readSpeed: '3500MB/s', writeSpeed: '3300MB/s' },
        { id: 'ssd-2tb', name: 'SSD NVMe 2TB', price: 700, performance: 95, energy: 55, capacity: '2TB', type: 'NVMe', readSpeed: '3500MB/s', writeSpeed: '3400MB/s' },
        { id: 'hdd-1tb', name: 'HDD 1TB 7200RPM', price: 200, performance: 30, energy: 35, capacity: '1TB', type: 'HDD', readSpeed: '160MB/s', writeSpeed: '160MB/s' }
    ]
};

const presetConfigurations = {
    'office-basic': {
        name: 'Escritório Básico',
        description: 'Para tarefas do dia a dia',
        components: {
            processor: 'i3-12100',
            graphics: 'gtx1650',
            ram: '8gb-ddr4',
            storage: 'ssd-256gb'
        }
    },
    'office-advanced': {
        name: 'Escritório Avançado',
        description: 'Para trabalho intensivo',
        components: {
            processor: 'i5-12400',
            graphics: 'rtx3050',
            ram: '16gb-ddr4',
            storage: 'ssd-512gb'
        }
    },
    'gaming-basic': {
        name: 'Gaming Básico',
        description: 'Para jogos casuais',
        components: {
            processor: 'r5-5600g',
            graphics: 'rtx3050',
            ram: '16gb-ddr4',
            storage: 'ssd-512gb'
        }
    },
    'gaming-advanced': {
        name: 'Gaming Avançado',
        description: 'Para jogos AAA em alta qualidade',
        components: {
            processor: 'r7-5700g',
            graphics: 'rtx3060',
            ram: '32gb-ddr4',
            storage: 'ssd-1tb'
        }
    },
    'creator-basic': {
        name: 'Criação Básica',
        description: 'Para edição básica de vídeo/foto',
        components: {
            processor: 'i7-12700',
            graphics: 'rtx3060',
            ram: '32gb-ddr4',
            storage: 'ssd-1tb'
        }
    },
    'creator-professional': {
        name: 'Criação Profissional',
        description: 'Para produção profissional',
        components: {
            processor: 'r9-5900x',
            graphics: 'rtx3070',
            ram: '32gb-ddr5',
            storage: 'ssd-2tb'
        }
    }
};

// Funções compartilhadas
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    updateDarkModeButton();
}

function updateDarkModeButton() {
    const button = document.querySelector('.dark-mode-toggle');
    if (button) {
        const isDark = document.body.classList.contains('dark-mode');
        button.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

function loadDarkModePreference() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeButton();
}

function showTab(tabId) {
    // Esconder todas as abas
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Mostrar aba selecionada
    const selectedTab = document.getElementById(tabId);
    const selectedButton = document.querySelector(`[onclick="showTab('${tabId}')"]`);

    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    if (selectedButton) {
        selectedButton.classList.add('active');
    }
}

function animateOnScroll() {
    const elements = document.querySelectorAll('.ready-notebook-card, .service-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
}

function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
}

function calculateTotalPrice(components) {
    let total = 0;
    Object.values(components).forEach(componentId => {
        // Procurar em todas as categorias
        for (const category in componentData) {
            const component = componentData[category].find(c => c.id === componentId);
            if (component) {
                total += component.price;
                break;
            }
        }
    });
    return total;
}

function getComponentById(id) {
    for (const category in componentData) {
        const component = componentData[category].find(c => c.id === id);
        if (component) return component;
    }
    return null;
}

function updateSummary() {
    const summaryElement = document.getElementById('configuration-summary');
    if (!summaryElement) return;

    const selectedComponents = {
        processor: document.querySelector('input[name="processor"]:checked')?.value,
        graphics: document.querySelector('input[name="graphics"]:checked')?.value,
        ram: document.querySelector('input[name="ram"]:checked')?.value,
        storage: document.querySelector('input[name="storage"]:checked')?.value
    };

    let summaryHTML = '<h3>Resumo da Configuração</h3>';
    let totalPrice = 0;

    Object.entries(selectedComponents).forEach(([category, componentId]) => {
        if (componentId) {
            const component = getComponentById(componentId);
            if (component) {
                summaryHTML += `
                    <div class="summary-item">
                        <i class="fas fa-${getCategoryIcon(category)}"></i>
                        <span class="summary-item-name">${component.name}</span>
                        <span class="price-text">${formatCurrency(component.price)}</span>
                    </div>
                `;
                totalPrice += component.price;
            }
        }
    });

    summaryHTML += `
        <hr>
        <div class="summary-item">
            <strong>Total: ${formatCurrency(totalPrice)}</strong>
        </div>
    `;

    summaryElement.innerHTML = summaryHTML;
}

function getCategoryIcon(category) {
    const icons = {
        processor: 'microchip',
        graphics: 'desktop',
        ram: 'memory',
        storage: 'hdd'
    };
    return icons[category] || 'cog';
}

function loadPreset(presetId) {
    const preset = presetConfigurations[presetId];
    if (!preset) return;

    // Selecionar componentes do preset
    Object.entries(preset.components).forEach(([category, componentId]) => {
        const radio = document.querySelector(`input[name="${category}"][value="${componentId}"]`);
        if (radio) {
            radio.checked = true;
        }
    });

    // Atualizar resumo
    updateSummary();

    // Mostrar notificação
    showNotification(`Preset "${preset.name}" carregado!`, 'success');
}

function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'info-circle'}"></i>
        ${message}
    `;

    // Adicionar ao DOM
    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => notification.classList.add('show'), 100);

    // Remover após 3 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadDarkModePreference();
    animateOnScroll();

    // Adicionar event listeners para atualização de resumo
    document.addEventListener('change', function(e) {
        if (e.target.matches('input[type="radio"]')) {
            updateSummary();
        }
    });
});