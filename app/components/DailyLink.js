'use client'
import Link from 'next/link';
import heroImage from 'public/images/heroimage.png'
import Image from 'next/image';
import LinkAnimation from './LinkAnimation/LinkAnimation'
import { Graffiti1, Graffiti2 } from "./icons"
// TODO: Create a circle next to daily

const DailyLink = () => {
    return (
        <section className="bg-black px-8 py-8 md:px-40 md:py-20 text-center lg:h-screen flex justify-center items-center flex-col">

            <span className='text-white text-5xl md:text-7xl font-bold inline-block pt-8 relative'>
                <span className="absolute -top-5 md:top-5 -right-10 md:-right-52">

                    <Graffiti2 />
                </span>
                Daily <span className='text-blue-500'>Link.</span>
                <span className="absolute bottom-10 md:-bottom-8 -left-12 md:-left-64">

                    <Graffiti1 />
                </span>
            </span>
            <p className='text-white text-2xl md:text-3xl font-bold py-6 md:py-8'>
                Seamless payment architecture for businesses
            </p>
            <p className='text-white text-lg md:text-lg pb-8'>Daily Link makes it easy for businesses to offer their users crypto payments while receiving fiat.</p>
            <div className='py-1 md:py-20 flex justify-center'>
                <LinkAnimation />
            </div>

        </section>
    );
};

export default DailyLink;