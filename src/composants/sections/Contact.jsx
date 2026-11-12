import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Mail, MessageCircle, Github, Phone, Loader2, Send, CheckCircle2, AlertCircle, ChevronDown, Sparkles } from 'lucide-react'
import Apparition from '../communs/Apparition'
import { site } from '../../config/site'

const champStyle =
  'w-full rounded-xl px-4 py-3 text-sm transition-all duration-200 outline-none ' +
  'bg-white dark:bg-[#12121c] ' +
  'text-zinc-900 dark:text-zinc-100 ' +
  'border border-zinc-300 dark:border-white/10 ' +
  'placeholder:text-zinc-400 dark:placeholder:text-zinc-600 ' +
  'hover:border-zinc-400 dark:hover:border-white/20 ' +
  'focus:border-cyan focus:ring-2 focus:ring-cyan/25 focus:bg-white dark:focus:bg-[#161624]'

export default function Contact() {
  const { t } = useTranslation()
  const [etat, setEtat] = useState('repos') // 'repos' | 'envoi' | 'ok' | 'erreur'
  const [erreurs, setErreurs] = useState({})

  const envoyer = async (e) => {
    e.preventDefault()
    const f = new FormData(e.target)
    const err = {}

    if (!f.get('name')?.toString().trim()) {
      err.name = t('contact.requis')
    }
    if (!f.get('email')?.toString().trim()) {
      err.email = t('contact.requis')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.get('email').toString())) {
      err.email = 'Format d’email invalide'
    }
    if (!f.get('message')?.toString().trim()) {
      err.message = t('contact.requis')
    }

    setErreurs(err)
    if (Object.keys(err).length > 0) return

    // Repli vers mailto si Formspree n'est pas encore configuré
    if (!site.formspreeId || site.formspreeId === 'TODO') {
      const sujet = encodeURIComponent(`[Contact Portfolio] ${f.get('type') || 'Projet'}`)
      const corps = encodeURIComponent(
        `Nom: ${f.get('name')}\nEmail: ${f.get('email')}\nType: ${f.get('type')}\nBudget: ${f.get('budget') || 'Non précisé'}\n\nMessage:\n${f.get('message')}`
      )
      window.location.href = `mailto:${site.email}?subject=${sujet}&body=${corps}`
      setEtat('ok')
      return
    }

    setEtat('envoi')
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        body: f,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setEtat('ok')
        e.target.reset()
      } else {
        setEtat('erreur')
      }
    } catch {
      setEtat('erreur')
    }
  }

  const typesProjets = t('contact.types', { returnObjects: true }) || []

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28">
      {/* Halo subtil en arrière-plan */}
      <div className="halo -left-10 top-1/2 h-80 w-80 -translate-y-1/2 bg-violet/20" aria-hidden />
      <div className="halo -right-10 bottom-10 h-80 w-80 bg-cyan/20" aria-hidden />

      <Apparition className="verre relative overflow-hidden rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          
          {/* Colonne Gauche : Présentation & Canaux directs */}
          <div>
             <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan/10 px-3.5 py-1 text-xs font-semibold text-cyan">

              {t('contact.badge')}
            </div>

            <h2 className="text-3xl font-bold sm:text-4xl leading-tight">
              <span className="degrade">{t('contact.titre')}</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-sec sm:text-base">
              {t('contact.sous')}
            </p>

            {/* Bouton WhatsApp direct mis en valeur */}
            <div className="mt-8">
              <a
                className="group flex h-13 w-full items-center justify-center gap-2.5 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-sm shadow-lg shadow-green-500/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
                target="_blank"
                rel="noreferrer"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t('wa.msg'))}`}
              >
                <MessageCircle size={20} className="transition-transform group-hover:rotate-12" />
                <span>{t('contact.wa')}</span>
              </a>
            </div>

            {/* Coordonnées directes */}
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="verre flex items-center gap-3.5 rounded-xl p-3 text-sm text-zinc-800 dark:text-zinc-200 hover:border-cyan/40 transition-colors"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-violet/10 text-violet">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="block text-xs text-sec">E-mail</span>
                  <span className="font-medium">{site.email}</span>
                </div>
              </a>

              <a
                href={`tel:${site.whatsapp}`}
                className="verre flex items-center gap-3.5 rounded-xl p-3 text-sm text-zinc-800 dark:text-zinc-200 hover:border-cyan/40 transition-colors"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-cyan/10 text-cyan">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="block text-xs text-sec">Téléphone / WhatsApp</span>
                  <span className="font-medium">{site.telephone}</span>
                </div>
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="verre flex items-center gap-3.5 rounded-xl p-3 text-sm text-zinc-800 dark:text-zinc-200 hover:border-cyan/40 transition-colors"
              >
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-200 dark:bg-white/10 text-zinc-900 dark:text-white">
                  <Github size={16} />
                </div>
                <div>
                  <span className="block text-xs text-sec">GitHub</span>
                  <span className="font-medium">github.com/Kadji-140</span>
                </div>
              </a>
            </div>

            {/* Note de réassurance */}
            <div className="mt-6 rounded-xl border border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-white/[0.02] p-3.5 text-xs text-sec">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200"> {t('contact.garantie')}</span>
            </div>
          </div>

          {/* Colonne Droite : Formulaire soigné & stylé pour le mode sombre et clair */}
          <form onSubmit={envoyer} noValidate className="space-y-4">
            {/* Ligne 1 : Nom et Email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {t('contact.nom')} <span className="text-red-400">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder={t('contact.nom_placeholder')}
                  aria-label={t('contact.nom')}
                  className={champStyle}
                />
                {erreurs.name && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} />
                    {erreurs.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {t('contact.email')} <span className="text-red-400">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder={t('contact.email_placeholder')}
                  aria-label={t('contact.email')}
                  className={champStyle}
                />
                {erreurs.email && (
                  <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                    <AlertCircle size={12} />
                    {erreurs.email}
                  </p>
                )}
              </div>
            </div>

            {/* Ligne 2 : Type de projet et Budget */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {t('contact.type')}
                </label>
                <div className="relative">
                  <select
                    name="type"
                    aria-label={t('contact.type')}
                    className={`${champStyle} appearance-none pr-10 cursor-pointer`}
                    defaultValue={typesProjets[0] || ''}
                  >
                    {typesProjets.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-white dark:bg-[#12121c] text-zinc-900 dark:text-zinc-100 py-1"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={16}
                    className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 dark:text-zinc-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {t('contact.budget')}
                </label>
                <input
                  name="budget"
                  type="text"
                  placeholder={t('contact.budget_placeholder')}
                  aria-label={t('contact.budget')}
                  className={champStyle}
                />
              </div>
            </div>

            {/* Ligne 3 : Message */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                {t('contact.message')} <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder={t('contact.message_placeholder')}
                aria-label={t('contact.message')}
                className={`${champStyle} resize-y min-h-[100px]`}
              />
              {erreurs.message && (
                <p className="mt-1 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle size={12} />
                  {erreurs.message}
                </p>
              )}
            </div>

            {/* Bouton Envoyer */}
            <button
              type="submit"
              disabled={etat === 'envoi'}
              className="fond-degrade group relative inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white shadow-lg shadow-violet/25 hover:shadow-cyan/25 hover:scale-[1.008] active:scale-[0.99] transition-all duration-200 disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
            >
              {etat === 'envoi' ? (
                <>
                  <Loader2 className="animate-spin" size={17} />
                  <span>{t('contact.envoi')}</span>
                </>
              ) : (
                <>
                  <span>{t('contact.envoyer')}</span>
                  <Send size={15} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {/* Messages de feedback utilisateur */}
            {etat === 'ok' && (
              <div
                role="status"
                className="flex items-start gap-2.5 rounded-xl border border-green-500/30 bg-green-500/10 p-3.5 text-xs sm:text-sm text-green-600 dark:text-green-400"
              >
                <CheckCircle2 size={18} className="shrink-0 text-green-500 mt-0.5" />
                <span>{t('contact.ok')}</span>
              </div>
            )}

            {etat === 'erreur' && (
              <div
                role="alert"
                className="flex items-start gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 p-3.5 text-xs sm:text-sm text-red-600 dark:text-red-400"
              >
                <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                <span>{t('contact.erreur')}</span>
              </div>
            )}
          </form>
        </div>
      </Apparition>
    </section>
  )
}
