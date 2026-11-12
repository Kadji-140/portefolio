import { useEffect, useState } from 'react'
export default function useTheme() {
  const [sombre, setSombre] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', sombre)
    localStorage.setItem('theme', sombre ? 'dark' : 'light')
  }, [sombre])
  return [sombre, () => setSombre((s) => !s)]
}
