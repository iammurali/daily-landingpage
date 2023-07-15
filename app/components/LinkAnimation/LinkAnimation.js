import { useState, useEffect } from 'react';
import { motion, useAnimate } from 'framer-motion';
import ExchangeGrid from './ExchangeGrid'
import VendorGrid from './VendorGrid'
import DailyRectangle from './DailyRectangle'
import ExchangeArrow from './ExchangeArrow'
import VendorArrow from './VendorArrow'

const ThreeColumnLayout = () => {

  const [scope, animate] = useAnimate();
  const seq = [
    [".exchangeCircle", { scaleX: [1.2], scaleY: 1.2, opacity: [0.5, 1] }, { duration: 0.5 }],
    [".exchangeArrow", { x: [-30, 35], opacity: [1, 1] }, { duration: 0.5, delay: 0.5 }],
    [".dailyRectangle", { backgroundColor: ["#ffffff", "#4175FF", "#ffffff"] }, { duration: 2 }],
    [".vendorArrow", { x: [-75, 10], opacity: [1, 1] }, { duration: 0.5, delay: 0.5 }],
    [".vendorCircle", { scaleX: 1.2, scaleY: 1.2, opacity: [0.5, 1] }, { duration: 0.5 }],

    [".vendorCircle", { scaleX: [1.2, 1], scaleY: [1.2, 1], opacity: [1, 0.5] }, { duration: 0.1, delay: 1 }],
    [".exchangeArrow", { opacity: [0, 0], x: [35, -30], }, { duration: 0.5, }],
    // [".dailyRectangle", { rotate: -360 }, { duration: 0.1 }],
    [".vendorArrow", { opacity: [0, 0], x: [10, -75] }, { duration: 0.1, }],
    [".exchangeCircle", { scaleX: [1.2, 1], scaleY: [1.2, 1], opacity: [1, 0.5] }, { duration: 0.1 }],

    [".secondExchangeCircle", { scaleX: 1.2, scaleY: 1.2, opacity: [0.5, 1] }, { duration: 0.5, delay: 1 }],
    [".exchangeArrow", { x: [-30, 35], opacity: [1, 1] }, { duration: 0.5, delay: 0.5 }],
    [".dailyRectangle", { backgroundColor: ["#ffffff", "#4175FF", "#ffffff"] }, { duration: 2 }],
    [".vendorArrow", { x: [-75, 10], opacity: [1, 1] }, { duration: 0.5, delay: 0.5 }],
    [".secondVendorCircle", { scaleX: 1.2, scaleY: 1.2, opacity: [0.5, 1] }, { duration: 0.5 }],

    [".secondVendorCircle", { scaleX: [1.2, 1], scaleY: [1.2, 1], opacity: [1, 0.5] }, { duration: 0.5, delay: 1 }],
    [".exchangeArrow", { opacity: [0, 0], x: [35, -30], }, { duration: 0.5, }],
    // [".dailyRectangle", { rotate: 360 }, { duration: 0.5 }],
    [".vendorArrow", { opacity: [0, 0], x: [10, -75] }, { duration: 0.5, }],
    [".secondExchangeCircle", { scaleX: [1.2, 1], scaleY: [1.2, 1], opacity: [1, 0.5] }, { duration: 0.5 }],
  ]
  useEffect(() => {
    animate(seq, { duration: 8, repeat: Infinity, repeatType: "loop" });
  },)

  return (
    <div className="flex flex-col md:flex-row" ref={scope}>
      <div className="w-full md:w-1/3 flex justify-center items-center">
        <div className="flex flex-shrink-0">
          <ExchangeGrid visibleCircle={'8'} glowingCircle={'2'} />
        </div>

      </div>
      <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
        <div className="flex flex-shrink-0">
          <DailyRectangle />
        </div>
      </div>
      <div className="w-full md:w-1/3 flex justify-center items-center mt-4 md:mt-0">
        <div className="flex flex-shrink-0 mr-4">
          <VendorArrow />
        </div>
        <div className="flex flex-shrink-0">
          <VendorGrid visibleCircle={'5'} glowingCircle={'8'} />
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;
