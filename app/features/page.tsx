"use client";

import Link from "next/link";
import Reveal from "../components/reveal";

const featureSets = [
  {
    title: "Performance",
    items: [
      "Gaming-first kernel tuning",
      "Optimized scheduler for low latency",
      "Fast boot with minimal services",
    ],
  },
  {
    title: "Privacy",
    items: [
      "No telemetry by default",
      "Encrypted storage options",
      "Hardened defaults and sandboxed apps",
    ],
  },
  {
    title: "Control",
    items: [
      "Customizable UI and workspace",
      "CLI-friendly tooling everywhere",
      "Rolling updates you can pause",
    ],
  },
];

const deepFeatures = [
  {
    icon: "🎮",
    title: "Game Mode",
    desc: "Prioritizes GPU and audio pipelines for stutter-free sessions.",
  },
  {
    icon: "🛡️",
    title: "Secure Core",
    desc: "App confinement, verified updates, and sensible defaults.",
  },
  {
    icon: "🧠",
    title: "Smart Assist",
    desc: "Context-aware suggestions without phoning home.",
  },
  {
    icon: "⚡",
    title: "Instant Resume",
    desc: "Suspend-to-RAM tuned to jump back into work quickly.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="section-container py-24 space-y-20">
      <Reveal>
        <section className="max-w-4xl space-y-6">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-[0.2em]">Features</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Features built for builders</h1>
          <p className="text-lg text-white/80 leading-relaxed">
            LuminOS focuses on speed, stability, and privacy—without sacrificing the polish you want in a daily driver.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/roadmap" className="btn-primary">View Roadmap</Link>
            <a href="/#contact" className="btn-secondary">Talk to us</a>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureSets.map((group, idx) => (
            <Reveal key={group.title} delayMs={idx * 120} className="h-full">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{group.title}</h3>
                <ul className="space-y-3 text-white/85">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/85">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-white">Deep dive</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Every subsystem is chosen to keep you in flow—from GPU scheduling to package management.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {deepFeatures.map((item, idx) => (
              <Reveal key={item.title} delayMs={idx * 100} className="h-full">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <p className="text-lg text-white font-semibold">{item.title}</p>
                  <p className="text-sm text-white/80 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
