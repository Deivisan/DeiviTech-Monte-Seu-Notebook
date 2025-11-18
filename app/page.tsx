"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  highlightCards,
  pipelineSteps,
  personaCards,
  serviceSnapshots,
} from "@/data/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const heroBullets = [
  "Sistemas revisados: Windows 11 com IA ou Linux otimizado",
  "Equipamentos testados por técnico especializado",
  "Suporte técnico completo e garantia",
];

const quickActions = [
  {
    title: "Monte peça a peça",
    description: "Selecione componentes personalizados.",
    button: "Configurar",
    intent: "configurator" as const,
  },
  {
    title: "Notebooks prontos",
    description: "Opções revisadas para seu perfil.",
    button: "Ver opções",
    intent: "services" as const,
  },
  {
    title: "Avalie seu usado",
    description: "Crédito por notebook antigo.",
    button: "Avaliar",
    intent: "tradein" as const,
  },
];

export default function Home() {
  const [expandedHighlight, setExpandedHighlight] = useState<string | null>(null);
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  return (
    <div className="relative isolate overflow-hidden font-sans">
      <div className="cosmic-grid" aria-hidden="true" />
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-4 py-20 sm:px-6 lg:px-10 lg:py-20">
        <section id="top" className="space-y-10">
          <div className="space-y-6 rounded-[32px] border border-white/5 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-center shadow-[0_20px_60px_rgba(3,7,18,0.7)] backdrop-blur-3xl lg:text-left">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-200/70 lg:justify-start">
              <span className="tag-pill">Monte Seu Notebook</span>
              <span className="tag-pill">DeiviTech Engenharia</span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
              Notebooks revisados com custo-benefício excepcional.
            </h1>
            <p className="text-lg text-slate-300 md:text-xl">
              Equipamentos conversados, otimizados e testados por técnico especializado. Monte peça a peça ou escolha pronto.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#configurador"
                className="inline-flex items-center justify-center rounded-full bg-purple-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-purple-300"
              >
                Começar agora
              </Link>
              <a
                href={buildWhatsAppLink("configurator")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-green-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-green-300"
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

        <section id="destaques" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Porque reescrevemos tudo</p>
            <h2 className="text-3xl font-semibold text-white">Stack limpa, modular e pronta para IA</h2>
          </div>
          <div className="grid gap-8 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className={`glass-panel gradient-border relative overflow-hidden p-8 md:p-6 hover-glow scroll-move cursor-pointer transition-all duration-500 card-hover ${
                  expandedHighlight === card.title ? "expand-glow" : ""
                }`}
                onClick={() => setExpandedHighlight(expandedHighlight === card.title ? null : card.title)}
              >
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

        <section id="jornada" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-200">Como funciona</p>
            <h2 className="text-3xl font-semibold text-white">Processo simplificado</h2>
          </div>
          <div className="grid gap-6 md:gap-4 md:grid-cols-2 lg:grid-cols-4">
            {pipelineSteps.map((step) => (
              <div
                key={step.title}
                className={`rounded-3xl border border-white/5 bg-white/5 p-8 md:p-6 cursor-pointer transition-all duration-500 hover:bg-white/10 card-hover ${
                  expandedStep === step.title ? "step-expand" : ""
                }`}
                onClick={() => setExpandedStep(expandedStep === step.title ? null : step.title)}
              >
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
            <p className="text-sm uppercase tracking-[0.3em] text-rose-200">Perfis atendidos</p>
            <h2 className="text-3xl font-semibold text-white">Pronto para gamers, criadores e times de IA</h2>
          </div>
          <div className="grid gap-8 md:gap-6 md:grid-cols-3">
            {personaCards.map((persona) => (
              <div key={persona.title} className="glass-panel p-8 md:p-5">
                <h3 className="text-xl font-semibold text-white">{persona.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{persona.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {persona.highlights.map((highlight) => (
                    <li key={highlight}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="space-y-6 fade-in">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Serviços e trade-in</p>
            <h2 className="text-3xl font-semibold text-white">Toda a operação catalogada</h2>
          </div>
          <div className="grid gap-8 md:gap-6 md:grid-cols-2">
            {serviceSnapshots.map((service) => (
              <div key={service.title} className="rounded-3xl border border-white/5 bg-white/5 p-8 md:p-6">
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
            <p className="text-sm uppercase tracking-[0.3em] text-teal-200">Entre em contato</p>
            <h2 className="text-3xl font-semibold text-white">Escolha sua opção</h2>
          </div>
          <div className="grid gap-6 md:gap-4 md:grid-cols-3">
            {quickActions.map((action) => (
              <div key={action.title} className="glass-panel p-8 md:p-5">
                <h3 className="text-lg font-semibold text-white">{action.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{action.description}</p>
                <a
                  href={buildWhatsAppLink(action.intent)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-900 transition ${
                    action.intent === "configurator" ? "bg-cyan-400 hover:bg-cyan-300" :
                    action.intent === "services" ? "bg-emerald-400 hover:bg-emerald-300" :
                    "bg-amber-400 hover:bg-amber-300"
                  }`}
                >
                  {action.button}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400">
            Fale diretamente com nossa equipe especializada.
          </p>
        </section>
      </main>

      <section id="configurador" className="relative z-10 mx-auto max-w-6xl px-4 py-16 fade-in">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-200">Monte Peça a Peça</p>
          <h2 className="text-3xl font-semibold text-white">Configure seu notebook</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold text-white">CPU</h3>
            <select className="mt-4 w-full rounded bg-slate-700 p-2 text-white">
              <option>[SEM ESTOQUE]</option>
            </select>
          </div>
          <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold text-white">GPU</h3>
            <select className="mt-4 w-full rounded bg-slate-700 p-2 text-white">
              <option>[SEM ESTOQUE]</option>
            </select>
          </div>
          <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold text-white">RAM</h3>
            <select className="mt-4 w-full rounded bg-slate-700 p-2 text-white">
              <option>[SEM ESTOQUE]</option>
            </select>
          </div>
          <div className="glass-panel p-6">
            <h3 className="text-xl font-semibold text-white">SSD</h3>
            <select className="mt-4 w-full rounded bg-slate-700 p-2 text-white">
              <option>[SEM ESTOQUE]</option>
            </select>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-slate-300">Total: R$ 0,00</p>
          <a
            href={buildWhatsAppLink("configurator")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-900 transition hover:bg-cyan-300"
          >
            Enviar configuração
          </a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/5 px-4 py-10 text-center text-sm text-slate-400">
        <p>© 2025 DeiviTech. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
