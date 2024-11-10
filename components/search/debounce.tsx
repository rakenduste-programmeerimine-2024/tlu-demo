import { useState, useEffect } from 'react'

type Results = {
    id: number
    title: string
  }

// Source for code: https://hackernoon.com/how-to-use-debounce-in-nextjs

export default function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}