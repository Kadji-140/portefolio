import { lazy, Suspense } from 'react'
import useTheme from './hooks/useTheme'
import Navbar from './composants/layout/Navbar'
import BarreProgression from './composants/layout/BarreProgression'
import BoutonWhatsApp from './composants/layout/BoutonWhatsApp'
import PiedDePage from './composants/layout/PiedDePage'
import Hero from './composants/sections/Hero'
import APropos from './composants/sections/APropos'
import Services from './composants/sections/Services'
// Sections lourdes chargées à la demande
const BoosteIA = lazy(() => import('./composants/sections/BoosteIA'))
const Projets = lazy(() => import('./composants/sections/Projets'))
const Competences = lazy(() => import('./composants/sections/Competences'))
const Processus = lazy(() => import('./composants/sections/Processus'))
const Pourquoi = lazy(() => import('./composants/sections/Pourquoi'))
const Temoignages = lazy(() => import('./composants/sections/Temoignages'))
const Contact = lazy(() => import('./composants/sections/Contact'))
export default function App() {
  const [sombre, basculer] = useTheme()
  return (
    <>
      <BarreProgression />
      <Navbar sombre={sombre} basculer={basculer} />
      <main>
        <Hero /><APropos /><Services />
        <Suspense fallback={null}><BoosteIA /><Projets /><Competences /><Processus /><Pourquoi /><Temoignages /><Contact /></Suspense>
      </main>
      <PiedDePage /><BoutonWhatsApp />
    </>
  )
}
