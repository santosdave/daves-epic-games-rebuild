import React from 'react'
import { useGlobalContext } from '@/context/Context'
import Sidebar from './Sidebar'
import SideContent from './SideContent'
import FriendList from '../ui/friendList/FriendList'

type Props = {

}


interface MainLayoutProps {
    children: React.ReactNode
}
export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className='grid grid-cols-3'>
            <Sidebar />
            <div className='relative py-2 px-3 min-h-screen w-[40vw]'>
                {children}
            </div>
            <FriendList/>
        </div>
    )
}