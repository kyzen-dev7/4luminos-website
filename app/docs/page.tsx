"use client";

import Reveal from "../components/reveal";

const steps = [
  {
    title: "Download",
    detail: "Grab the latest ISO image and verify the checksum.",
  },
  {
    title: "Install",
    detail: "Boot from USB, pick your drive, and follow the guided setup.",
  },
  {
    title: "Customize",
    detail: "Choose your workspace presets, privacy defaults, and gaming profile.",
  },
  {
    title: "Update",
    detail: "Use the built-in updater or CLI to stay on the latest secure build.",
  },
];

const faq = [
  {
    q: "Does LuminOS collect telemetry?",
    a: "No. Telemetry is off by default; you stay in control of your data.",
  },
  {
    q: "Will my games run?",
    a: "We prioritize GPU drivers and Proton compatibility for popular titles.",
  },
  {
    q: "Can I develop on it?",
    a: "Yes. Comes with modern toolchains, container tooling, and your favorite shells.",
  },
];

export default function DocsPage() {
  return (
    <div className="section-container py-24 space-y-16">
      <Reveal>
        <section className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-[0.2em]">Docs</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Getting started</h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Follow these quick steps to get LuminOS installed, tuned, and ready for daily use.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <Reveal key={step.title} delayMs={idx * 100} className="h-full">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                <p className="text-sm text-white/60">Step {idx + 1}</p>
                <h3 className="text-xl text-white font-semibold mt-2">{step.title}</h3>
                <p className="text-white/80 mt-2 leading-relaxed">{step.detail}</p>
              </div>
            </Reveal>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faq.map((item, idx) => (
            <Reveal key={item.q} delayMs={idx * 120} className="h-full">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                <p className="text-sm text-white/60">FAQ</p>
                <h3 className="text-lg text-white font-semibold mt-2">{item.q}</h3>
                <p className="text-white/80 mt-2 leading-relaxed">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Need something else?</h2>
          <p className="text-white/80">Drop a note and we will help you get set up.</p>
          <a href="/#contact" className="btn-primary">Contact us</a>
        </section>
      </Reveal>
    </div>
  );
}
