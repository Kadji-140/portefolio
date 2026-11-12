import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'
import MaquetteNavigateur from '../communs/MaquetteNavigateur'
export default function ModalProjet({ projet: p, fermer }) {
  const { t, i18n } = useTranslation()
  const lg = i18n.language?.startsWith('en') ? 'en' : 'fr'
  return (
    <AnimatePresence>
      {p && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={fermer} role="dialog" aria-modal="true">
          <motion.div initial={{ y: 40, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40 }} onClick={(e) => e.stopPropagation()} className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-bord bg-carte p-6">
            <button onClick={fermer} aria-label="Fermer" className="float-right grid h-11 w-11 place-items-center"><X /></button>
            <h3 className="degrade text-2xl font-bold">{p.titre?.[lg] || p.titre?.fr || ''}</h3>
            <div className="my-5 grid gap-3">{(p.images?.length ? p.images : [null]).map((im, i) => <MaquetteNavigateur key={i} image={im} />)}</div>
            <p className="text-sec">{p.description?.[lg] || p.description?.fr || ''}</p>
            <h4 className="mt-5 font-semibold">{t('projets.probleme')}</h4><p className="text-sm text-sec">{p.probleme?.[lg] || p.probleme?.fr || ''}</p>
            <h4 className="mt-5 font-semibold">{t('projets.fonctions')}</h4>
            <ul className="mt-2 list-inside list-disc text-sm text-sec">{(p.fonctionnalites?.[lg] || p.fonctionnalites?.fr || []).map((f) => <li key={f}>{f}</li>)}</ul>
            <h4 className="mt-5 font-semibold">{t('projets.technos')}</h4>
            <div className="mt-2 flex flex-wrap gap-2">{(p.technos || []).map((x) => <span key={x} className="verre rounded-full px-3 py-1 text-xs">{x}</span>)}</div>
            <div className="mt-6 flex flex-wrap gap-3">
              {p.liens && Object.entries(p.liens).filter(([, u]) => u).map(([k, u]) => (
                <a key={k} href={u} target="_blank" rel="noreferrer" className="fond-degrade inline-flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white">{k === 'demo' ? t('projets.demo') : k} <ExternalLink size={14} /></a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
