import { useTranslation } from 'react-i18next'
import { BadgeCheck } from 'lucide-react'
import Apparition from '../communs/Apparition'
import TitreSection from '../communs/TitreSection'
export default function Pourquoi() {
  const { t } = useTranslation()
  return (
    <section className="mx-auto max-w-4xl px-5 py-28">
      <TitreSection titre={t('pourquoi.titre')} />
      <div className="grid gap-4 sm:grid-cols-2">
        {t('pourquoi.liste', { returnObjects: true }).map((p, i) => <Apparition key={p} delai={i * 0.05}><div className="verre flex items-center gap-3 rounded-xl p-4"><BadgeCheck className="text-violet" size={20} />{p}</div></Apparition>)}
      </div>
    </section>
  )
}
