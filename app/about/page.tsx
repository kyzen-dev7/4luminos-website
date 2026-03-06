"use client";

import Reveal from "../components/reveal";

const founders = [
  {
    name: "Gabriel Paesano",
    role: "Project Leader",
    focus: "Kernel tuning, system architecture, performance engineering.",
  },
  {
    name: "................",
    role: "Co-Founder & UX",
    focus: "Product design, interface polish, user research.",
  },
  {
    name: "Riley Chen",
    role: "Co-Founder & Security",
    focus: "Privacy defaults, hardening, secure update flows.",
  },
];

const values = [
  { title: "Innovation", text: "Constantly pushing what OS design can be—through research and experimentation." },
  { title: "Community", text: "We build with developers, gamers, and creators worldwide." },
  { title: "Performance", text: "Every component optimized for real-world speed and efficiency." },
  { title: "Transparency", text: "Open development, clear communication, no hidden switches." },
];

const lookingAhead = [
  { title: "Seamless Experiences", text: "Desktop features that stay consistent across devices, online or offline." },
  { title: "Next-Level Security", text: "Stack-level hardening with transparent controls and smart defaults." },
  { title: "Community Driven", text: "Roadmap shaped with early adopters and contributors in the open." },
];

const stats = [
  { label: "Latency target", value: "< 10ms", detail: "Input-to-render pipeline" },
  { label: "Telemetry", value: "0%", detail: "Off by default. Opt-in only." },
  { label: "Boot to ready", value: "< 10s", detail: "Lean services, fast cold boot" },
];

const principles = [
  { title: "Performance first", text: "We tune from the kernel up to keep frames smooth, audio clean, and IO predictable." },
  { title: "Privacy by default", text: "No hidden data collection. Transparent controls with reversible choices." },
  { title: "User agency", text: "Clear updates, rollbacks, and sane defaults so you stay in control." },
];

export default function AboutPage() {
  return (
    <div className="section-container py-24 space-y-28 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-10 right-0 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-sky-300/10 blur-3xl" />
      </div>
      {/* Hero */}
      <Reveal>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-2xl">
            <p className="text-sm font-semibold text-white/60 uppercase tracking-[0.25em]">About</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">Empowering Digital Experiences</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              We are building a next-generation Linux-based OS that puts performance, privacy, and user control at the center. Every release is tuned for creators, gamers, and builders who demand reliability and speed.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/#contact" className="btn-primary">Talk to us</a>
              <a href="/roadmap" className="btn-secondary">View roadmap</a>
            </div>
          </div>
          <div className="card-glow bg-white/90 relative overflow-hidden border border-white/40 shadow-2xl backdrop-blur-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-60" />
            <div className="relative space-y-5 p-2">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-[0.15em]">What drives us</p>
              <h3 className="text-2xl font-semibold text-gray-900">Performance, Privacy, Control</h3>
              <p className="text-gray-700 leading-relaxed">
                We design from the kernel upward, keep telemetry off by default, and ship reversible controls so you stay in charge.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stats.map((item, idx) => (
                  <Reveal key={item.label} delayMs={idx * 100} className="h-full">
                    <div className="p-3 rounded-xl bg-white/85 border border-gray-200 h-full shadow-sm transition-transform duration-300 hover:-translate-y-1">
                      <p className="text-xs uppercase tracking-wide text-gray-500">{item.label}</p>
                      <p className="text-xl font-semibold text-gray-900">{item.value}</p>
                      <p className="text-sm text-gray-600">{item.detail}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Founders */}
      <Reveal>
        <section className="space-y-10">
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="space-y-3 max-w-3xl">
              <h2 className="text-4xl font-bold text-white">Founding Team</h2>
              <p className="text-white/80 leading-relaxed">
                The architects behind LuminOS set the direction for performance, security, and user experience. They combine deep systems expertise with product taste.
              </p>
            </div>
            <a href="/#contact" className="btn-primary">Meet us</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((person, idx) => (
              <Reveal key={person.name} delayMs={idx * 120} className="h-full">
                <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full space-y-4 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                  <div className="w-20 h-20 rounded-full bg-white/15 mx-auto flex items-center justify-center text-white/50 text-sm">Photo</div>
                  <div className="text-center space-y-1">
                    <p className="text-sm text-white/60">Founder</p>
                    <h3 className="text-xl text-white font-semibold">{person.name}</h3>
                    <p className="text-white/85">{person.role}</p>
                  </div>
                  <p className="text-white/70 leading-relaxed text-center">{person.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Operating Principles */}
      <Reveal>
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {principles.map((item, idx) => (
            <Reveal key={item.title} delayMs={idx * 120} className="h-full">
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 h-full transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
                <p className="text-sm text-white/60 uppercase tracking-[0.15em]">Principle</p>
                <h3 className="text-2xl font-semibold text-white mt-2">{item.title}</h3>
                <p className="text-white/80 mt-2 leading-relaxed">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </section>
      </Reveal>

      {/* Innovative Solutions */}
      <Reveal>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-white/60 uppercase tracking-[0.2em]">Innovative Solutions</p>
            <h2 className="text-4xl font-bold text-white">Built to serve modern creators</h2>
            <p className="text-white/80 leading-relaxed">
              We leverage cutting-edge technology to design secure, low-latency user experiences. The stack stays lean so your workloads stay fast.
            </p>
          </div>
          <div className="space-y-4 text-white/85">
            <Reveal delayMs={80}>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-white font-semibold">Gaming Optimization</h4>
                <p className="text-white/70">Low-latency kernel tuning, optimized GPU scheduling, and compatibility layers tuned for modern games.</p>
              </div>
            </Reveal>
            <Reveal delayMs={160}>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-white font-semibold">System Performance</h4>
                <p className="text-white/70">Lean services designed for speed, stability, and long-term reliability.</p>
              </div>
            </Reveal>
            <Reveal delayMs={240}>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <h4 className="text-white font-semibold">User Privacy</h4>
                <p className="text-white/70">No hidden data collection. No telemetry by default. You decide what to share.</p>
              </div>
            </Reveal>
          </div>
        </section>
      </Reveal>

      {/* Core Values */}
      <Reveal>
        <section className="space-y-20 text-center">
          <Reveal>
            <div className="space-y-5 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-white">Our Core Values</h2>
              <p className="text-white/80">Integrity, innovation, and community guide every decision we make.</p>
              <a href="/features" className="btn-secondary w-fit mx-auto">Explore</a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 max-w-4xl mx-auto">
            {values.map((item, idx) => (
              <Reveal key={item.title} delayMs={idx * 120} className="h-full">
                <div className="p-8 rounded-2xl bg-white text-gray-900 shadow-md h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      {/* Looking Ahead */}
      <Reveal>
        <section className="space-y-10">
          <Reveal>
            <div className="text-center space-y-3">
              <h3 className="text-3xl font-bold text-white">Looking Ahead</h3>
              <p className="text-white/80">A clear path toward the future of LuminOS.</p>
              <a href="/roadmap" className="btn-secondary w-fit mx-auto">Explore Future</a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lookingAhead.map((item, idx) => (
              <Reveal key={item.title} delayMs={idx * 120} className="h-full">
                <div className="p-6 rounded-2xl bg-white text-gray-900 shadow-md h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>
    </div>
  );
}
