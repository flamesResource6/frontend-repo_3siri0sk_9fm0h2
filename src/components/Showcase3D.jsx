import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Cube, Atom, Shapes } from 'lucide-react'

const Spline = lazy(() => import('@splinetool/react-spline'))

function Card({ title, icon: Icon, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-6"
      style={{ perspective: 1000 }}
      whileHover={{ y: -4 }}
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl"/>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"/>
      <div className="flex items-center gap-2 text-white/90">
        <Icon className="h-5 w-5 text-fuchsia-400"/>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="mt-3 rounded-xl overflow-hidden ring-1 ring-white/10">
        {children}
      </div>
    </motion.div>
  )
}

export default function Showcase3D(){
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12),transparent_60%)]"/>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white">3D Showcase</h2>
          <p className="text-gray-400 max-w-xl">More interactive visuals to amplify the vibe and highlight your tech-forward identity.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Interactive Scene" icon={Cube}>
            <div className="aspect-video bg-black/40">
              <Suspense fallback={<div className="h-full w-full grid place-items-center text-sm text-gray-400">Loading 3D…</div>}>
                <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </Suspense>
            </div>
          </Card>

          <Card title="Data Galaxy" icon={Atom}>
            <div className="aspect-video relative grid place-items-center bg-gradient-to-b from-white/[0.04] to-transparent">
              <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 rounded-full border border-fuchsia-400/40 animate-[spin_16s_linear_infinite]"/>
                <div className="absolute inset-4 rounded-full border border-indigo-400/30 animate-[spin_12s_linear_infinite_reverse]"/>
                <div className="absolute inset-8 rounded-full border border-cyan-400/20 animate-[spin_10s_linear_infinite]"/>
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-fuchsia-500/60 to-indigo-500/60 blur-sm"/>
              </div>
            </div>
          </Card>

          <Card title="Mini 3D Preview" icon={Shapes}>
            <div className="aspect-video bg-black/40">
              <Suspense fallback={<div className="h-full w-full grid place-items-center text-sm text-gray-400">Loading 3D…</div>}>
                <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              </Suspense>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
