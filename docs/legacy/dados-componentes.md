# Modelo de Dados do Configurador Legado

## Componentes Principais

Cada categoria possui um array de objetos com forma aproximada:

```ts
{
  id: string;
  name: string;
  price: number;
  performance_score?: number;
  stock?: number;
  icon?: string; // Classe Font Awesome
  description_basic?: string;
  description_advanced?: string;
  advanced_only?: boolean;
  basic_only?: boolean;
  // Campos específicos por categoria
}
```

### Categorias e Campos Extras

| Categoria | Campos extras relevantes |
| --- | --- |
| `platform` | nenhuma, funciona como filtro inicial |
| `motherboard` | `platform`, `cpu_socket`, `ram_type`, `ram_slots`, `nvme_slots`, `pcie_gen` |
| `cpu` | `socket`, `tdp?` |
| `ram` | `type`, `quantity` gerido externamente |
| `storage` | `interface`, `pcie_gen` |
| `gpu` | `pcie_gen`, `tdp` |
| `display` | `advanced_only` frequente |
| `os` | `storage_impact`, `ram_min`, `icon` |
| `battery` | simples (`performance_score`, `advanced_only`) |
| `peripherals` | `description`, `advanced_only` |
| `softwareCategories` | Objeto de arrays (multimídia, design, development, productivity) |
| `services` | `basePrice`, `details` (HTML), `icon` |

### Presets (qualityPresets)

Estrutura utilizada para preencher o configurador rapidamente:

```ts
{
  name: string;
  platform: string;
  casing: string;
  motherboard: string;
  cpu: string;
  ram_type: string;
  ram_quantity: number;
  storage1_type: string;
  storage2_type: string;
  gpu: string;
  display: string;
  keyboard: string;
  battery: string;
  os: string;
  peripherals: string[];
  software: string[];
  mode_target: 'basic' | 'advanced';
}
```

### Notebooks Prontos (readyNotebooks)

```ts
{
  id: string;
  name: string;
  hardwarePrice: number; // base
  defaultOsId: string;
  image: string; // placeholder URL
  specs: {
    platform: string;
    casing: string;
    motherboard: string;
    cpu: string;
    ram_type: string;
    ram_quantity: number;
    storage1: string;
    gpu: string;
    display: string;
    keyboard: string;
    battery: string;
  };
  description: string;
}
```

## Estado Global

```ts
interface SelectedComponents {
  platform: string | null;
  casing: string | null;
  motherboard: string | null;
  cpu: string | null;
  ram: { type: string | null; quantity: number };
  storage1: { type: string | null };
  storage2: { type: string | 'none' };
  gpu: string | null;
  display: string | null;
  keyboard: string | null;
  os: string | null;
  os2: string | null;
  dualboot_disk: 'same' | 'separate';
  network_adapter: string | null; // vazio no legado
  battery: string | null;
  peripherals: string[];
  software: string[];
}
```

Complementos: `selectedServices: string[]`, `tradeInCredit: number`, `currentMode`, `currentPresetName`, `activeTab`, `currentSoftwareTab`.

## Algoritmos

1. **`validateComponentCompatibility()`**
   - Socket CPU vs placa-mãe
   - Tipo e slots de RAM
   - Estimativa de consumo (TDP) → warnings
   - PCIe GPU vs placa-mãe
   - Slots NVMe suficientes

2. **Sistema de preços**
   - `calculateComponentPrices()` soma hardware/software/serviços
   - `calculateDynamicMarkup()` define markup baseado em performance score + complexidade
   - `calculateFinalPrice()` aplica markup e trade-in

3. **Persistência**
   - `saveConfiguration()` → localStorage
   - `loadConfiguration()` → merge de estado salvo
   - Autosave a cada 30s (hash simples)

4. **Feedback visual**
   - `showValidationMessages()` injeta alerts no DOM
   - `updatePriceDisplay()` atualiza vários IDs fixos

## Takeaways para a Nova Arquitetura

- Converter tudo em **tipos TypeScript** reutilizáveis.
- Centralizar dados em módulos (`data/components.ts`, `data/presets.ts`, etc.).
- Preparar interfaces para leitura futura via API (planilha/Headless CMS).
- Garantir que funções de validação sejam puras → permitir testes unitários.
- Criar camada de formatação de mensagem WhatsApp reusável (server/client).
