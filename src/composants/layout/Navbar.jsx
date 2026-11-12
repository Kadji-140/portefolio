import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import BoutonTheme from '../communs/BoutonTheme'
import BoutonLangue from '../communs/BoutonLangue'
import useScrollSpy from '../../hooks/useScrollSpy'
import { site } from '../../config/site'
export default function Navbar({ sombre, basculer }) {
  const { t } = useTranslation()
  const [defile, setDefile] = useState(false)
  const [ouvert, setOuvert] = useState(false)
  const liens = t('nav', { returnObjects: true })
  const actif = useScrollSpy(liens.map((l) => l.id))
  useEffect(() => { const f = () => setDefile(window.scrollY > 20); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${defile ? 'verre py-2' : 'py-4'}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5" aria-label="Navigation principale">
        <a href="#top" className="font-titre text-xl font-bold"><span className="degrade">{site.nom}</span>.dev</a>
        <ul className="hidden items-center gap-7 md:flex">
          {liens.map((l) => <li key={l.id}><a href={`#${l.id}`} className={`text-sm transition hover:text-texte ${actif === l.id ? 'text-texte' : 'text-sec'}`}>{l.l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <BoutonLangue /><BoutonTheme sombre={sombre} basculer={basculer} />
          <a href="#contact" className="fond-degrade hidden h-11 items-center rounded-full px-5 text-sm font-semibold text-white md:flex">{t('cta')}</a>
          <button className="grid h-11 w-11 place-items-center md:hidden" aria-label="Menu" aria-expanded={ouvert} onClick={() => setOuvert(!ouvert)}>{ouvert ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {ouvert && (
        <div className="verre mx-4 mt-2 rounded-2xl p-4 md:hidden">
          {[...liens, { id: 'contact', l: t('cta') }].map((l) => <a key={l.id} href={`#${l.id}`} onClick={() => setOuvert(false)} className="block rounded-lg px-3 py-3 text-sm">{l.l}</a>)}
        </div>
      )}
    </header>
  )
}
