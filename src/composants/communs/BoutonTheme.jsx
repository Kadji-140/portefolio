import { Sun, Moon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
export default function BoutonTheme({ sombre, basculer }) {
  return (
    <button onClick={basculer} aria-label="Changer de thème" className="grid h-11 w-11 place-items-center rounded-full verre">
      <AnimatePresence mode="wait">
        <motion.span key={sombre ? 'm' : 's'} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
          {sombre ? <Sun size={18} /> : <Moon size={18} />}
        </motion.span>
      </AnimatePresence>
    </button>
  )
}
