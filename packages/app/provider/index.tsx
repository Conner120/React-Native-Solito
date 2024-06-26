import React from 'react'
import { GluestackUI } from './gluestack-ui'

export function Provider({ children }: { children: React.ReactNode }) {
  return <GluestackUI>{children}</GluestackUI>
}
