import Link from 'next/link';
import heroImage from 'public/images/heroimage.png'
import Image from 'next/image';
import HeroAnimation from './HeroAnimation/HeroAnimation'



const HeroSection = () => {
    return (
        <section className="px-12 pb-28 md:px-24">
            <div className="flex flex-col md:flex-row md:justify-between ">
                <div className='sm:pb-16 md:w-1/2 pt-24 pb-24'>
                    <h1 className="md:w-4/5  text-4xl leading-[3rem]  md:text-[3.25rem] md:leading-[4rem] font-bold pb-4">
                        {`Do what's important, we'll handle your payments daily`}
                    </h1>
                    <p className="md:w-3/4 text-lg font-normal pb-8">
                        Daily is creating a world-leading crypto payment and data network to help you make payments, cut costs, and onboard more customers.
                    </p>
                    <Link legacyBehavior href="/demo">
                        <a className="px-8 py-4 rounded-full border border-dailycolor text-dailycolor font-semibold">
                            Get a Demo
                        </a>
                    </Link>
                </div>
                <div className='md:w-1/2 flex justify-end items-start pt-10 md:pt-0 lg:pt-0'>
                    {/* <Image
                        alt={'Hero Image'}
                        src={heroImage}
                        sizes="33vw"
                        className="sm:w-[25rem] sm:h-[21rem] w-[34rem] h-[27rem]"
                    /> */}
                    <HeroAnimation />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;