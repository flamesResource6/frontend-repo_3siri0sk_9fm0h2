import { motion } from 'framer-motion'
import { Cpu, BarChart3, Database, LineChart } from 'lucide-react'

const skills = [
  {
    icon: Cpu,
    title: 'Python',
    items: ['Pandas', 'NumPy', 'Scikit-learn'],
    color: 'from-indigo-500/10 to-indigo-500/5',
  },
  {
    icon: Database,
    title: 'SQL',
    items: ['Querying', 'Joins', 'Optimization'],
    color: 'from-cyan-500/10 to-cyan-500/5',
  },
  {
    icon: LineChart,
    title: 'Machine Learning',
    items: ['Regression', 'Classification', 'Model Evaluation'],
    color: 'from-fuchsia-500/10 to-fuchsia-500/5',
  },
  {
    icon: BarChart3,
    title: 'Visualization',
    items: ['Matplotlib', 'Storytelling', 'Dashboards'],
    color: 'from-emerald-500/10 to-emerald-500/5',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.08),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Core Skills</h2>
          <p className="text-gray-600 max-w-xl">Practical experience with data manipulation, analysis, and modeling to deliver measurable outcomes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`group relative rounded-2xl border border-black/10 bg-gradient-to-b ${s.color} p-6 overflow-hidden`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-white/30 to-transparent" />
              <s.icon className="h-8 w-8 text-gray-900" />
              <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                {s.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
