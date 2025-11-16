// =========================================
// 🚀 PROTÓTIPO DO NOVO CONFIGURADOR DEIVITECH
// Versão 2.0 - JavaScript Moderno + TypeScript-like
// =========================================

/**
 * @typedef {Object} Component
 * @property {string} id - ID único do componente
 * @property {string} name - Nome do componente
 * @property {string} brand - Marca do componente
 * @property {string} model - Modelo específico
 * @property {number} price - Preço em reais
 * @property {Object} specs - Especificações técnicas
 * @property {string[]} compatibility - Lista de compatibilidades
 * @property {number} performance - Score de performance (0-100)
 * @property {number} powerConsumption - Consumo em watts
 * @property {string} category - Categoria do componente
 */

/**
 * @typedef {Object} NotebookConfig
 * @property {string} id - ID único da configuração
 * @property {string} name - Nome da configuração
 * @property {Component} cpu - Processador
 * @property {Component} gpu - Placa de vídeo
 * @property {Component[]} ram - Módulos de RAM
 * @property {Component[]} storage - Unidades de armazenamento
 * @property {Component} motherboard - Placa-mãe
 * @property {Component} psu - Fonte de alimentação
 * @property {Component} case - Gabinete
 * @property {Component} cooler - Sistema de refrigeração
 * @property {Component} display - Tela (opcional)
 * @property {Component} os - Sistema operacional
 * @property {number} totalPrice - Preço total calculado
 * @property {Object} compatibility - Status de compatibilidade
 * @property {Object} performance - Métricas de performance
 */

/**
 * @typedef {Object} CompatibilityResult
 * @property {boolean} compatible - Se é compatível
 * @property {string[]} warnings - Avisos de compatibilidade
 * @property {string[]} errors - Erros críticos
 * @property {number} score - Score de compatibilidade (0-100)
 */

// =========================================
// 🏗️ CLASSE PRINCIPAL: NotebookConfigurator
// =========================================

class NotebookConfigurator {
    constructor() {
        this.config = this.createEmptyConfig();
        this.components = new Map();
        this.rules = new Map();
        this.listeners = new Set();

        this.initializeComponents();
        this.initializeCompatibilityRules();
    }

    /**
     * Cria uma configuração vazia
     * @returns {NotebookConfig}
     */
    createEmptyConfig() {
        return {
            id: this.generateId(),
            name: 'Minha Configuração',
            cpu: null,
            gpu: null,
            ram: [],
            storage: [],
            motherboard: null,
            psu: null,
            case: null,
            cooler: null,
            display: null,
            os: null,
            totalPrice: 0,
            compatibility: { compatible: true, warnings: [], errors: [], score: 100 },
            performance: { cpuScore: 0, gpuScore: 0, ramScore: 0, overallScore: 0 }
        };
    }

    /**
     * Gera ID único
     * @returns {string}
     */
    generateId() {
        return 'config_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    /**
     * Inicializa catálogo de componentes
     */
    initializeComponents() {
        // CPUs
        this.addComponent({
            id: 'cpu_i7_13700k',
            name: 'Intel Core i7-13700K',
            brand: 'Intel',
            model: '13700K',
            price: 2200,
            category: 'cpu',
            specs: { cores: 16, threads: 24, baseClock: '3.4GHz', boostClock: '5.4GHz', socket: 'LGA1700' },
            compatibility: ['motherboard_z690', 'motherboard_z790'],
            performance: 95,
            powerConsumption: 125
        });

        this.addComponent({
            id: 'cpu_r7_7800x3d',
            name: 'AMD Ryzen 7 7800X3D',
            brand: 'AMD',
            model: '7800X3D',
            price: 2100,
            category: 'cpu',
            specs: { cores: 8, threads: 16, baseClock: '4.2GHz', boostClock: '5.0GHz', socket: 'AM5' },
            compatibility: ['motherboard_b650', 'motherboard_x670'],
            performance: 92,
            powerConsumption: 120
        });

        // GPUs
        this.addComponent({
            id: 'gpu_rtx4070',
            name: 'NVIDIA RTX 4070',
            brand: 'NVIDIA',
            model: 'RTX 4070',
            price: 2800,
            category: 'gpu',
            specs: { vram: '12GB GDDR6X', baseClock: '1920MHz', boostClock: '2475MHz', tdp: 200 },
            compatibility: ['pci_express_4'],
            performance: 88,
            powerConsumption: 200
        });

        this.addComponent({
            id: 'gpu_rx7800xt',
            name: 'AMD RX 7800 XT',
            brand: 'AMD',
            model: 'RX 7800 XT',
            price: 2600,
            category: 'gpu',
            specs: { vram: '16GB GDDR6', baseClock: '1295MHz', boostClock: '2430MHz', tdp: 263 },
            compatibility: ['pci_express_4'],
            performance: 85,
            powerConsumption: 263
        });

        // RAM
        this.addComponent({
            id: 'ram_corsair_32gb',
            name: 'Corsair Vengeance 32GB DDR5',
            brand: 'Corsair',
            model: 'Vengeance LPX',
            price: 450,
            category: 'ram',
            specs: { capacity: '32GB', speed: 'DDR5-5600', latency: 'CL36', voltage: '1.25V' },
            compatibility: ['ddr5_motherboards'],
            performance: 75,
            powerConsumption: 5
        });

        // Motherboards
        this.addComponent({
            id: 'motherboard_z790',
            name: 'ASUS ROG Strix Z790-E',
            brand: 'ASUS',
            model: 'ROG Strix Z790-E',
            price: 1800,
            category: 'motherboard',
            specs: { socket: 'LGA1700', chipset: 'Z790', ramSlots: 4, pcieSlots: 3, sataPorts: 6 },
            compatibility: ['cpu_intel_13th', 'cpu_intel_14th'],
            performance: 90,
            powerConsumption: 0
        });

        // Cases
        this.addComponent({
            id: 'case_fractal_meshify',
            name: 'Fractal Design Meshify 2',
            brand: 'Fractal Design',
            model: 'Meshify 2',
            price: 400,
            category: 'case',
            specs: { formFactor: 'Mid Tower', maxGpuLength: 315, maxCpuCoolerHeight: 165, radiatorSupport: '360mm' },
            compatibility: ['atx_motherboards', 'micro_atx'],
            performance: 0,
            powerConsumption: 0
        });

        // PSUs
        this.addComponent({
            id: 'psu_corsair_750w',
            name: 'Corsair RM750x',
            brand: 'Corsair',
            model: 'RM750x',
            price: 350,
            category: 'psu',
            specs: { wattage: 750, efficiency: '80 Plus Gold', modular: true, warranty: 10 },
            compatibility: ['atx_standard'],
            performance: 0,
            powerConsumption: 0
        });

        // OS
        this.addComponent({
            id: 'os_windows11_pro',
            name: 'Windows 11 Pro',
            brand: 'Microsoft',
            model: 'Windows 11 Pro',
            price: 200,
            category: 'os',
            specs: { version: '11 Pro', license: 'OEM', activation: 'Digital' },
            compatibility: ['all_systems'],
            performance: 0,
            powerConsumption: 0
        });
    }

    /**
     * Adiciona componente ao catálogo
     * @param {Component} component
     */
    addComponent(component) {
        this.components.set(component.id, component);
    }

    /**
     * Inicializa regras de compatibilidade
     */
    initializeCompatibilityRules() {
        // Regra: CPU deve ser compatível com socket da motherboard
        this.addCompatibilityRule('cpu_motherboard_socket', (config) => {
            if (!config.cpu || !config.motherboard) return { compatible: true, warnings: [], errors: [] };

            const cpuSocket = config.cpu.specs.socket;
            const moboSocket = config.motherboard.specs.socket;

            if (cpuSocket !== moboSocket) {
                return {
                    compatible: false,
                    warnings: [],
                    errors: [`Socket incompatível: CPU (${cpuSocket}) não combina com Motherboard (${moboSocket})`]
                };
            }

            return { compatible: true, warnings: [], errors: [] };
        });

        // Regra: PSU deve suportar consumo total
        this.addCompatibilityRule('psu_power_requirement', (config) => {
            if (!config.psu) return { compatible: true, warnings: [], errors: [] };

            const totalPower = this.calculateTotalPowerConsumption(config);
            const psuWattage = config.psu.specs.wattage;
            const recommendedWattage = totalPower * 1.3; // 30% de margem

            if (psuWattage < totalPower) {
                return {
                    compatible: false,
                    warnings: [],
                    errors: [`Fonte insuficiente: ${psuWattage}W não suporta ${totalPower}W necessários`]
                };
            }

            if (psuWattage < recommendedWattage) {
                return {
                    compatible: true,
                    warnings: [`Fonte apertada: Recomenda-se ${Math.ceil(recommendedWattage)}W para margem segura`],
                    errors: []
                };
            }

            return { compatible: true, warnings: [], errors: [] };
        });

        // Regra: RAM deve ser compatível com motherboard
        this.addCompatibilityRule('ram_motherboard_compatibility', (config) => {
            if (!config.ram.length || !config.motherboard) return { compatible: true, warnings: [], errors: [] };

            const ramType = config.ram[0].specs.speed.includes('DDR5') ? 'DDR5' : 'DDR4';
            const moboRamSupport = config.motherboard.specs.ramType || 'DDR5'; // Assume DDR5 para motherboards modernas

            if (ramType !== moboRamSupport) {
                return {
                    compatible: false,
                    warnings: [],
                    errors: [`Tipo de RAM incompatível: ${ramType} não suportado pela motherboard`]
                };
            }

            return { compatible: true, warnings: [], errors: [] };
        });
    }

    /**
     * Adiciona regra de compatibilidade
     * @param {string} ruleName
     * @param {Function} ruleFunction
     */
    addCompatibilityRule(ruleName, ruleFunction) {
        this.rules.set(ruleName, ruleFunction);
    }

    /**
     * Calcula consumo total de energia
     * @param {NotebookConfig} config
     * @returns {number}
     */
    calculateTotalPowerConsumption(config) {
        let total = 0;

        // CPU
        if (config.cpu) total += config.cpu.powerConsumption;

        // GPU
        if (config.gpu) total += config.gpu.powerConsumption;

        // RAM (baixo consumo)
        total += config.ram.length * 5;

        // Storage (baixo consumo)
        total += config.storage.length * 10;

        // Outros componentes
        total += 50; // Motherboard, fans, etc.

        return total;
    }

    /**
     * Adiciona componente à configuração
     * @param {string} componentId
     * @param {string} slot - Para componentes múltiplos (ram, storage)
     */
    async addComponentToConfig(componentId, slot = null) {
        const component = this.components.get(componentId);
        if (!component) throw new Error(`Componente ${componentId} não encontrado`);

        switch (component.category) {
            case 'cpu':
                this.config.cpu = component;
                break;
            case 'gpu':
                this.config.gpu = component;
                break;
            case 'motherboard':
                this.config.motherboard = component;
                break;
            case 'psu':
                this.config.psu = component;
                break;
            case 'case':
                this.config.case = component;
                break;
            case 'cooler':
                this.config.cooler = component;
                break;
            case 'display':
                this.config.display = component;
                break;
            case 'os':
                this.config.os = component;
                break;
            case 'ram':
                if (slot !== null) {
                    this.config.ram[slot] = component;
                } else {
                    this.config.ram.push(component);
                }
                break;
            case 'storage':
                if (slot !== null) {
                    this.config.storage[slot] = component;
                } else {
                    this.config.storage.push(component);
                }
                break;
        }

        await this.updateConfig();
    }

    /**
     * Remove componente da configuração
     * @param {string} category
     * @param {number} index - Para arrays (ram, storage)
     */
    async removeComponentFromConfig(category, index = null) {
        if (Array.isArray(this.config[category])) {
            if (index !== null) {
                this.config[category].splice(index, 1);
            } else {
                this.config[category] = [];
            }
        } else {
            this.config[category] = null;
        }

        await this.updateConfig();
    }

    /**
     * Atualiza configuração (preços, compatibilidade, performance)
     */
    async updateConfig() {
        this.calculateTotalPrice();
        this.checkCompatibility();
        this.calculatePerformance();
        this.notifyListeners();
    }

    /**
     * Calcula preço total
     */
    calculateTotalPrice() {
        let total = 0;

        // Componentes únicos
        const singleComponents = ['cpu', 'gpu', 'motherboard', 'psu', 'case', 'cooler', 'display', 'os'];
        singleComponents.forEach(cat => {
            if (this.config[cat]) total += this.config[cat].price;
        });

        // Componentes múltiplos
        ['ram', 'storage'].forEach(cat => {
            this.config[cat].forEach(comp => total += comp.price);
        });

        this.config.totalPrice = total;
    }

    /**
     * Verifica compatibilidade
     */
    checkCompatibility() {
        let allCompatible = true;
        let allWarnings = [];
        let allErrors = [];

        for (const [ruleName, ruleFunction] of this.rules) {
            const result = ruleFunction(this.config);
            if (!result.compatible) allCompatible = false;
            allWarnings.push(...result.warnings);
            allErrors.push(...result.errors);
        }

        // Calcular score baseado em erros e warnings
        let score = 100;
        score -= allErrors.length * 25; // -25 por erro crítico
        score -= allWarnings.length * 10; // -10 por warning

        this.config.compatibility = {
            compatible: allCompatible,
            warnings: [...new Set(allWarnings)], // Remove duplicatas
            errors: [...new Set(allErrors)],
            score: Math.max(0, score)
        };
    }

    /**
     * Calcula métricas de performance
     */
    calculatePerformance() {
        const cpuScore = this.config.cpu ? this.config.cpu.performance : 0;
        const gpuScore = this.config.gpu ? this.config.gpu.performance : 0;
        const ramScore = this.config.ram.length ?
            (this.config.ram.reduce((sum, ram) => sum + ram.performance, 0) / this.config.ram.length) : 0;

        // Performance geral é média ponderada
        const overallScore = (cpuScore * 0.4 + gpuScore * 0.4 + ramScore * 0.2);

        this.config.performance = {
            cpuScore,
            gpuScore,
            ramScore,
            overallScore: Math.round(overallScore)
        };
    }

    /**
     * Sistema de recomendações baseado em uso
     * @param {string} useCase - 'gaming', 'workstation', 'content-creation', 'office'
     * @returns {Object} Recomendações
     */
    getRecommendations(useCase) {
        const recommendations = {
            gaming: {
                priority: ['gpu', 'cpu', 'ram'],
                suggestions: {
                    gpu: 'gpu_rtx4070',
                    cpu: 'cpu_r7_7800x3d',
                    ram: 'ram_corsair_32gb'
                }
            },
            workstation: {
                priority: ['cpu', 'ram', 'gpu'],
                suggestions: {
                    cpu: 'cpu_i7_13700k',
                    ram: 'ram_corsair_32gb',
                    gpu: 'gpu_rtx4070'
                }
            },
            'content-creation': {
                priority: ['cpu', 'ram', 'storage'],
                suggestions: {
                    cpu: 'cpu_i7_13700k',
                    ram: 'ram_corsair_32gb',
                    storage: 'ssd_1tb' // Adicionar SSD
                }
            },
            office: {
                priority: ['cpu', 'ram', 'storage'],
                suggestions: {
                    cpu: 'cpu_i5_12400', // CPU mais básico
                    ram: 'ram_16gb_ddr4', // RAM suficiente
                    storage: 'ssd_512gb'
                }
            }
        };

        return recommendations[useCase] || recommendations.office;
    }

    /**
     * Aplica recomendações automaticamente
     * @param {string} useCase
     */
    async applyRecommendations(useCase) {
        const recs = this.getRecommendations(useCase);

        for (const [category, componentId] of Object.entries(recs.suggestions)) {
            if (this.components.has(componentId)) {
                await this.addComponentToConfig(componentId);
            }
        }
    }

    /**
     * Sistema de observers para reatividade
     * @param {Function} listener
     */
    addListener(listener) {
        this.listeners.add(listener);
    }

    /**
     * Remove listener
     * @param {Function} listener
     */
    removeListener(listener) {
        this.listeners.delete(listener);
    }

    /**
     * Notifica todos os listeners
     */
    notifyListeners() {
        this.listeners.forEach(listener => listener(this.config));
    }

    /**
     * Salva configuração no localStorage
     * @param {string} name
     */
    saveConfig(name = null) {
        const configToSave = {
            ...this.config,
            name: name || this.config.name,
            savedAt: new Date().toISOString()
        };

        const savedConfigs = JSON.parse(localStorage.getItem('deivitech_configs') || '[]');
        savedConfigs.push(configToSave);
        localStorage.setItem('deivitech_configs', JSON.stringify(savedConfigs));

        return configToSave;
    }

    /**
     * Carrega configuração salva
     * @param {string} configId
     */
    loadConfig(configId) {
        const savedConfigs = JSON.parse(localStorage.getItem('deivitech_configs') || '[]');
        const config = savedConfigs.find(c => c.id === configId);

        if (config) {
            this.config = config;
            this.notifyListeners();
        }

        return config;
    }

    /**
     * Exporta configuração como JSON
     * @returns {string}
     */
    exportConfig() {
        return JSON.stringify(this.config, null, 2);
    }

    /**
     * Importa configuração de JSON
     * @param {string} jsonString
     */
    importConfig(jsonString) {
        try {
            const importedConfig = JSON.parse(jsonString);
            this.config = importedConfig;
            this.updateConfig();
            return true;
        } catch (error) {
            console.error('Erro ao importar configuração:', error);
            return false;
        }
    }

    /**
     * Gera relatório completo da configuração
     * @returns {Object}
     */
    generateReport() {
        return {
            config: this.config,
            summary: {
                totalComponents: this.countComponents(),
                totalPrice: this.config.totalPrice,
                compatibilityScore: this.config.compatibility.score,
                performanceScore: this.config.performance.overallScore,
                estimatedPowerConsumption: this.calculateTotalPowerConsumption(this.config)
            },
            recommendations: this.generateRecommendations(),
            warnings: this.config.compatibility.warnings,
            errors: this.config.compatibility.errors
        };
    }

    /**
     * Conta total de componentes
     * @returns {number}
     */
    countComponents() {
        let count = 0;
        const singleComponents = ['cpu', 'gpu', 'motherboard', 'psu', 'case', 'cooler', 'display', 'os'];

        singleComponents.forEach(cat => {
            if (this.config[cat]) count++;
        });

        count += this.config.ram.length;
        count += this.config.storage.length;

        return count;
    }

    /**
     * Gera recomendações inteligentes
     * @returns {string[]}
     */
    generateRecommendations() {
        const recommendations = [];

        if (!this.config.cpu) {
            recommendations.push('Adicione um processador para começar sua configuração');
        }

        if (!this.config.gpu && this.config.cpu) {
            recommendations.push('Considere adicionar uma placa de vídeo para melhor performance gráfica');
        }

        if (this.config.ram.length === 0) {
            recommendations.push('Adicione pelo menos 16GB de RAM para boa performance');
        }

        if (this.config.storage.length === 0) {
            recommendations.push('Adicione um SSD para armazenamento rápido');
        }

        if (!this.config.psu) {
            recommendations.push('Não esqueça da fonte de alimentação compatível');
        }

        return recommendations;
    }
}

// =========================================
// 🎮 DEMONSTRAÇÃO INTERATIVA
// =========================================

// Criar instância do configurador
const configurator = new NotebookConfigurator();

// Listener para atualizar UI (simulado)
configurator.addListener((config) => {
    console.log('Configuração atualizada:', {
        preço: `R$ ${config.totalPrice.toLocaleString('pt-BR')}`,
        compatibilidade: config.compatibility.score + '%',
        performance: config.performance.overallScore + '%',
        componentes: configurator.countComponents()
    });
});

// Demonstração de uso
async function demo() {
    console.log('🚀 Iniciando demonstração do Configurador DeiviTech v2.0\n');

    // Aplicar recomendações para gaming
    console.log('🎮 Aplicando recomendações para Gaming...');
    await configurator.applyRecommendations('gaming');

    console.log('\n📊 Relatório da Configuração:');
    const report = configurator.generateReport();
    console.log(JSON.stringify(report.summary, null, 2));

    // Adicionar mais componentes
    console.log('\n🔧 Adicionando componentes extras...');
    await configurator.addComponentToConfig('motherboard_z790');
    await configurator.addComponentToConfig('case_fractal_meshify');
    await configurator.addComponentToConfig('psu_corsair_750w');
    await configurator.addComponentToConfig('os_windows11_pro');

    console.log('\n💾 Salvando configuração...');
    const savedConfig = configurator.saveConfig('Gaming Build v1');

    console.log('\n📋 Configuração final:');
    console.log(`Nome: ${savedConfig.name}`);
    console.log(`Preço Total: R$ ${savedConfig.totalPrice.toLocaleString('pt-BR')}`);
    console.log(`Compatibilidade: ${savedConfig.compatibility.score}%`);
    console.log(`Performance: ${savedConfig.performance.overallScore}%`);

    if (savedConfig.compatibility.warnings.length > 0) {
        console.log('\n⚠️ Avisos:', savedConfig.compatibility.warnings);
    }

    if (savedConfig.compatibility.errors.length > 0) {
        console.log('\n❌ Erros:', savedConfig.compatibility.errors);
    }
}

// Executar demonstração
demo().catch(console.error);

// =========================================
// 📚 EXPORT PARA USO EM OUTROS ARQUIVOS
// =========================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { NotebookConfigurator };
}

if (typeof window !== 'undefined') {
    window.NotebookConfigurator = NotebookConfigurator;
}</content>
<parameter name="filePath">/home/deivi/Projetos/DeiviTech-Monte-Seu-Notebook/temp/prototipo-configurador-v2.js