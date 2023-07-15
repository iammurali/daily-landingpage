import { motion } from 'framer-motion';
import React from 'react';
import ExchangeArrow from './ExchangeArrow';
import Image from 'next/image';
import coinbaseLogo from '../../../public/images/coinlogo.png';
import ledgerLogo from '../../../public/images/ledgerlogo.png';
import metamaskLogo from '../../../public/images/metamasklogo.png';

const ExchangeGrid = ({ glowingCircle, visibleCircle }) => {
    return (
        <table className="table-auto flex-shrink">
            <tbody>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={coinbaseLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <motion.div
                                className={`h-12 w-12 lg:h-14 lg:w-14 rounded-full exchangeCircle flex justify-center items-center bg-white opacity-50`}>
                                <Image
                                    alt={'logo'}
                                    src={ledgerLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </motion.div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={metamaskLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={metamaskLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center ${visibleCircle == '5' ? 'opacity-0' : ''}`}>
                                <Image
                                    alt={'logo'}
                                    src={ledgerLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center secondExchangeCircle">
                                <Image
                                    alt={'logo'}
                                    src={coinbaseLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={metamaskLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-12 w-12 lg:h-14 lg:w-14 rounded-full ${glowingCircle == '8' ? 'bg-white opacity-50' : ' bg-[#94a3b8]'} ${visibleCircle == '8' ? 'opacity-0' : ''}`}></div>
                            <ExchangeArrow />

                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={coinbaseLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={metamaskLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={ledgerLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-12 w-12 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={ledgerLogo}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>


    );
};

export default ExchangeGrid;
