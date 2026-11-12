import { useTranslation } from 'react-i18next'
export default function BoutonLangue() {
  const { i18n } = useTranslation()
  return (
    <div className="flex h-11 items-center rounded-full p-1 text-xs font-semibold verre" role="group" aria-label="Langue">
      {['fr', 'en'].map((l) => (
        <button key={l} onClick={() => i18n.changeLanguage(l)} aria-pressed={i18n.language === l}
          className={`rounded-full px-3 py-1.5 uppercase transition ${i18n.language === l ? 'fond-degrade text-white' : 'text-sec'}`}>{l}</button>
      ))}
    </div>
  )
}
