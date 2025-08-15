
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDict } from '../components/useDict'
export default function Mindset(){
  const t = useDict()
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">{t.mindset.title}</h1>
        <p className="text-white/80">{t.mindset.text}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <a className="bg-[linear-gradient(180deg,#FFD700,#b68c00)] text-black font-bold rounded-lg px-4 py-3 shadow-gold text-center"
             href="/pdfs/beginner-guide.pdf" target="_blank" rel="noopener noreferrer">{t.mindset.pdf1}</a>
        </div>
      </main>
      <Footer />
    </div>
  )
}
