import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const demoProjects = [
  {
    title: 'Customer Churn Prediction',
    desc: 'Built a classification model with scikit-learn to identify churn risk and guide retention efforts.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
    link: '#'
  },
  {
    title: 'Sales Forecasting',
    desc: 'Time-series forecasting with feature engineering and model evaluation to predict revenue.',
    tags: ['Python', 'NumPy', 'Regression'],
    link: '#'
  },
  {
    title: 'Exploratory Data Analysis',
    desc: 'Story-driven analysis with Matplotlib visualizations and statistical summaries.',
    tags: ['EDA', 'Matplotlib', 'Statistics'],
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
          <p className="text-gray-400 max-w-xl">Selected work that showcases practical data science skills and clean, reproducible workflows.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.07, duration: 0.55 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg text-white">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-200 transition-colors" />
              </div>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-200 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
