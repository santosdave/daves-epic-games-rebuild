import React, { createContext, useContext, useState } from "react";
import toast from 'react-hot-toast'
import { DEFAULT_USER, FRIENDS_DATA } from "@/utils/data";
interface Props {
    children?: React.ReactNode;
}

interface User {
    username: string;
    status: string;
    color: string;
}

interface Friend {
    id: string;
    username: string;
    status: string;
    color: string;
}

interface Friends extends Array<Friend> {}


export interface GlobalContextType {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    user: User;
    setUser: (user: User) => void;
    friends: Friends;
    setFriends: (friends: Friends) => void;
    addFriend: (friend: Friend) => void;
    displayFriendList: boolean;
    setDisplayFriendList: (displayFriendList: boolean) => void;
    downloads: any[];
    setDownloads: (downloads: any[]) => void;
    displayDownloads: boolean;
    setDisplayDownloads: (displayDownloads: boolean) => void;
    news: any[];
    setNews: (news: any[]) => void;

}

const GlobalContext = createContext<GlobalContextType | null>(null);

const GlobalContextProvider = ({ children }: Props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<User>(DEFAULT_USER);
    const [friends, setFriends] = useState<Friends>(FRIENDS_DATA);
    const [displayFriendList, setDisplayFriendList] = useState(false);
    const [downloads, setDownloads] = useState<any[]>([]);
    const [displayDownloads, setDisplayDownloads] = useState(false);
    const [news, setNews] = useState<any[]>([]);

    const addFriend = (friend: Friend) => {
        toast.success(`Friend added.`);
    };

    return (
        <GlobalContext.Provider
            value={{
                modalOpen,
                setModalOpen,
                user,
                setUser,
                friends,
                setFriends,
                addFriend, // <-- Corrected function name
                displayFriendList,
                setDisplayFriendList,
                downloads,
                setDownloads,
                displayDownloads,
                setDisplayDownloads,
                news,
                setNews,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};








export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);

    if (context === null) {
        throw new Error(
            "useGlobalContext must be used within a GlobalContextProvider"
        );
    }

    return context;
};

export default GlobalContextProvider;