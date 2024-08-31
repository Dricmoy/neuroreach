'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  // Sample FAQ data
  const faqData = [
    { question: "What is Neuroreach?", answer: "Neuroreach connects students and professionals in the field of neuroscience through events, resources, and networking opportunities." },
    { question: "How can I join?", answer: "You can join by filling out the form on the 'Join Us' page. We welcome individuals passionate about neuroscience." },
    { question: "What kind of events do you host?", answer: "We host a variety of events including workshops, seminars, and networking events focused on neuroscience." },
  ];

  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <div className='mb-10 mt-6 w-full'>
        <Navbar/>  
      </div>

      {/* Hero Section */}
      <section className="w-full max-w-4xl py-12 text-center mb-12 bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4 tracking-tight">
          Welcome to Neuroreach
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto mb-8">
          Bridging students and professionals in the field of neuroscience through engaging content and valuable connections.
        </p>
        <Image 
          src="https://via.placeholder.com/1200x600" 
          alt="Hero Image" 
          width={1200} 
          height={600} 
          className="w-full h-auto object-cover rounded-lg mb-6" 
        />
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-green-700">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </section>

      {/* Google Calendar Integration */}
      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Upcoming Events</h2>
        <div className="relative pb-9/16">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
          ></iframe>
        </div>
      </section>

      {/* Join Us Carousel */}
      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Join Us</h2>
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
              className="w-full h-auto object-cover rounded-lg" 
            />
            <p className="legend">Become a part of our vibrant community!</p>
          </div>
          <div>
            <Image 
              src="https://via.placeholder.com/800x400?text=Join+Us+2" 
              alt="Join Us 2" 
              width={800} 
              height={400} 
              className="w-full h-auto object-cover rounded-lg" 
            />
            <p className="legend">Explore exciting opportunities in neuroscience.</p>
          </div>
          <div>
            <Image 
              src="https://via.placeholder.com/800x400?text=Join+Us+3" 
              alt="Join Us 3" 
              width={800} 
              height={400} 
              className="w-full h-auto object-cover rounded-lg" 
            />
            <p className="legend">Network with professionals and students.</p>
          </div>
        </Carousel>
      </section>

      {/* Other Sections */}
      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Ask a Neuroscience Student</h2>
        <p className="text-gray-600 mb-4">
          Have questions about neuroscience? Our experienced students are here to help.
        </p>
        <Link href="/ask">
          <span className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
            Submit Your Question →
          </span>
        </Link>
      </section>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Join Us</h2>
        <p className="text-gray-600 mb-4">
          Become part of our community and explore diverse opportunities in neuroscience.
        </p>
        <Link href="/join">
          <span className="text-green-600 hover:text-green-500 font-medium transition-colors cursor-pointer">
            Join Now →
          </span>
        </Link>
      </section>

      <footer className="w-full max-w-3xl text-center py-6 mt-auto border-t border-gray-200">
        <p className="text-sm text-gray-500">&copy; 2024 Neuroreach. All rights reserved.</p>
      </footer>
    </main>
  );
}
