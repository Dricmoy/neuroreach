import React from 'react'

type Props = {}

export default function 
({}: Props) {
    const faqData = [
        { question: "What is Neuroreach?", answer: "Neuroreach connects students and professionals in the field of neuroscience through events, resources, and networking opportunities." },
        { question: "How can I join?", answer: "You can join by filling out the form on the 'Join Us' page. We welcome individuals passionate about neuroscience." },
        { question: "What kind of events do you host?", answer: "We host a variety of events including workshops, seminars, and networking events focused on neuroscience." },
      ];
      
    return (
        <div>
            {/* FAQ Section */}
            <section className="w-full max-w-3xl py-8 bg-white shadow-lg rounded-xl mb-10 p-6 backdrop-blur-md">
                <h2 className="text-2xl font-semibold mb-4 text-purple-700">Frequently Asked Questions</h2>
                {faqData.map((faq, index) => (
                <div key={index} className="mb-4">
                    <h3 className="text-lg font-semibold text-purple-700">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                </div>
                ))}
            </section>
        </div>
  )
}