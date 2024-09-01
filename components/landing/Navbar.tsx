// components/Navbar.tsx

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-70 backdrop-blur-lg shadow-lg rounded-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="text-purple-700 text-2xl font-bold">
          <Link href="/">Neuroreach</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="text-purple-600 hover:text-purple-500 font-medium transition-colors rounded-md p-2 hover:bg-purple-100">
            About
          </Link>
          <Link href="/ask" className="text-purple-600 hover:text-purple-500 font-medium transition-colors rounded-md p-2 hover:bg-purple-100">
            Ask
          </Link>
          <Link href="/events" className="text-purple-600 hover:text-purple-500 font-medium transition-colors rounded-md p-2 hover:bg-purple-100">
            Events
          </Link>
          <Link href="/join" className="text-purple-600 hover:text-purple-500 font-medium transition-colors rounded-md p-2 hover:bg-purple-100">
            Join
          </Link>
          <Link href="/opportunities" className="text-purple-600 hover:text-purple-500 font-medium transition-colors rounded-md p-2 hover:bg-purple-100">
            Opportunities
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
