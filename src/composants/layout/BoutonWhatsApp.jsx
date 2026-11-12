import { MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { site } from '../../config/site'
export default function BoutonWhatsApp() {
  const { t } = useTranslation()
  return (
    <a href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t('wa.msg'))}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 animate-bounce place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30">
      <MessageCircle />
    </a>
  )
}
