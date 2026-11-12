import { useEffect, useState } from 'react'
export default function useScrollSpy(ids) {
  const [actif, setActif] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActif(e.target.id)), { rootMargin: '-40% 0px -55% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); el && obs.observe(el) })
    return () => obs.disconnect()
  }, [ids.join()])
  return actif
}
