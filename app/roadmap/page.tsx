"use client";

import Reveal from "../components/reveal";

const tracks = [
  {
    phase: "Alpha",
    items: [
      "Stability sweeps and driver validation",
      "Kernel tuning for low latency",
      "Core UI shell iterations",
    ],
  },
  {
    phase: "Beta",
    items: [
      "Gaming overlay and performance HUD",
      "Workspace snapshots and rollback",
      "Store beta for curated apps",
    ],
  },
  {
    phase: "Launch",
    items: [
      "Multi-device sync",
      "Team profiles and policy controls",
      "Hardening and long-term support channel",
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="section-container py-24 space-y-16">
      <Reveal>
        <section className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold text-white/60 uppercase tracking-[0.2em]">Roadmap</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white">Building toward launch</h1>
          <p className="text-lg text-white/80 leading-relaxed">
            A transparent view of what we are shipping next for LuminOS.
          </p>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <Reveal key={track.phase} delayMs={idx * 120} className="h-full">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                <p className="text-sm text-white/60 uppercase tracking-wide">{track.phase}</p>
                <ul className="mt-4 space-y-3 text-white/90">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
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
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Want early access?</h2>
          <p className="text-white/80">Tell us about your use case and we will prioritize invites.</p>
          <a href="/#contact" className="btn-primary">Join the waitlist</a>
        </section>
      </Reveal>
    </div>
  );
}
