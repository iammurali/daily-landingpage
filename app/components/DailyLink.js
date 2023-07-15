'use client'
import Link from 'next/link';
import heroImage from 'public/images/heroimage.png'
import Image from 'next/image';
import LinkAnimation from './LinkAnimation/LinkAnimation'
// TODO: Create a circle next to daily

const DailyLink = () => {
    return (
        <section className="bg-black px-40 py-20 text-center">

            <span className='text-white text-7xl font-bold inline-block'>
                Daily <span className='text-blue-500'>Link.</span>
            </span>
            <p className='text-white text-3xl font-bold py-8'>
                Seamless payment architecture for businesses
            </p>
            <div className='py-20 flex justify-center'>
                <LinkAnimation />
            </div>

        </section>
    );
};

export default DailyLink;