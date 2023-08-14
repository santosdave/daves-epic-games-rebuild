import { BELL_ICON, GEAR_LOGO, SEARCH_LOGO, FRIENDS_DATA, DEFAULT_USER} from '@/utils/data'
import Image from 'next/image'
import React, { useState } from 'react'
import FriendlistUsers from './FriendlistUsers'


type Props = {}

export default function FriendList({ }: Props) {

    const height = [
        { height: '90vh', top: '3em' },
        { height: '80vh', top: '7em' }
    ]
    const [search, setSearch] = useState('');
    const [toggle, setToggle] = useState(true);
    const [current, setCurrent] = useState(null);


    const onToggle = () => setToggle(!toggle);
    const onChange = (e: any) => setSearch(e.target.value);
    const clearSearch = () => setSearch('');

    return (
        <div className='friendList'>
            <div className='wrap'>
                <div className='upper'>
                    <div className='menu'>
                        <div className='icons'>
                            <span className='icon iconBell' style={{ backgroundImage: `url(${BELL_ICON})` }}></span>
                            <Image className='icon' src={GEAR_LOGO} alt='' width={6} height={6} />
                        </div>
                        <div className='toggleMenu'>
                            <input type="radio" name="type" id="friends" />
                            <label htmlFor="friends">Friends</label>
                            <input type="radio" name="type" id="requests" />
                            <label htmlFor="requests">Requests</label>
                        </div>
                        <div className='search'>
                            <input className="SearchInput" type="text" placeholder={toggle ? 'Search or add players' : 'Filter friend requests'} onChange={onChange} value={search} />
                            {search.length > 0 ? <button className="" onClick={clearSearch}>CLEAR</button> : <span className="" style={{ backgroundImage: `url(${SEARCH_LOGO})` }}></span>}
                        </div>
                    </div>

                    {toggle ? <FriendlistUsers setCurrent={setCurrent}  search={search} friends={FRIENDS_DATA} user={DEFAULT_USER} /> : null}
                </div>
                <div className='connect'>
                    <p><a href="#!">Connect your social account</a> to find friends on EpicGames!</p>
                </div>
            </div>
        </div>
    )
}