import { Brain, Rocket, Bot, Database } from 'lucide-react';

const items = [
  {
    icon: Brain,
    title: 'Reasoning Agents',
    desc:
      'Compose autonomous agents with tool use, memory, and guardrails. Orchestrate complex tasks with ease.',
  },
  {
    icon: Rocket,
    title: 'Rapid Prototyping',
    desc:
      'Preview flows instantly with hot reload and shareable links. Move from idea to demo in minutes.',
  },
  {
    icon: Bot,
    title: 'Model Flexibility',
    desc:
      'Swap between providers and models without rewrites. Optimize quality, speed, and cost for each task.',
  },
  {
    icon: Database,
    title: 'Built-in Persistence',
    desc:
      'Log interactions, store results, and track metrics. Scale your product with confidence.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-[1] bg-black px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need to ship AI apps
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
          Tools that help you design, build, and iterate faster — from prototype to production.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/[0.08]"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-white/10 p-3 ring-1 ring-white/10">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
