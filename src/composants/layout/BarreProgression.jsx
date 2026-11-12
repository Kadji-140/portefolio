import { motion, useScroll, useSpring } from 'framer-motion'
export default function BarreProgression() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  return <motion.div style={{ scaleX: x }} className="fond-degrade fixed inset-x-0 top-0 z-50 h-0.5 origin-left" />
}
