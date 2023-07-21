import { motion } from 'framer-motion';
import React from 'react';
import ExchangeArrow from './ExchangeArrow';
import Image from 'next/image';
import coinbaseLogo from '../../../public/images/coinlogo.png';
import ledgerLogo from '../../../public/images/ledgerlogo.png';
import metamaskLogo from '../../../public/images/metamasklogo.png';
import exhange1 from '../../../public/images/exhange1/exchange1.png';
import exhange2 from '../../../public/images/exhange1/exchange2.png';
import exhange3 from '../../../public/images/exhange1/exchange3.png';
import exhange4 from '../../../public/images/exhange1/exchange4.png';
import exhange5 from '../../../public/images/exhange1/exchange5.png';
import exhange6 from '../../../public/images/exhange1/exchange6.png';
import exhange7 from '../../../public/images/exhange1/exchange7.png';
import exhange8 from '../../../public/images/exhange1/exchange8.png';
import exhange9 from '../../../public/images/exhange1/exchange9.png';
import exhange10 from '../../../public/images/exhange1/exchange10.png';
import exhange11 from '../../../public/images/exhange1/exchange11.png';




const ExchangeGrid = ({ glowingCircle, visibleCircle }) => {
    return (
        <table className="table-auto flex-shrink">
            <tbody>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange1}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <motion.div
                                className={`h-10 w-10 lg:h-14 lg:w-14 rounded-full exchangeCircle flex justify-center items-center bg-white opacity-50`}>
                                <Image
                                    alt={'logo'}
                                    src={exhange2}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </motion.div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange3}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange4}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center ${visibleCircle == '5' ? 'opacity-0' : ''}`}>
                                <Image
                                    alt={'logo'}
                                    src={exhange5}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center secondExchangeCircle">
                                <Image
                                    alt={'logo'}
                                    src={exhange6}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange7}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className={`h-10 w-10 lg:h-14 lg:w-14 rounded-full opacity-50 ${glowingCircle == '8' ? 'bg-white opacity-50' : ' bg-white'} ${visibleCircle == '8' ? 'md:opacity-0' : ''}`}>
                            <Image
                                    alt={'logo'}
                                    src={exhange8}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                            <ExchangeArrow />

                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange9}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange10}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10 p-1'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange11}
                                    className='rounded-full h-10 w-10 lg:h-10 lg:w-10'
                                />
                            </div>
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="flex justify-center items-center">
                            <div className="h-10 w-10 lg:h-14 lg:w-14 rounded-full bg-white opacity-50 flex justify-center items-center">
                                <Image
                                    alt={'logo'}
                                    src={exhange8}
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
