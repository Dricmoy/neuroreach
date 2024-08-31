'use client'
import { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.sendForm('your_service_id', 'your_template_id', e.target as HTMLFormElement, 'your_user_id');
      setStatus('Message sent successfully!');
    } catch (error) {
      setStatus('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="w-full p-2 border rounded"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 border rounded"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        className="w-full p-2 border rounded"
        rows={4}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500">
        Send
      </button>
      {status && <p className="text-gray-600 mt-2">{status}</p>}
    </form>
  );
};

export default ContactForm;
