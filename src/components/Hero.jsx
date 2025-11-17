import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(168,85,247,0.20),transparent)]"/>
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_90%_90%,rgba(99,102,241,0.18),transparent)]"/>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center py-28">
        <div className="lg:col-span-7 space-y-6">
          <motion.span initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 text-sm px-3 py-1.5 rounded-full bg-white/10 text-fuchsia-200 ring-1 ring-white/15">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"/>
            Available for opportunities
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Baraa Aljouri
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg text-gray-300 max-w-2xl">
            Data Scientist (Fresh Graduate) passionate about building data-driven solutions. I turn messy data into actionable insights with Python, SQL, and machine learning.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/40 transition-transform hover:-translate-y-0.5">See Projects</a>
            <a href="#contact" className="px-5 py-2.5 rounded-lg bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 font-semibold">Contact</a>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="flex items-center gap-3 text-sm text-gray-300">
            <span>BS in Data Science — Saudi Electronic University</span>
            <span className="hidden sm:inline" aria-hidden>•</span>
            <span>First Class Honors, GPA 3.75</span>
          </motion.div>
        </div>

        <div className="lg:col-span-5"/>
      </div>

      <div className="absolute -z-[0] inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
