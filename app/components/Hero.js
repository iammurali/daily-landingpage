'use client'
import Link from 'next/link';
import heroImage from 'public/images/heroimage.png'
import Image from 'next/image';
import HeroAnimation from './HeroAnimation/HeroAnimation'
import { useState } from 'react';
import { EmailDialog } from './Navbar';



const HeroSection = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <section className="px-8 md:px-24 pb-0 md:pb-28">
            <div className="flex flex-col md:flex-row md:justify-between ">
                <div className='sm:pb-16 md:w-1/2 pt-8 md:py-28'>
                    <h1 className="md:w-4/5  text-3xl leading-[2.5rem]  md:text-[3.25rem] md:leading-[4.25rem] font-bold pb-4">
                        {`Do what's important, we'll handle your payments daily`}
                    </h1>
                    <p className="md:w-3/4 text-base md:text-lg font-normal pb-8">
                        Daily is creating a world-leading crypto payment and data network to help you make payments, cut costs, and onboard more customers.
                    </p>
                    <div onClick={() => openModal()}>
                        <a className="px-6 py-3 md:px-8 md:py-4 rounded-full border-2 border-dailycolor text-dailycolor font-semibold">
                            Get a Demo
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center md:justify-end items-start pt-10 md:pt-0 lg:pt-0'>
                    <HeroAnimation />
                </div>
            </div>
            {EmailDialog(isOpen, closeModal)}

        </section>
    );
};

export default HeroSection;