
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDict } from './useDict'

export default function Header(){
  const t = useDict()
  const { push, pathname, query, asPath } = useRouter()
  const [open, setOpen] = useState(false)
  const changeLang = (lng:'de'|'en') => push({pathname,query}, asPath, {locale:lng})

  return (
    <header className="header-glass sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="CGAI" className="w-10 h-10 rounded-md shadow-gold" />
          <span className="cgai-wordmark tracking-[0.3em]">CGAI</span>
        </Link>
        <div className="flex items-center gap-2">
          <button onClick={()=>changeLang('de')} aria-label="Deutsch" className="px-2 py-1 rounded-md hover:opacity-80">🇩🇪</button>
          <button onClick={()=>changeLang('en')} aria-label="English" className="px-2 py-1 rounded-md hover:opacity-80">🇬🇧</button>
          <button onClick={()=>setOpen(v=>!v)} aria-label="Menu"
            className="ml-2 w-12 h-12 rounded-xl bg-[linear-gradient(180deg,#FFD700,#b68c00)] text-black shadow-gold animate-coinpulse relative">
            <span className="absolute left-3 right-3 top-3 h-[3px] bg-black rounded"></span>
            <span className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-[3px] bg-black rounded"></span>
            <span className="absolute left-3 right-3 bottom-3 h-[3px] bg-black rounded"></span>
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#0F172A]/95">
          <div className="max-w-6xl mx-auto px-4 py-3 grid sm:grid-cols-5 gap-2 text-sm">
            <Link href="/about" className="px-3 py-2 rounded-lg hover:bg-white/5">{t.nav.about}</Link>
            <Link href="/crypto" className="px-3 py-2 rounded-lg hover:bg-white/5">{t.nav.crypto}</Link>
            <Link href="/mindset" className="px-3 py-2 rounded-lg hover:bg-white/5">{t.nav.mindset}</Link>
            <Link href="/shop" className="px-3 py-2 rounded-lg hover:bg-white/5">{t.nav.shop}</Link>
            <Link href="/blog" className="px-3 py-2 rounded-lg hover:bg-white/5">{t.nav.blog}</Link>
          </div>
        </nav>
      )}
    </header>
  )
}
