"use client"
import { useEffect, useState } from 'react';

export const useInfiniteScroll = (callback: () => void) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !isFetching) {
            setIsFetching(true);
            callback();
        }
    };

    return isFetching;
};
