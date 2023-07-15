'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimationExample = () => {
    const [showSecondComponent, setShowSecondComponent] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowSecondComponent(!showSecondComponent);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [showSecondComponent]);

    return (
        <div style={{ overflow: 'hidden' }}>
            <AnimatePresence>
                <motion.div
                    key="firstComponent"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: showSecondComponent ? 0.5 : 1, y: showSecondComponent ? -350 : 70 }}
                    exit={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='p-5 lg:w-1/2'
                    style={{
                        // backgroundColor: 'lightgreen',
                        transform: 'translate(-80%, -80%)',
                    }}
                >
                    <h1 className='text-4xl pb-12 font-bold'>One app, all crypto wallets/accounts Daily</h1>
                    <p className='text-[#989898] font-normal text-xl'>
                        Daily connects crypto exchanges and DeFi wallets to help you reduce the number of payment tools to one.
                    </p>
                </motion.div>

                <motion.div
                    key="secondComponent"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: showSecondComponent ? 1 : 0.5, y: showSecondComponent ? -350 : 90 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    className='p-5 md:w-3/4 lg:w-1/2'

                    style={{
                        // backgroundColor: 'lightblue',
                        transform: 'translate(-80%, -80%)',
                    }}
                >
                    <h1 className='text-4xl pb-12 font-bold'> Make payments in seconds.</h1>
                    <p className='text-[#989898] font-normal text-xl'>
                        Our minimal app design helps you easily and securely make crypto payments on an everyday basis.
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default AnimationExample;
