import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'
import NewsTicker from './components/NewsTicker'
import ProductFeature from './components/ProductFeature'
import DailyLink from './components/DailyLink'
import DemoBanner from './components/DemoBanner'
import Footer from './components/Footer'
import binance from 'public/images/binance.png'
import coinbase from 'public/images/coinbase.png'
import crypto from 'public/images/crypto.png'
import kraken from 'public/images/kraken.png'
import ledger from 'public/images/ledger.png'
import metamask from 'public/images/metamask.png'





export default function Home() {
  return (
    <section>
      <Navbar />
      <HeroSection />
      <NewsTicker companies={[binance, coinbase, crypto, kraken, ledger, metamask]} />
      <ProductFeature />
      <DailyLink />
      <DemoBanner />
      <Footer />
    </section>
  )
}
