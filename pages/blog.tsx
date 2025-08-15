
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useDict } from '../components/useDict'
export default function Blog(){
  const t = useDict()
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{t.blog.title}</h1>
        <p className="text-white/80">{t.blog.text}</p>
      </main>
      <Footer />
    </div>
  )
}
