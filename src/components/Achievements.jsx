import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Key Achievements</h2>
          <p className="text-gray-600 max-w-xl">Highlights that reflect dedication, consistency, and academic excellence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{
            title: 'First Class Honors',
            desc: 'Recognized for outstanding academic performance throughout the program.'
          },{
            title: 'GPA 3.75',
            desc: 'Maintained a high GPA with rigorous coursework and projects.'
          },{
            title: 'Capstone Projects',
            desc: 'Delivered end-to-end data projects from data wrangling to ML modeling.'
          }].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.06, duration: 0.55 }} className="relative rounded-2xl border border-black/10 p-6 bg-white shadow-sm">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/0 to-amber-500/10 opacity-0 hover:opacity-100 transition-opacity" />
              <Trophy className="h-8 w-8 text-amber-600" />
              <h3 className="mt-4 font-semibold text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
