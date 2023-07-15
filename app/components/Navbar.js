import Link from 'next/link';
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })


const Navbar = () => {
  return (
    <nav className="px-12 md:px-24 pb-4">
      <div className="flex items-center justify-between">
        <div className={`text-[2.75rem] font-bold ${montserrat.className}`}>
          Daily<span className='text-dailycolor text-5xl'>.</span>
        </div>
        <div>
          <Link legacyBehavior href="/demo">
            <a className="text-white px-9 py-4 rounded-3xl bg-dailycolor font-medium">
              Get a Demo
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;