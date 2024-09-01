import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="w-full max-w-3xl text-center py-6 mt-auto border-t border-gray-200">
        <p className="text-sm text-gray-500">&copy; 2024 Neuroreach. All rights reserved.</p>
    </footer>
  )
}