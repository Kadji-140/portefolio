import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import MaquetteTelephone from '../communs/MaquetteTelephone'
import { site } from '../../config/site'
import { projets } from '../../donnees/projets'
export default function Hero() {
  const { t } = useTranslation()
  const mots = t('hero.rotation', { returnObjects: true })
  const [i, setI] = useState(0)
  const [souris, setSouris] = useState({ x: 0, y: 0 })
  useEffect(() => { const id = setInterval(() => setI((n) => (n + 1) % mots.length), 2200); return () => clearInterval(id) }, [mots.length])
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24"
      onMouseMove={(e) => setSouris({ x: (e.clientX / (window.innerWidth || 1000) - 0.5) * 25, y: (e.clientY / (window.innerHeight || 800) - 0.5) * 25 })}>
      <div className="grille absolute inset-0" aria-hidden />
      <div className="halo -left-20 top-10 h-96 w-96 bg-violet" aria-hidden /><div className="halo -right-10 bottom-0 h-96 w-96 bg-cyan" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
        <div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="verre mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs">
            <span className="relative flex h-2 w-2"><span className="absolute h-full w-full animate-ping rounded-full bg-green-400" /><span className="h-2 w-2 rounded-full bg-green-500" /></span>{t('hero.badge')}
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl font-bold leading-tight sm:text-6xl">
            {t('hero.t1')}<span className="degrade">{t('hero.t2')}</span>{t('hero.t3')}
          </motion.h1>
          <p className="mt-5 max-w-lg text-sec">{t('hero.sous')}</p>
          <p className="mt-4 h-8 font-titre text-xl font-semibold"><span className="degrade" key={i}>{mots[i]}</span><span className="animate-pulse">|</span></p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projets" className="fond-degrade inline-flex h-12 items-center gap-2 rounded-full px-7 font-semibold text-white shadow-lg shadow-violet/40 transition hover:scale-105">{t('hero.voir')} <ArrowRight size={16} /></a>
            <a href="#contact" className="verre inline-flex h-12 items-center rounded-full px-7 font-semibold">{t('cta')}</a>
          </div>
          <dl className="mt-10 flex gap-8">
            {site.chiffres.map((c) => <div key={c.cle}><dt className="font-titre text-2xl font-bold">{c.valeur}{c.suffixe}</dt><dd className="max-w-[110px] text-xs text-sec">{t(`chiffres.${c.cle}`)}</dd></div>)}
          </dl>
        </div>
        <div style={{ transform: `translate3d(${souris.x}px, ${souris.y}px, 0)` }} className="hidden items-end justify-center transition-transform duration-300 ease-out lg:flex">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="flex items-end gap-5">
            <MaquetteTelephone
              image={projets[0]?.images?.[1] || projets[0]?.images?.[0]}
              type="myevent"
              className="-rotate-6 hover:rotate-0 transition-all duration-300 hover:scale-105"
            />
            <MaquetteTelephone
              image={projets[1]?.images?.[1] || projets[1]?.images?.[0]}
              type="couture"
              className="mb-12 rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
      <a href="#apropos" aria-label={t('hero.defiler')} className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-sec"><ChevronDown /></a>
    </section>
  )
}
