
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDict } from '../components/useDict'

export default function Home(){
  const t = useDict()
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">{t.hero.headline}</h1>
          <p className="text-white/80 mb-6">{t.hero.sub}</p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <img src="/images/hero-8k.png" alt="8K Crypto Visual" />
        </div>
      </main>
      <Footer />
    </div>
  )
}
