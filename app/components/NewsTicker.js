'use client'
import Image from "next/image"
import { motion } from "framer-motion";
import Ticker from "framer-motion-ticker";


const NewsTicker = ({ companies }) => {



    return (
        <section className="pt-8">
            <div className="bg-[#FAFAFA]">

                <div className="pl-8 pt-4 text-2xl text-[#D6D6D6]">soon to be partnering with</div>
                <ul className="whitespace-nowrap inline-block overflow-x-hidden w-screen py-8  ">
                    <Ticker duration={23}>
                        {companies.map((item, index) => (
                            <div className="align-middle px-16" key={index}><Image  src={item} alt={'company name'} height={100} width={200} /></div>
                        ))}
                    </Ticker>
                </ul>
            </div>
        </section>
    )
}

export default NewsTicker;