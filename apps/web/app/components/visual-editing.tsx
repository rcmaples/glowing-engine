'use client'

import {VisualEditing} from 'next-sanity'
import {useEffect, useState} from 'react'

export default function VisualEditingProvider() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <VisualEditing />
}
