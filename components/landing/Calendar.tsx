import React from 'react'

type Props = {}

export default function Calendar({}: Props) {
  return (
    <div>
        {/* Google Calendar Integration */}
        <section className="w-full max-w-3xl py-8 bg-white shadow-lg rounded-xl mb-10 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-4 text-purple-700">Upcoming Events</h2>
            <div className="relative pb-9/16">
            <iframe
                src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIMEZONE"
                style={{ border: 0 }}
                width="100%"
                height="600"
                title="Google Calendar"
            ></iframe>
            </div>
        </section>
    </div>
  )
}