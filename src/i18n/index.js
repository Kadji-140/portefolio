import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import fr from './locales/fr.json'
import en from './locales/en.json'
const sauvee = localStorage.getItem('langue')
const lng = sauvee || (navigator.language?.startsWith('fr') ? 'fr' : 'en')
i18n.use(initReactI18next).init({ resources: { fr: { translation: fr }, en: { translation: en } }, lng, fallbackLng: 'fr', interpolation: { escapeValue: false } })
document.documentElement.lang = lng
document.title = i18n.t('seo.titre')
i18n.on('languageChanged', (l) => { localStorage.setItem('langue', l); document.documentElement.lang = l; document.title = i18n.t('seo.titre') })
export default i18n
