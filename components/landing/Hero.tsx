import Image from 'next/image'
import React from 'react'


export default function Hero(){
  return (
    <div>
        {/* Hero Section */}
        <section className="w-full max-w-4xl py-12 text-center mb-12 bg-white shadow-lg rounded-xl p-8 backdrop-blur-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-purple-700 mb-4 tracking-tight">
            Welcome to Neuroreach
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8 text-purple-600">
            Bridging students and professionals in the field of neuroscience through engaging content and valuable connections.
            </p>
            <Image 
                src="https://via.placeholder.com/1200x600" 
                alt="Hero Image" 
                width={1200} 
                height={600} 
                className="w-full h-auto object-cover rounded-lg mb-6 shadow-md" 
            />
        </section>
    </div>
  )
}