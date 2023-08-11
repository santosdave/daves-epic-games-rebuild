import { BELL_ICON, GEAR_LOGO } from '@/utils/data'
import React from 'react'

type Props = {}

export default function FriendList({ }: Props) {
    return (
        <div className='friendList'>
            <div className='wrap'>
                <div className='upper'>
                    <div className='menu'>
                        <div className='icons'>
                            <span className='icon iconBell' style={{ backgroundImage: `url(${BELL_ICON})` }}></span>
                            <img src={GEAR_LOGO}  className="icon" alt=''/>
                        </div>
                    </div>
                </div>
                <div className='connect'>
                    <p><a href="#!">Connect your social account</a> to find friends on EpicGames!</p>
                </div>
            </div>
        </div>
    )
}