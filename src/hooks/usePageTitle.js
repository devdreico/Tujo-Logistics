import { useEffect } from 'react'

export default function usePageTitle(title, suffix = 'Tujo Logistics') {
  useEffect(() => {
    document.title = title ? `${title} — ${suffix}` : 'Tujo Logistics'
  }, [title, suffix])
}
