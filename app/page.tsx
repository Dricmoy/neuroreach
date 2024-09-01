import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";


export default function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-b from-purple-50 to-purple-100 text-gray-800">
      <div className='w-screen'>
        <Navbar/>  
      </div>

      <div className=''>
        <Hero/>
      </div>
        
    </main>
  );
}
