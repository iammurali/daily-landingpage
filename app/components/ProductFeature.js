'use client'
import Link from 'next/link';
import heroImage from 'public/images/phoneimage.png'
// import phoneAnimation from 'public/images/phoneimage.png'
import Image from 'next/image';
import FeatureAnimation from './FeatureAnimation'
import ReactPlayer from 'react-player/lazy';
import { useEffect, useRef } from 'react';



const ProductFeature = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        video.playbackRate = 1.25;
        video.play(); // Autoplay the video when component mounts
    }, []);
    return (
        <section className="px-20 py-20 flex items-center justify-center">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className='md:w-1/2 flex justify-center md:justify-end items-center pr-4'>
                    {/* <Image
                        alt={'Hero Image'}
                        src={heroImage}
                        sizes="33vw"
                        className="w-[20rem] h-[26rem] md:w-[30rem] md:h-[34rem]"
                    /> */}
                    {/* <ReactPlayer
                        url="/images/phoneanimation.mov"
                        controls
                        width="100%"
                        height="auto"
                    /> */}
                    <video ref={videoRef} muted autoPlay loop style={{ width: '600px', height: '600px' }}>
                        <source src="/phoneanimation.mp4" type="video/mp4" />
                    </video>
                    {/* <ReactPlayer
                        width="530px"
                        height="300px"
                        url="https://www.youtube.com/embed/Te_DTmOt4Xw"
                    /> */}
                </div>
                <div className='md:w-1/2  h-[36rem] overflow-hidden pl-4'>
                    <FeatureAnimation />
                </div>
            </div>
        </section>
    );
};

export default ProductFeature;