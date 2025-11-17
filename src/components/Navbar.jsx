import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-400 text-xl">Baraa Aljouri</a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:baraa@example.com" aria-label="Email" className="p-2 rounded-full hover:bg-black/5 transition-colors"><Mail className="h-5 w-5"/></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full hover:bg-black/5 transition-colors"><Github className="h-5 w-5"/></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full hover:bg-black/5 transition-colors"><Linkedin className="h-5 w-5"/></a>
          </div>

          <button className="md:hidden p-2 rounded-lg hover:bg-black/5" onClick={() => setOpen((v)=>!v)} aria-label="Toggle Menu">
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/80 backdrop-blur-xl">
          <div className="px-4 py-3 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={()=>setOpen(false)} className="text-sm font-medium text-gray-800">{n.label}</a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href="mailto:baraa@example.com" className="p-2 rounded-full hover:bg-black/5"><Mail className="h-5 w-5"/></a>
              <a href="https://github.com/" className="p-2 rounded-full hover:bg-black/5"><Github className="h-5 w-5"/></a>
              <a href="https://www.linkedin.com/" className="p-2 rounded-full hover:bg-black/5"><Linkedin className="h-5 w-5"/></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
