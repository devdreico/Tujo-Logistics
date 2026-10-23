import { useEffect } from 'react'

export default function usePageTitle(title, suffix = 'Tujo Logistics') {
  useEffect(() => {
    if (title) {
      document.title = `${title} — ${suffix}`
    } else {
      document.title = 'Tujo Logistics'
    }
  }, [title, suffix])
}
