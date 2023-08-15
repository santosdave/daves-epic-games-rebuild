import React, { useEffect, useState } from 'react';
import { FRIENDS_DATA, FRIENDS_ICON } from '@/utils/data';
import newsData from '@/utils/newsData.json';

type Props = {};

export default function Store({ }: Props) {
    const onlineCount = FRIENDS_DATA.filter((u: { status: string }) => u.status === 'online').length;
    const gameList = newsData.slice(0, 6);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (counter === gameList.length - 1) return setCounter(0);
            setCounter((prevCounter) => (prevCounter + 1) % gameList.length);
        }, 8000);

        return () => clearInterval(interval);
    }, [gameList.length, counter]);

    // Change current slide
    const onClick = (e: any) => {
        const value = parseInt(e.currentTarget.closest('div')?.id || '0');
        if (value !== counter) setCounter(value);
    };

    // Toggle friend list - implement this function
    const toggleFriendlist = () => {
        // Implement the toggle functionality here
    };

    return (
        <>
            <nav className='storeNavbar'>
                <ul className='primaryNav'>
                    <li>Discover</li>
                    <li>Browse</li>
                </ul>
                <ul>
                    <li>Wishlist</li>
                    <li>
                        <input type='search' placeholder='Search' />
                    </li>
                    <li>
                        <span className='icon' style={{ backgroundImage: `url(${FRIENDS_ICON})` }} onClick={toggleFriendlist}>
                            {onlineCount}
                        </span>
                    </li>
                </ul>
            </nav>
            <div className='sliderWrapper'>
                <div className='featured' style={{ backgroundImage: `url(${gameList[counter]._images_[0]})` }}>
                    <div className="itemText">
                        <h3>{gameList[counter].title}</h3>
                        <div className="buttons">
                            <a href="#!" className={`btn btnDownload`}>DOWNLOAD NOW</a>
                            <a href="#!" className={`btn btnWishlist`}>+</a>
                        </div>
                    </div>
                </div>

                <ul className='gamelist'>
                    {gameList && gameList.map((game: any, index: any) => (
                        <li key={game._id} onClick={onClick} style={{ display: 'block' }}>
                            <div key={index} className={`game ${index === counter ? 'current' : ''}`}>
                                <img src={game._images_[0]} alt="game" />
                                {game.title.split(' ').slice(0, 4).join(' ')}...
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
