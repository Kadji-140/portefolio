import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Sparkles, Layers, Palette, Cpu, ShieldCheck, Rocket, Zap, CheckCircle2, TrendingUp, Clock } from 'lucide-react'
import Apparition from '../communs/Apparition'
import TitreSection from '../communs/TitreSection'

const iconesEtapes = [Layers, Palette, Cpu, ShieldCheck, Rocket]
const iconesBenefices = [Zap, CheckCircle2, TrendingUp, Clock]

export default function BoosteIA() {
  const { t } = useTranslation()
  const etapes = t('methode.etapes', { returnObjects: true }) || []
  const benefices = t('methode.benefices', { returnObjects: true }) || []

  return (
    <section id="methode" className="relative overflow-hidden py-28">
      {/* Halos d'arrière-plan discrets */}
      <div className="halo left-1/3 top-1/4 h-80 w-80 -translate-x-1/2 bg-cyan/20" aria-hidden />
      <div className="halo right-1/4 bottom-1/4 h-72 w-72 bg-violet/20" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Badge d'en-tête */}
        <div className="mb-3 flex justify-center">
          <span className="verre inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-cyan">
            <Sparkles size={14} className="text-cyan" />
            {t('methode.badge')}
          </span>
        </div>

        <TitreSection titre={t('methode.titre')} sous={t('methode.sous')} />

        {/* Pipeline d'exécution en 5 étapes claires */}
        <div className="mb-16">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {etapes.map((e, i) => {
              const Icone = iconesEtapes[i] || Layers
              return (
                <motion.div
                  key={e.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="verre group relative flex flex-col justify-between rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="degrade font-titre text-xl font-bold">
                        0{i + 1}
                      </span>
                      <div className="grid h-8 w-8 place-items-center rounded-lg bg-zinc-100 dark:bg-white/5 text-cyan group-hover:bg-cyan/10 transition-colors">
                        <Icone size={16} />
                      </div>
                    </div>
                    <h3 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {e.t}
                    </h3>
                    <p className="text-xs leading-relaxed text-sec">
                      {e.d}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 4 Atouts concrets pour le client */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefices.map((b, i) => {
            const IconeBenefice = iconesBenefices[i] || Zap
            return (
              <Apparition key={b.t} delai={i * 0.08}>
                <div className="verre group h-full rounded-2xl p-6 transition-all duration-300 hover:border-violet/40 hover:shadow-lg hover:shadow-violet/10">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet/10 text-violet group-hover:bg-violet group-hover:text-white transition-colors">
                    <IconeBenefice size={20} />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {b.t}
                  </h3>
                  <p className="text-sm leading-relaxed text-sec">
                    {b.d}
                  </p>
                </div>
              </Apparition>
            )
          })}
        </div>
      </div>
    </section>
  )
}
