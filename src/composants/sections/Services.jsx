import { useTranslation } from 'react-i18next'
import { Smartphone, Layers, Globe, LayoutDashboard, Database, Rocket } from 'lucide-react'
import Apparition from '../communs/Apparition'
import TitreSection from '../communs/TitreSection'
const icones = [Smartphone, Layers, Globe, LayoutDashboard, Database, Rocket] // même ordre que fr.json > services.liste
export default function Services() {
  const { t } = useTranslation()
  const suivre = (e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`) }
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-28">
      <TitreSection titre={t('services.titre')} sous={t('services.sous')} />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {t('services.liste', { returnObjects: true }).map((s, i) => { const Icone = icones[i]; return (
          <Apparition key={s.t} delai={i * 0.06}>
            <div onMouseMove={suivre} className="verre group h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-violet/50"
              style={{ backgroundImage: 'radial-gradient(240px circle at var(--mx,50%) var(--my,50%), rgba(124,58,237,.15), transparent)' }}>
              <div className="fond-degrade mb-4 grid h-11 w-11 place-items-center rounded-xl text-white"><Icone size={20} /></div>
              <h3 className="mb-2 text-lg font-semibold">{s.t}</h3><p className="text-sm text-sec">{s.d}</p>
            </div>
          </Apparition>) })}
      </div>
    </section>
  )
}
