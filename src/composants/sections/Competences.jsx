import { useTranslation } from 'react-i18next'
import { competences } from '../../donnees/competences'
import TitreSection from '../communs/TitreSection'
export default function Competences() {
  const { t } = useTranslation()
  const tout = Object.values(competences).flat()
  return (
    <section className="overflow-hidden py-28">
      <TitreSection titre={t('competences.titre')} />
      <div className="flex w-max defile gap-4" aria-hidden>
        {[...tout, ...tout].map((c, i) => <span key={i} className="verre rounded-full px-6 py-3 text-sm font-medium transition hover:text-cyan">{c}</span>)}
      </div>
      <div className="mx-auto mt-12 grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-5">
        {Object.entries(competences).map(([cat, items]) => (
          <div key={cat} className="verre rounded-2xl p-4"><h3 className="mb-2 text-sm font-semibold">{cat}</h3><p className="text-xs text-sec">{items.join(' · ')}</p></div>
        ))}
      </div>
    </section>
  )
}
