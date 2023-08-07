import React from 'react'
import { useGlobalContext } from '@/context/Context'

import Header from './Header'
import Footer from './Footer'


type Props = {}

interface MainLayoutProps {
    children: React.ReactNode
}
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}