import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'

type Props = {}

export default function Join({}: Props) {
  return (
    <div>
      {/* Join Us Carousel */}
      <section className="w-full max-w-3xl py-8 bg-white shadow-lg rounded-xl mb-10 p-6 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Join Us</h2>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          className="carousel-container"
        >
          <div>
            <Image 
              src="https://via.placeholder.com/800x400?text=Join+Us+1" 
              alt="Join Us 1" 
              width={800} 
              height={400} 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
            <p className="legend">Become a part of our vibrant community!</p>
          </div>
          <div>
            <Image 
              src="https://via.placeholder.com/800x400?text=Join+Us+2" 
              alt="Join Us 2" 
              width={800} 
              height={400} 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
            <p className="legend">Explore exciting opportunities in neuroscience.</p>
          </div>
          <div>
            <Image 
              src="https://via.placeholder.com/800x400?text=Join+Us+3" 
              alt="Join Us 3" 
              width={800} 
              height={400} 
              className="w-full h-auto object-cover rounded-lg shadow-md" 
            />
            <p className="legend">Network with professionals and students.</p>
          </div>
        </Carousel>
      </section>

    <section className="w-full max-w-3xl py-8 bg-white shadow-lg rounded-xl mb-10 p-6 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Join Us</h2>
        <p className="text-gray-600 mb-4">
        Become part of our community and explore diverse opportunities in neuroscience.
        </p>
        <Link href="/join">
        <span className="text-purple-600 hover:text-purple-500 font-medium transition-colors cursor-pointer">
            Join Now →
        </span>
        </Link>
    </section>
    </div>
  )
}