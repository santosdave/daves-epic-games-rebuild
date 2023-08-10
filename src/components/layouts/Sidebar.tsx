import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { LIBRARY_LOGO, HOME_LOGO, UNREAL_LOGO, DOWNLOAD_LOGO, PROFILE_LOGO, GEAR_LOGO } from '@/utils/data'


type Props = {}

export default function Sidebar({ }: Props) {
    return (
        <div className='sidebarWrapper'>
            <div className='sidebar'>
                <div className='brand'>
                    <Image src="/assets/Sidebar/logo.png" width={36} height={36} alt="epic logo" />
                    <Link href="/">Epic Games</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link href={"/"} className='current'>
                                <Image className='icon' src={HOME_LOGO} alt='' width={20} height={20} />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/store"} className='current'>
                                <Image className='icon' src={HOME_LOGO} alt='' width={20} height={20} />
                                Store
                            </Link>
                        </li>
                        <li>
                            <Link href={"/library"} className='current'>
                                <Image className='icon' src={LIBRARY_LOGO} alt='' width={20} height={20} />
                                Library
                            </Link>
                        </li>
                        <li>
                            <Link href={"/uengine"} className='current'>
                                <Image className='icon' src={UNREAL_LOGO} alt='' width={20} height={20} />
                                Unreal Engine
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#downloads">
                                <Image className='icon' src={DOWNLOAD_LOGO} alt='' width={20} height={20} />
                                Downloads
                            </a>
                        </li>
                        <li>
                            <a href="#settings">
                                <Image className='icon' src={GEAR_LOGO} alt='' width={20} height={20} />
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#profile" className='profile'>
                                <Image className='icon' src={PROFILE_LOGO} alt='' width={20} height={20} />
                                Santosdave
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}