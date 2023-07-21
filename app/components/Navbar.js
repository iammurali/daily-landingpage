import Link from 'next/link';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })


const Navbar = () => {
  return (
    <nav className="px-6 md:px-24 pb-4">
      <div className="flex items-center justify-between">
        <div className={`text-3xl md:text-[2.75rem] font-bold ${montserrat.className} flex items-center`}>
          Daily<span className='text-dailycolor text-5xl'>.</span>
        </div>
        <div>
          <Link legacyBehavior href="/demo">
            <a className="text-white px-4 py-3 md:px-9 md:py-4 rounded-3xl bg-dailycolor font-medium">
              Get a Demo
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;