import React, { useState, useEffect } from 'react'



type Props = {
    setCurrent: any;
    search: any;
    friends: any;
    user: any;
}

export default function FriendlistUsers({ setCurrent, search, friends, user }: Props) {
    const [onlineCount, setOnlineCount] = useState(0);


    useEffect(() => {
        const onlineCount = friends.filter((user: { status: string; }) => user.status === 'online').length + 1;
        setOnlineCount(onlineCount);
    }, [friends]);

    const onCurrent = (user: any) => setCurrent(user);
    const sortList = (a: any, b: any) => (a.status === 'online') ? 1 : -1;

    return (
        <div className='userlistwrapper'>
            <div className='userlist' style={{ height: '55vh' }}>
                <p>Online {onlineCount}</p>
                <ul>
                    <li>
                        <span className='icon online' style={{ backgroundColor: user.color }}></span>
                        {user.username}
                        <span className='you'>YOU</span>
                        <span className='status'>{user.status.toUpperCase()}</span>
                    </li>
                    {friends && friends.length > 0 && friends.map((friend: any, key: any) => (
                        <li key={key} onClick={onCurrent(friend)} >
                            <span className='icon' style={{ background: friend.color }}>
                                {friend.username[0]}
                            </span>
                            {friend.username}
                            <span className='status'>
                                {friend.status[0].toUpperCase() + friend.status.slice(1)}
                            </span>
                        </li>
                    ))}
                </ul>
                <p>Friends</p>
                <ul>
                    {friends
                        .filter((user: { you: any; username: string; }) => !user.you && user.username?.toLowerCase().includes(search.toLowerCase())) // Add null/undefined check here
                        .sort(sortList)
                        .map((user: { color: any; username: string | undefined; status: string | any[]; }, index: React.Key | null | undefined) => (
                            <li key={index} onClick={() => onCurrent(user)}>
                                <span className={`icon status ${user.color}`}>{user.username ? user.username[0].toUpperCase() : ''}</span> {/* Add null/undefined check here */}
                                {user.username}
                                <span className="status">{user.status[0].toUpperCase() + user.status.slice(1)}</span>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}