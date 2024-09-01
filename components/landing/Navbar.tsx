import Link from 'next/link';
import { FaBrain } from 'react-icons/fa'; // Example SVG icon

interface NavbarProps {
  fontFamily?: string; // Font family to be applied
  textColor?: string; // Color for the text
  hoverColor?: string; // Color for the hover effect
}

const Navbar = ({
  fontFamily = 'sans-serif',
  textColor = 'text-purple-800',
  hoverColor = 'hover:text-gray-600 hover:',
}: NavbarProps) => {
  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 flex items-center z-50">
      {/* Logo */}
      <div className="flex items-center">
        <FaBrain className="text-3xl" />
        <span className={`text-3xl font-bold ml-3 ${fontFamily}`}>Neuroreach</span>
      </div>

      {/* Navigation Links */}
      <div className="ml-auto flex space-x-8">
        <Link href="/about">
          <span className={`text-lg font-semibold transition-colors ${textColor} ${hoverColor}`}>About</span>
        </Link>
        <Link href="/ask">
          <span className={`text-lg font-semibold transition-colors ${textColor} ${hoverColor}`}>Ask</span>
        </Link>
        <Link href="/events">
          <span className={`text-lg font-semibold transition-colors ${textColor} ${hoverColor}`}>Event</span>
        </Link>
        <Link href="/join">
          <span className={`text-lg font-semibold transition-colors ${textColor} ${hoverColor}`}>Join</span>
        </Link>
        <Link href="/opportunities">
          <span className={`text-lg font-semibold transition-colors ${textColor} ${hoverColor}`}>Opportunities</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
