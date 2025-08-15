
import { useState } from 'react'
const MOCK: Record<string, number> = { BTC:68000, ETH:3500, DOGE:0.15, XRP:0.55, SOL:160, ADA:0.45, VET:0.04 }
export default function PredictionTool(){
  const [coin,setCoin] = useState('BTC'); const [out,setOut]=useState('')
  const run = ()=>{ const price = MOCK[coin] ?? 100; const prediction = `${coin}: Aktuell $${price} → Prognose in 1 Jahr: $${(price*1.2).toFixed(2)} (+20%)`; setOut(prediction) }
  return (
    <div className="space-y-3">
      <label className="block text-sm text-white/80">Coin (BTC, ETH, DOGE, XRP, SOL, ADA, VET)</label>
      <div className="flex flex-col sm:flex-row gap-3">
        <select value={coin} onChange={e=>setCoin(e.target.value)} className="bg-black/20 border border-white/10 rounded-lg px-3 py-2">
          {['BTC','ETH','DOGE','XRP','SOL','ADA','VET'].map(c=>(<option key={c} value={c}>{c}</option>))}
        </select>
        <button onClick={run} className="bg-[linear-gradient(180deg,#FFD700,#b68c00)] text-black font-bold rounded-lg px-4 py-2 shadow-gold">Prognose berechnen</button>
      </div>
      {out && <div className="mt-2 p-3 rounded-lg bg-white/5 border border-white/10">{out}</div>}
      <p className="text-xs text-white/60 italic">Hinweis: MVP‑Simulation. Später echte KI & Datenquelle integrieren.</p>
    </div>
  )
}
