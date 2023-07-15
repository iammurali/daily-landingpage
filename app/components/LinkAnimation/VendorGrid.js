import { motion } from 'framer-motion';
import React from 'react';
import VendorArrow from './VendorArrow';
import Image from 'next/image';
import UberLogo from '../../../public/images/uberlogo.png';
import TargetLogo from '../../../public/images/targetlogo.png';
import StarbuckLogo from '../../../public/images/starbuckslogo.png';

const Vendor = ({ glowingCircle, visibleCircle }) => {
    return (
        <table className="table-auto">
            <tbody>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={UberLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <motion.div

                                className={`h-12 w-12 lg:h-14 lg:w-14 rounded-full ${glowingCircle == '2' ? 'bg-white' : ' bg-white'} opacity-50 flex justify-center items-center`}>
                                <Image alt={'logo'} src={TargetLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />

                            </motion.div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={StarbuckLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={TargetLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-[#94a3b8] ${visibleCircle == '5' ? 'opacity-0' : ''}`}></div>
                            <VendorArrow />

                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={StarbuckLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={UberLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />

                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-12 w-12 lg:h-14 lg:w-14 rounded-full ${glowingCircle == '8' ? 'bg-white' : ' bg-white'} ${visibleCircle == '8' ? 'opacity-0' : ''} opacity-50 flex justify-center items-center vendorCircle`}>
                                <Image alt={'logo'} src={TargetLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' />

                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={UberLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={TargetLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center secondVendorCircle">
                                <Image alt={'logo'} src={StarbuckLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image alt={'logo'} src={UberLogo} className='rounded-full h-10 w-10 lg:h-10 lg:w-10 ' /></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>


    );
};

export default Vendor;
