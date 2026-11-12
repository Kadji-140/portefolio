import { useTranslation } from 'react-i18next'
import { Github, Mail } from 'lucide-react'
import { site } from '../../config/site'
export default function PiedDePage() {
  const { t } = useTranslation()
  return (
    <footer className="border-t border-bord py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-sec sm:flex-row">
        <div><span className="font-titre font-bold text-texte">{site.nom}.dev</span> — {t('footer.phrase')}</div>
        <div className="flex gap-4"><a href={site.github} aria-label="GitHub"><Github size={18} /></a><a href={`mailto:${site.email}`} aria-label="E-mail"><Mail size={18} /></a></div>
        <div>© {new Date().getFullYear()} · {t('footer.droits')}</div>
      </div>
    </footer>
  )
}
