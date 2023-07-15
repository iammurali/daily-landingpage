'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import {motion} from 'framer-motion'

const NewsTicker = ({ companies }) => {
    const newsRef = useRef(null);

    useEffect(() => {
        const newsContainer = newsRef.current;
        const newsItems = newsContainer.getElementsByClassName('news-item');

        // Calculate total width of news container
        let totalWidth = 0;
        for (let i = 0; i < newsItems.length; i++) {
            totalWidth += newsItems[i].offsetWidth;
        }

        // Animate the news ticker
        let position = 0;
        let animationId = null;

        const animateTicker = () => {
            const firstItem = newsContainer.firstElementChild;
            const itemWidth = firstItem.offsetWidth;

            if (position <= -itemWidth+80) {
                position += itemWidth;
                newsContainer.appendChild(firstItem);
                newsContainer.style.transform = `translateX(${position}px)`;
            }

            position -= 0.3; // Adjust the scrolling speed here
            newsContainer.style.transform = `translateX(${position}px)`;

            animationId = requestAnimationFrame(animateTicker);
        };

        const startTicker = () => {
            if (animationId === null) {
                animateTicker();
            }
        };

        const stopTicker = () => {
            cancelAnimationFrame(animationId);
            animationId = null;
        };

        newsContainer.addEventListener('mouseenter', stopTicker);
        newsContainer.addEventListener('mouseleave', startTicker);

        startTicker();

        return () => {
            stopTicker();
            newsContainer.removeEventListener('mouseenter', stopTicker);
            newsContainer.removeEventListener('mouseleave', startTicker);
        };
    }, [companies]);

    return (
        <div className="overflow-hidden bg-[#FAFAFA] py-8 md:py-8">
            <p className='px-10 md:px-20 text-lg text-[#D6D6D6]'>Soon to be partnering with</p>
            <div className="flex py-3 md:py-8" ref={newsRef}>
                {companies.map((company, index) => (
                    <motion.div key={index} className="news-item ml-8 md:mx-14 text-4xl text-neutral-800">
                        <Image
                            key={index}
                            alt={'Company Name'}
                            src={company}
                        />
                    </motion.div>

                ))}
            </div>
        </div>
    );
};

export default NewsTicker;