'use client'
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  fontFamily?: string; // Font family to be applied
  textColor?: string; // Color for the text
  hoverColor?: string; // Color for the hover effect
}

const Navbar = ({
  fontFamily = '',
  textColor = 'text-gray-800',
  hoverColor = 'hover:text-blue-500',
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-10 flex items-center justify-between z-50 backdrop-blur-lg bg-white/30 border border-white/20 rounded-lg shadow-lg">
      {/* Left Navigation Links */}
      <div className="flex items-center space-x-6 lg:space-x-4 lg:ml-[20rem]">
        {['About', 'Ask'].map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase()}`}>
            <span
              className={`relative text-xl font-extrabold text-purple-800 ml-2 tracking-tight hover:text-purple-600 transition duration-300 ${textColor} ${hoverColor} underline-animation`}
              style={{ fontFamily }}
            >
              {item}
            </span>
          </Link>
        ))}
      </div>

      {/* Centered Logo */}
      <div className="flex-shrink-0">
        <Image
          src='/logo.svg'
          height={80}
          width={80}
          alt='Neuroreach logo'
          className="rounded-full border-4 bg-white border-white cursor-pointer hover:scale-110 shadow-md"
        />
        <span>Neuroreach</span>
      </div>

      {/* Right Navigation Links */}
      <div className="flex items-center space-x-6 lg:mr-[20rem] lg:space-x-4">
        {['Events', 'Join US'].map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
            <span
              className={`relative text-xl font-extrabold text-purple-800 ml-2 tracking-tight hover:text-purple-600 transition duration-300 ${textColor} ${hoverColor} underline-animation`}
              style={{ fontFamily }}
            >
              {item}
            </span>
          </Link>
        ))}
      </div>

      <style jsx>{`
        .underline-animation::after {
          content: '';
          display: block;
          height: 2px;
          background-color: currentColor; /* Use the current text color */
          position: absolute;
          left: 0;
          bottom: -2px; /* Adjust if needed */
          width: 0;
          transition: width 0.3s ease, left 0.3s ease;
        }
        .underline-animation:hover::after {
          width: 100%;
          left: 0;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
