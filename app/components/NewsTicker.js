'use client'
import Image from "next/image"
import { motion } from "framer-motion";

const marqueeVariants = {
    animate: {
        x: [0, -800],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 5,
                ease: "linear",
            },
        },
    },
};

const NewsTicker = ({ companies }) => {



    return (
        <section className="pt-16">
            <div className="bg-[#FAFAFA]">

            <div className="pl-8 pt-4 text-2xl text-[#D6D6D6]">soon to be partnering with..</div>
            <ul className="whitespace-nowrap inline-block overflow-x-hidden w-screen py-8  ">
                {companies.map((company, i) => <motion.li
                    variants={marqueeVariants}
                    animate="animate"
                    key={i} className="inline-block align-middle px-16">
                    <Image src={company} alt={'company name'} height={100} width={200} />
                </motion.li>)}

            </ul>
            </div>
        </section>
    )
}

export default NewsTicker;