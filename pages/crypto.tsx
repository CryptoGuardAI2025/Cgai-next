
import Header from '../components/Header'
import Footer from '../components/Footer'
import TradingViewWidget from '../components/TradingViewWidget'
import PredictionTool from '../components/PredictionTool'
import { useDict } from '../components/useDict'
export default function Crypto(){
  const t = useDict()
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">{t.crypto.title}</h1>
        <section className="space-y-3">
          <h2 className="text-xl font-bold">{t.crypto.tvTitle}</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <TradingViewWidget containerId="tv_total" />
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-bold">{t.crypto.aiTitle}</h2>
          <PredictionTool />
        </section>
      </main>
      <Footer />
    </div>
  )
}
