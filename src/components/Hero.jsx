import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center py-24">
        <div className="lg:col-span-6 space-y-6">
          <motion.span initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-black/5 text-gray-700">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/>
            Available for opportunities
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Baraa Aljouri
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-gray-700 max-w-xl">
            Data Scientist (Fresh Graduate) passionate about building data-driven solutions. I turn messy data into actionable insights with Python, SQL, and machine learning.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-500 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-transform hover:-translate-y-0.5">See Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white text-gray-900 border border-black/10 hover:bg-gray-50 font-semibold">Contact</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex items-center gap-3 text-sm text-gray-600">
            <span>BS in Data Science — Saudi Electronic University</span>
            <span className="hidden sm:inline" aria-hidden>•</span>
            <span>First Class Honors, GPA 3.75</span>
          </motion.div>
        </div>

        <div className="lg:col-span-6"/>
      </div>

      <div className="absolute -z-[0] inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}
