import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { projets } from '../../donnees/projets'
import TitreSection from '../communs/TitreSection'
import MaquetteTelephone from '../communs/MaquetteTelephone'
import MaquetteNavigateur from '../communs/MaquetteNavigateur'
import ModalProjet from './ModalProjet'
export default function Projets() {
  const { t, i18n } = useTranslation()
  const lg = i18n.language?.startsWith('en') ? 'en' : 'fr'
  const [filtre, setFiltre] = useState('tous')
  const [choisi, setChoisi] = useState(null)
  const liste = projets.filter((p) => filtre === 'tous' || p.categorie === filtre)
  return (
    <section id="projets" className="mx-auto max-w-6xl px-5 py-28">
      <TitreSection titre={t('projets.titre')} sous={t('projets.sous')} />
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {['tous', 'mobile', 'web', 'saas'].map((f) => (
          <button key={f} onClick={() => setFiltre(f)} className={`h-11 rounded-full px-5 text-sm font-medium transition ${filtre === f ? 'fond-degrade text-white' : 'verre text-sec'}`}>{t(`projets.filtres.${f}`)}</button>
        ))}
      </div>
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence>
          {liste.map((p) => (
            <motion.button layout key={p.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} onClick={() => setChoisi(p)}
              className="verre group overflow-hidden rounded-2xl p-5 text-left transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet/20">
              <div className="mb-4 overflow-hidden rounded-xl bg-zinc-100 dark:bg-black/40 border border-zinc-200/60 dark:border-white/5 p-4 transition group-hover:scale-[1.03]">
                {p.plateforme === 'mobile' ? <MaquetteTelephone image={p.images[0]} className="max-w-[110px]" /> : <MaquetteNavigateur image={p.images[0]} />}
              </div>
              <span className="text-xs text-cyan">{t(`projets.statut.${p.statut}`)}</span>
              <h3 className="text-lg font-semibold">{p.titre?.[lg] || p.titre?.fr || ''}</h3><p className="mt-1 text-sm text-sec">{p.accroche?.[lg] || p.accroche?.fr || ''}</p>
              <span className="degrade mt-3 inline-block text-sm font-semibold">{t('projets.voir')} →</span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <ModalProjet projet={choisi} fermer={() => setChoisi(null)} />
    </section>
  )
}
