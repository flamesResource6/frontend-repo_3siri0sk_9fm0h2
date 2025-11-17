import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = (e) => {
    e.preventDefault()
    setStatus('Thanks! I will get back to you soon.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
            <p className="mt-3 text-gray-400">Whether it's an internship, junior role, or collaboration, I'm excited to connect.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <input required placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-400 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"/>
              <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-400 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"/>
              <textarea required placeholder="Message" rows={5} className="w-full rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-400 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50"/>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white hover:from-fuchsia-500 hover:to-indigo-500 transition-colors">
                <Send className="h-4 w-4"/> Send
              </button>
              {!!status && <p className="text-sm text-emerald-400">{status}</p>}
            </form>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-white/5 backdrop-blur-md">
              <p className="text-sm text-gray-300">Email: baraa.aljouri@example.com</p>
              <p className="text-sm text-gray-300 mt-1">Location: Saudi Arabia</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
