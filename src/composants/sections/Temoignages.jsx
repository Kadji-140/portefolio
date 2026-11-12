import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import TitreSection from '../communs/TitreSection'
import { site } from '../../config/site'
// Masqué tant que site.afficherTemoignages = false
const temoignages = [{ nom: 'TODO', role: 'TODO', texte: 'TODO : vrai témoignage client.' }]
export default function Temoignages() {
  const { t } = useTranslation()
  const [i, setI] = useState(0)
  if (!site.afficherTemoignages) return null
  const x = temoignages[i]
  return (
    <section className="mx-auto max-w-2xl px-5 py-28 text-center">
      <TitreSection titre={t('temoignages.titre')} />
      <blockquote className="verre rounded-2xl p-8"><p>“{x.texte}”</p><footer className="mt-4 text-sm text-sec">{x.nom} — {x.role}</footer></blockquote>
      <div className="mt-4 flex justify-center gap-2">{temoignages.map((_, k) => <button key={k} onClick={() => setI(k)} aria-label={`Témoignage ${k + 1}`} className={`h-2.5 w-2.5 rounded-full ${k === i ? 'fond-degrade' : 'bg-sec/40'}`} />)}</div>
    </section>
  )
}
