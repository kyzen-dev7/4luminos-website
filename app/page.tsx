"use client";

import { useState } from "react";
import Reveal from "./components/reveal";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const highlights = [
    { title: "Performance", desc: "Gaming-first kernel tuned for ultra-low latency" },
    { title: "Privacy", desc: "No telemetry, encrypted by default, you own your data" },
    { title: "Control", desc: "Fully customizable stack that stays out of your way" },
  ];

  const pillars = [
    { icon: "🎮", title: "Game-Ready", text: "Optimized render pipeline, consistent frame pacing." },
    { icon: "🛡️", title: "Secure Core", text: "Hardened defaults, sandboxed apps, verified updates." },
    { icon: "⚡", title: "Blazing Fast", text: "Boot-to-ready in seconds with lean services." },
    { icon: "🛰️", title: "Cloud Smart", text: "Local-first, cloud-optional workflows for teams." },
  ];

  const roadmap = [
    { phase: "Now", items: ["Kernel tuning", "Driver stability", "UI polish"] },
    { phase: "Next", items: ["Gaming overlay", "Workspace snapshots", "App store beta"] },
    { phase: "Later", items: ["Multi-device sync", "AI-assisted workflows", "Enterprise hardening"] },
  ];

  return (
    <main>
      {/* Hero */}
      <Reveal>
        <section id="about" className="section-container min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 w-full items-center">
            <div className="space-y-8">
              <p className="text-sm font-semibold text-white/60 tracking-[0.35em] uppercase">Next-gen OS</p>
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight glow-text-big">LuminOS</h1>
                <p className="text-xl text-white/80 leading-relaxed">
                  Built for performance, gaming, privacy, and total user control. Experience an operating system that feels as fast as it looks.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">Get Started</a>
                <a href="/roadmap" className="btn-secondary">View Roadmap</a>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/80">
                {highlights.map((item, idx) => (
                  <Reveal key={idx} delayMs={idx * 100} className="h-full">
                    <div className="p-4 border border-white/10 rounded-2xl bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                      <p className="text-sm uppercase tracking-wide text-white/50">{item.title}</p>
                      <p className="text-base mt-2 text-white/90 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="card-glow bg-white/95 flex flex-col items-center justify-center min-h-[420px] relative overflow-hidden border border-white/40 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-60" />
              <div className="relative text-center space-y-6">
                <div className="text-7xl">💻</div>
                <div>
                  <p className="text-2xl font-semibold text-gray-800">OS Visual Coming Soon</p>
                  <p className="text-gray-600 mt-2">Polishing the interface for launch</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Why Section */}
      <Reveal>
        <section className="section-container py-28">
          <Reveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-5xl font-bold text-white">Why LuminOS</h2>
              <p className="text-lg text-white/80">Custom-crafted from the kernel up to feel light, responsive, and secure.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {pillars.slice(0, 3).map((item, idx) => (
              <Reveal key={idx} delayMs={idx * 120} className="h-full">
                <div className="card-glow text-center h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Feature Grid */}
      <Reveal>
        <section id="features" className="section-container py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-white/60 uppercase tracking-[0.2em]">Feature set</p>
              <h2 className="text-5xl font-bold text-white">Designed for real work and play</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                From kernel tuning to UI polish, every layer is built to stay fast, focused, and distraction-free.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pillars.map((item, idx) => (
                  <Reveal key={idx} delayMs={idx * 100} className="h-full">
                    <div className="p-5 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <p className="text-lg text-white font-semibold">{item.title}</p>
                      <p className="text-sm text-white/80 mt-1 leading-relaxed">{item.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="card-glow bg-white/90 border border-white/40 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">System Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[{ title: "Minimum", cpu: "Intel Core i5", ram: "8GB DDR4", storage: "40GB SSD" }, { title: "Recommended", cpu: "Intel Core i7", ram: "16GB DDR5", storage: "100GB NVMe" }].map((spec, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-gray-200 bg-white/80 transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{spec.title}</p>
                    <div className="mt-3 space-y-2 text-gray-800">
                      <p><span className="text-gray-500">CPU: </span>{spec.cpu}</p>
                      <p><span className="text-gray-500">Memory: </span>{spec.ram}</p>
                      <p><span className="text-gray-500">Storage: </span>{spec.storage}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-4">Optimized for modern hardware; works great on well-configured VMs too.</p>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Roadmap Snapshot */}
      <Reveal>
        <section id="roadmap" className="section-container py-28">
          <Reveal>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-5xl font-bold text-white">Roadmap</h2>
              <p className="text-lg text-white/80">A focused path from beta to launch</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roadmap.map((stage, idx) => (
              <Reveal key={idx} delayMs={idx * 120} className="h-full">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                  <p className="text-sm uppercase tracking-wide text-white/60">{stage.phase}</p>
                  <ul className="mt-4 space-y-2 text-white/90">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="/roadmap" className="btn-secondary">See full roadmap</a>
          </div>
        </section>
      </Reveal>

      {/* Contact Form */}
      <Reveal>
        <section id="contact" className="section-container py-28">
          <div className="max-w-2xl mx-auto">
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="text-5xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-lg text-white/80">Tell us what you need and we'll reach out</p>
              </div>
            </Reveal>

            <form
              onSubmit={handleSubmit}
              className="card-glow border border-white/40 shadow-2xl backdrop-blur-xl space-y-6"
              suppressHydrationWarning
            >
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-gray-600 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-gray-600 outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:border-gray-600 outline-none transition-colors resize-none"
                required
              />
            </div>

              <button
                type="submit"
                className="w-full btn-primary bg-gray-900 border-gray-900 hover:bg-gray-800 hover:border-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
