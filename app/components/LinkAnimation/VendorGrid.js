import { motion } from 'framer-motion';
import React from 'react';
import VendorArrow from './VendorArrow';
import Image from 'next/image';
import UberLogo from '../../../public/images/uberlogo.png';
import TargetLogo from '../../../public/images/targetlogo.png';
import StarbuckLogo from '../../../public/images/starbuckslogo.png';
import vendor1 from '../../../public/images/vendor1/vendor1.png';
import vendor2 from '../../../public/images/vendor1/vendor2.png';
import vendor3 from '../../../public/images/vendor1/vendor3.png';
import vendor4 from '../../../public/images/vendor1/vendor4.png';
import vendor5 from '../../../public/images/vendor1/vendor5.png';
import vendor6 from '../../../public/images/vendor1/vendor6.png';
import vendor7 from '../../../public/images/vendor1/vendor7.png';
import vendor8 from '../../../public/images/vendor1/vendor8.png';
import vendor9 from '../../../public/images/vendor1/vendor9.png';
import vendor10 from '../../../public/images/vendor1/vendor10.png';

const Vendor = ({ glowingCircle, visibleCircle }) => {
    return (
        <table className="table-auto">
            <tbody>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor1} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <motion.div

                                className={`h-10 w-10 lg:h-14 lg:w-14 rounded-full ${glowingCircle == '2' ? 'bg-white' : ' bg-white'} opacity-50 flex justify-center items-center`}>
                                <Image alt={'logo'} src={vendor2} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />

                            </motion.div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor3} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor4} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-10 w-10 lg:h-14 lg:w-14 rounded-full opacity-50 bg-white ${visibleCircle == '5' ? 'md:opacity-0' : ''}`}>
                            <Image alt={'logo'} src={vendor5} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>

                            <VendorArrow />

                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor6} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor7} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />

                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-10 w-10 lg:h-14 lg:w-14 rounded-full ${glowingCircle == '8' ? 'bg-white' : ' bg-white'} ${visibleCircle == '8' ? 'opacity-0' : ''} opacity-50 flex justify-center items-center vendorCircle`}>
                                <Image alt={'logo'} src={vendor8} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />

                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor10} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor9} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center secondVendorCircle">
                                <Image alt={'logo'} src={vendor2} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={vendor6} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>


    );
};

export default Vendor;
