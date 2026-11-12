import { useTranslation } from 'react-i18next'
import { MessageSquare, PenTool, Code2, PackageCheck, LifeBuoy } from 'lucide-react'
import Apparition from '../communs/Apparition'
import TitreSection from '../communs/TitreSection'
const icones = [MessageSquare, PenTool, Code2, PackageCheck, LifeBuoy]
export default function Processus() {
  const { t } = useTranslation()
  return (
    <section id="processus" className="mx-auto max-w-6xl px-5 py-28">
      <TitreSection titre={t('processus.titre')} />
      <ol className="grid gap-6 md:grid-cols-5">
        {t('processus.etapes', { returnObjects: true }).map((e, i) => { const Icone = icones[i]; return (
          <Apparition key={e.t} delai={i * 0.12}>
            <li className="text-center"><div className="fond-degrade mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full text-white"><Icone /></div>
              <h3 className="font-semibold">{i + 1}. {e.t}</h3><p className="mt-1 text-sm text-sec">{e.d}</p></li>
          </Apparition>) })}
      </ol>
    </section>
  )
}
