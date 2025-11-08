import { useState } from 'react';

const demos = [
  {
    name: 'Chat Agent',
    desc: 'Context-aware assistant with tools and memory.',
    code: `// Pseudo-code\nconst agent = new Agent({ tools: [search, browse] })\nconst answer = await agent.ask(\"How do transformers work?\")`,
  },
  {
    name: 'Vision Pipeline',
    desc: 'Detect, caption, and summarize images.',
    code: `// Pseudo-code\nconst result = await pipeline(image)\n  .detect()\n  .caption()\n  .summarize()`,
  },
  {
    name: 'Analytics',
    desc: 'Track runs and evaluate prompts.',
    code: `// Pseudo-code\nlogRun({ prompt, output })\nchart.runs().by('latency')`,
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section id="showcase" className="bg-gradient-to-b from-black to-[#0b0b0f] px-6 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">See what you can build</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Explore sample patterns that combine reasoning, tools, and persistence.
            </p>
          </div>
          <div className="flex gap-2 rounded-lg bg-white/5 p-1 ring-1 ring-white/10">
            {demos.map((d, i) => (
              <button
                key={d.name}
                onClick={() => setActive(i)}
                className={`rounded-md px-3 py-2 text-sm transition ${
                  active === i ? 'bg-white text-black' : 'text-white/80 hover:bg-white/10'
                }`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">{demos[active].name}</h3>
            <p className="mt-2 text-sm text-white/70">{demos[active].desc}</p>
            <pre className="mt-4 overflow-auto rounded-lg bg-black/60 p-4 text-sm text-emerald-300">
              <code>{demos[active].code}</code>
            </pre>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-sm text-white/80">
              <li>• Drag-and-drop tools to compose flows</li>
              <li>• Inspect tokens, latency, and cost</li>
              <li>• Share a live preview with your team</li>
              <li>• Export to your stack when you’re ready</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs text-white/60">
              <div className="rounded-lg bg-black/40 p-3">
                <div className="text-2xl font-semibold text-white">3x</div>
                Faster iteration
              </div>
              <div className="rounded-lg bg-black/40 p-3">
                <div className="text-2xl font-semibold text-white">-40%</div>
                Cost per run
              </div>
              <div className="rounded-lg bg-black/40 p-3">
                <div className="text-2xl font-semibold text-white">99.9%</div>
                Uptime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
