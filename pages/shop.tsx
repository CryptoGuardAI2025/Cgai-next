
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDict } from '../components/useDict'
export default function Shop(){
  const t = useDict()
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">{t.shop.title}</h1>
        <p className="text-white/70">{t.shop.hint}</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <a className="bg-[linear-gradient(180deg,#FFD700,#b68c00)] text-black font-bold rounded-lg px-4 py-3 shadow-gold text-center"
             href="/pdfs/beginner-guide.pdf" target="_blank" rel="noopener noreferrer">{t.shop.b}</a>
          <a className="bg-[linear-gradient(180deg,#FFD700,#b68c00)] text-black font-bold rounded-lg px-4 py-3 shadow-gold text-center"
             href="/pdfs/trader-playbook.pdf" target="_blank" rel="noopener noreferrer">{t.shop.t}</a>
          <a className="bg-[linear-gradient(180deg,#FFD700,#b68c00)] text-black font-bold rounded-lg px-4 py-3 shadow-gold text-center"
             href="/pdfs/investor-handbuch.pdf" target="_blank" rel="noopener noreferrer">{t.shop.i}</a>
        </div>
        {/* Später Stripe-Checkout hier einfügen */}
      </main>
      <Footer />
    </div>
  )
}
