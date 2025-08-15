
import { useDict } from './useDict'
export default function Footer(){
  const t = useDict()
  return (
    <footer className="mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-white/70 flex items-center justify-between flex-wrap gap-2">
        <div>© 2025 CGAI</div>
        <div className="italic">{t.footer.disclaimer}</div>
      </div>
    </footer>
  )
}
