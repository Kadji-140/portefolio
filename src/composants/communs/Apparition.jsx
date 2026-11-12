import { motion } from 'framer-motion'
export default function Apparition({ children, delai = 0, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay: delai }}>{children}</motion.div>
  )
}
