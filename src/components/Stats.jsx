import { motion } from 'framer-motion'
import { GitBranch, Brain, BarChart3, Sparkles } from 'lucide-react'

const items = [
  { icon: Brain, label: 'ML Models Built', value: '25+' },
  { icon: BarChart3, label: 'Dashboards', value: '12' },
  { icon: GitBranch, label: 'Repos', value: '30+' },
  { icon: Sparkles, label: 'Certs & Awards', value: '6' },
]

export default function Stats(){
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-16 h-64 w-64 bg-fuchsia-500/20 blur-3xl rounded-full"/>
        <div className="absolute -bottom-24 -right-16 h-64 w-64 bg-indigo-500/20 blur-3xl rounded-full"/>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((it, i) => (
            <motion.div key={it.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: i * 0.05, duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <it.icon className="h-5 w-5 text-fuchsia-400"/>
                <span className="text-sm text-gray-300">{it.label}</span>
              </div>
              <div className="mt-2 text-2xl font-bold text-white">{it.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
