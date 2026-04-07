// src/layout/MainLayout.tsx

import type { ReactNode } from 'react'
import './MainLayout.scss'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <main className="main-layout">
      <div className="main-layout__container">{children}</div>
    </main>
  )
}

export default MainLayout