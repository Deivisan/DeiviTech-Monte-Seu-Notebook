import Link from "next/link";
import {
  highlightCards,
  pipelineSteps,
  personaCards,
  serviceSnapshots,
} from "@/data/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const heroBullets = [
  "Compatibilidade validada em tempo real",
  "Resumo financeiro e técnico integrado",
  "Sistemas otimizados para máxima performance",
];

const quickActions = [
  {
    title: "Configurar agora",
    description: "Quero ajuda para montar um notebook 100% personalizado.",
    intent: "configurator" as const,
  },
  {
    title: "Solicitar serviços",
    description: "Formatação, upgrades, limpeza ou diagnóstico completo.",
    intent: "services" as const,
  },
  {
    title: "Avaliar trade-in",
    description: "Tenho um notebook usado e quero saber o crédito disponível.",
    intent: "tradein" as const,
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden font-sans">
      <div className="cosmic-grid" aria-hidden="true" />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <section id="hero" className="space-y-10">
          <div className="space-y-6 rounded-[32px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-center shadow-[0_20px_60px_rgba(3,7,18,0.7)] backdrop-blur-3xl lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-200/70 lg:justify-start">
              <span className="tag-pill">Versão Beta</span>
              <span className="tag-pill">Next.js + Tailwind + TypeScript</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
              Monte seu notebook personalizado e feche pelo WhatsApp em minutos.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              A nova DeiviTech reúne configurador modular, catálogo de serviços e sistemas de engenharia em uma única experiência, pronta para GitHub Pages e integrações futuras.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#configurador"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Começar agora
              </Link>
              <a
                href={buildWhatsAppLink("configurator")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-slate-100 transition hover:bg-white/10"
              >
                Conversar no WhatsApp
              </a>
            </div>
            <div className="grid gap-3 text-sm text-slate-300 md:grid-cols-3">
              {heroBullets.map((bullet) => (
                <p key={bullet} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  {bullet}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="diagrama" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200">Engenharia de Notebooks</p>
            <h2 className="text-3xl font-semibold text-white">Diagrama Modular</h2>
          </div>
          <div className="glass-panel p-6 hologram">
            <svg viewBox="0 0 400 250" className="w-full h-auto">
              <rect x="50" y="50" width="300" height="150" fill="none" stroke="#22d3ee" strokeWidth="2" rx="10"/>
              <text x="200" y="30" textAnchor="middle" fill="#f8fafc" fontSize="16">Notebook DeiviTech</text>
              <circle cx="100" cy="100" r="20" fill="#4ade80"/>
              <text x="100" y="105" textAnchor="middle" fill="#f8fafc" fontSize="10">CPU</text>
              <circle cx="150" cy="100" r="20" fill="#facc15"/>
              <text x="150" y="105" textAnchor="middle" fill="#f8fafc" fontSize="10">GPU</text>
              <circle cx="200" cy="100" r="20" fill="#9333ea"/>
              <text x="200" y="105" textAnchor="middle" fill="#f8fafc" fontSize="10">RAM</text>
              <circle cx="250" cy="100" r="20" fill="#ef4444"/>
              <text x="250" y="105" textAnchor="middle" fill="#f8fafc" fontSize="10">SSD</text>
              <circle cx="300" cy="100" r="20" fill="#06b6d4"/>
              <text x="300" y="105" textAnchor="middle" fill="#f8fafc" fontSize="10">Bateria</text>
              <line x1="100" y1="120" x2="100" y2="170" stroke="#22d3ee" strokeWidth="2"/>
              <line x1="150" y1="120" x2="150" y2="170" stroke="#22d3ee" strokeWidth="2"/>
              <line x1="200" y1="120" x2="200" y2="170" stroke="#22d3ee" strokeWidth="2"/>
              <line x1="250" y1="120" x2="250" y2="170" stroke="#22d3ee" strokeWidth="2"/>
              <line x1="300" y1="120" x2="300" y2="170" stroke="#22d3ee" strokeWidth="2"/>
              <text x="200" y="200" textAnchor="middle" fill="#f8fafc" fontSize="12">Conectividade e Expansão</text>
            </svg>
          </div>
        </section>

        <section id="destaques" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/80">Porque reescrevemos tudo</p>
            <h2 className="text-3xl font-semibold text-white">Stack limpa, modular e pronta para IA</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {highlightCards.map((card) => (
              <div key={card.title} className="glass-panel gradient-border relative overflow-hidden p-6 hover-glow">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wide text-slate-400">{card.accent}</p>
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="text-slate-300">{card.description}</p>
                </div>
                <div className="mt-6 text-sm font-semibold text-cyan-200">{card.metric}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="configurador" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Jornada</p>
            <h2 className="text-3xl font-semibold text-white">Do preset ao pedido final</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {pipelineSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/5 bg-white/5 p-6">
                <div className="tag-pill mb-4">Etapa {step.badge}</div>
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-300">{step.description}</p>
                <p className="mt-4 text-sm text-cyan-200">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="perfis" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Perfis atendidos</p>
            <h2 className="text-3xl font-semibold text-white">Pronto para gamers, criadores e times de IA</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {personaCards.map((persona) => (
              <div key={persona.title} className="glass-panel p-5">
                <h3 className="text-xl font-semibold text-white">{persona.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{persona.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {persona.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
                <p className="mt-4 text-xs uppercase tracking-widest text-slate-400">Investimento</p>
                <p className="text-lg font-semibold text-emerald-200">{persona.budget}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200">Serviços e trade-in</p>
            <h2 className="text-3xl font-semibold text-white">Toda a operação catalogada</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {serviceSnapshots.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/5 bg-white/5 p-6">
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-slate-300">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {service.checklist.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="whatsapp" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Contato único</p>
            <h2 className="text-3xl font-semibold text-white">CTAs prontos para cada intenção</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <div key={action.title} className="glass-panel p-5">
                <h3 className="text-lg font-semibold text-white">{action.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{action.description}</p>
                <a
                  href={buildWhatsAppLink(action.intent)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center justify-center rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white"
                >
                  Abrir conversa
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400">
            Fale diretamente com nossa equipe especializada.
          </p>
        </section>
      </main>
      <footer className="relative z-10 border-t border-white/5 px-4 py-10 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} DeiviTech — Projetado para rodar em Next.js + GitHub Pages.</p>
        <p className="mt-2">Documentação do legado preservada em <code className="rounded bg-white/5 px-2">docs/legacy</code></p>
      </footer>
    </div>
  );
}
