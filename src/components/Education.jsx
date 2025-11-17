import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-7">
            <h2 className="text-3xl font-bold tracking-tight text-white">Education</h2>
            <p className="mt-3 text-gray-400 max-w-2xl">
              Bachelor of Science in Data Science — Saudi Electronic University.
            </p>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li className="flex items-start gap-3"><span className="mt-1"><GraduationCap className="h-5 w-5 text-indigo-400"/></span> Graduated with First Class Honors.</li>
              <li className="flex items-start gap-3"><span className="mt-1"><GraduationCap className="h-5 w-5 text-indigo-400"/></span> GPA: 3.75.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/20 blur-2xl"/>
              <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-2xl"/>
              <p className="text-sm text-gray-300">
                Focus areas: data analysis, machine learning, statistics, and practical projects built with Python and SQL.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
