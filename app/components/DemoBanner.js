import Link from 'next/link';
import heroImage from 'public/images/heroimage.png'
import PhoneDemo from 'public/images/phonedemo.png'
import Image from 'next/image';


const DemoBanner = () => {
    return (
        <section className="px-5 py-10 md:px-20 md:py-6 text-center  ">

            <div className='md:px-40 text-white bg-black rounded-xl'>
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 text-left py-10 md:py-0">
                        <h4 className="text-lg font-bold mb-8">One App,<br />
                            all crypto wallets/accounts
                        </h4>
                        <Link legacyBehavior href="/demo">
                            <a className="text-white px-7 py-3 rounded-3xl bg-dailycolor font-semibold">
                                Get a Demo
                            </a>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Image src={PhoneDemo} alt='phone demo image' className='p-0' />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default DemoBanner;