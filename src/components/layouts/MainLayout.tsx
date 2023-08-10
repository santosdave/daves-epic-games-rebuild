import React from 'react'
import { useGlobalContext } from '@/context/Context'
import Sidebar from './Sidebar'

type Props = {

}


interface MainLayoutProps {
    children: React.ReactNode
}
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className='grid grid-cols-2'>
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    )
}