import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";


export default function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-purple-50 to-purple-100 text-gray-800">
      <div className='mb-10 mt-6 w-full'>
        <Navbar/>  
      </div>

      <Hero/>

    </main>
  );
}
