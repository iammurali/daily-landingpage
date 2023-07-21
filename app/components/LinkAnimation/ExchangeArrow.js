import React from 'react';
import { motion } from 'framer-motion';

const ExchangeArrow = () => {
    return (
        <motion.svg
            className={'exchangeArrow hidden md:block'}

            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
            <motion.path style={{ fill: "#FFFFFF", }} d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right" /></motion.svg>
    );
};

export default ExchangeArrow;