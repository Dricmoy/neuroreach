import React from 'react'
import Link from 'next/link';

type Props = {}

const AskStudent = (props: Props) => {
  return (
    <div>      {/* Other Sections */}
        <section className="w-full max-w-3xl py-8 bg-white shadow-lg rounded-xl mb-10 p-6 backdrop-blur-md">
        <h2 className="text-2xl font-semibold mb-4 text-purple-700">Ask a Neuroscience Student</h2>
        <p className="text-gray-600 mb-4">
            Have questions about neuroscience? Our experienced students are here to help.
        </p>
        <Link href="/ask">
            <span className="text-purple-600 hover:text-purple-500 font-medium transition-colors cursor-pointer">
            Submit Your Question →
            </span>
        </Link>
        </section>
    </div>
  )
}