
import { useEffect, useRef } from 'react'
declare global { interface Window { TradingView?: any } }
type Props = { containerId?: string }
export default function TradingViewWidget({ containerId='tv_total' }: Props){
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const s = document.createElement('script'); s.src='https://s3.tradingview.com/tv.js'; s.async=true;
    s.onload = () => {
      if (window.TradingView && ref.current){
        // ⬇ Später deine Widget-ID/Optionen: symbol/interval/theme/locale/container_id ⬇
        new window.TradingView.widget({
          autosize:true, symbol:'CRYPTOCAP:TOTAL', interval:'D', timezone:'Etc/UTC',
          theme:'dark', style:'1', locale:'de_DE', container_id:containerId, withdateranges:true
        })
      }
    };
    document.body.appendChild(s); return ()=>{ s.remove() }
  },[containerId])
  return <div id={containerId} ref={ref} style={{height:480,width:'100%'}}/>
}
