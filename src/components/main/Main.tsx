import React from 'react'
import { FORTNITE_LOGO } from '@/utils/data'
import Image from 'next/image';
import NewsData from "@/utils/newsData.json"
import Moment from 'react-moment'

type Props = {}

export default function Main({ }: Props) {
    return (
        <>
            <div style={{ width: 'calc(100% - 375px)' }}>
                <div className="">
                    <p>Quick Launch</p>
                    <ul className="">
                        <li>
                            <Image className='icon' src={FORTNITE_LOGO} alt="fortnite" width={20} height={20} />
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <p>News</p>
                <section className='newsList'>
                    {NewsData && NewsData.length > 0 && NewsData.map((newItem: any) => (
                        <a className='card' href={'https://www.epicgames.com/store/en-US' + newItem.url} key={newItem._id}>
                            {/* Display some content within the anchor element */}
                            <img src={newItem._images_[0]} alt="game" />
                            <span className='timeline'><Moment date={newItem.lastModified} filter={(d) => d.replace(' days', 'D').replace(' hours', 'H').toUpperCase()} fromNow /></span>
                            <span className='description'>{newItem.title}</span>
                            <span className='readMore'>Read More</span>
                        </a>
                    ))}
                </section>
            </div>
            <div className=''>
                <section className='newsfeed'>
                    {NewsData && NewsData.length > 0 && NewsData.slice(3).map((news: any) => (
                        <li key={news._id}>
                            <a href={'https://www.epicgames.com/store/en-US' + news.url}>
                                <img src={news._images_[0]} alt="game" />
                                <span className='timeline'><Moment date={news.lastModified} filter={(d) => d.replace(' days', 'D').replace(' hours', 'H').toUpperCase()} fromNow /></span>
                                <span className='description'>{news.title}</span>
                                <span className='readMore'>Read More</span>
                            </a>
                        </li>
                    ))}
                </section>
            </div>

        </>
    )
}