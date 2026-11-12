import { useTranslation } from 'react-i18next'
import { User, Check } from 'lucide-react'
import Apparition from '../communs/Apparition'
import TitreSection from '../communs/TitreSection'
import { site } from '../../config/site'

export default function APropos() {
  const { t } = useTranslation()
  return (
    <section id="apropos" className="mx-auto max-w-6xl px-5 py-28">
      <TitreSection titre={t('apropos.titre')} />
      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        <Apparition>
          {site.photo ? (
            <div className="relative mx-auto aspect-square w-60 overflow-hidden rounded-3xl border border-zinc-200/50 dark:border-white/10 shadow-2xl shadow-violet/20">
              <img
                src={site.photo}
                alt={site.nom}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ) : (
            <div className="fond-degrade mx-auto grid aspect-square w-60 place-items-center rounded-3xl text-white shadow-xl shadow-violet/30">
              <User size={72} />
            </div>
          )}
        </Apparition>
        <Apparition delai={0.1}>
          <p className="text-lg leading-relaxed text-sec">{t('apropos.texte')}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {t('apropos.points', { returnObjects: true }).map((p) => <li key={p} className="verre flex items-center gap-3 rounded-xl p-4 text-sm"><Check size={16} className="text-cyan" />{p}</li>)}
          </ul>
        </Apparition>
      </div>
    </section>
  )
}
