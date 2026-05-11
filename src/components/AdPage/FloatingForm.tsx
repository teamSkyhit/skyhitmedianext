"use client";

import { X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  requirements: string;
}

interface FloatingFormProps {
  isFloatingFormActive: boolean;
  setIsFloatingFormActive: (active: boolean) => void;
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

const FloatingForm: React.FC<FloatingFormProps> = ({
  isFloatingFormActive,
  setIsFloatingFormActive,
  formData,
  handleInputChange,
  handleFormSubmit,
}) => {
  const router = useRouter();

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          projectType: formData.projectType,
          requirements: formData.requirements,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Redirect after success
      router.push('/thank-you');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <div
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 w-80 bg-white rounded-l-2xl shadow-2xl z-50 transition-transform duration-300 ${
        isFloatingFormActive ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white p-4 rounded-tl-2xl flex justify-between items-center">
        <h3 className="text-lg font-semibold">🎯 Get Your Free Quote</h3>
        <button
          className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
          onClick={() => setIsFloatingFormActive(false)}
        >
          <X size={20} />
        </button>
      </div>

      <form className="p-6 space-y-4" onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
          required
        />
        <select
          name="projectType"
          value={formData.projectType}
          onChange={handleInputChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
          required
        >
          <option value="">Project Type</option>
          <option value="new-website">New Website</option>
          <option value="redesign">Website Redesign</option>
          <option value="ecommerce">E-commerce Store</option>
          <option value="landing-page">Landing Page</option>
        </select>
        <textarea
          name="requirements"
          placeholder="Enter your requirements"
          rows={2}
          value={formData.requirements}
          onChange={handleInputChange}
          className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors resize-vertical"
          required
        />
        <button
          type="submit"
          className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors transform hover:scale-105"
        >
          Get My Quote 🚀
        </button>
      </form>
    </div>
  );
};

export default FloatingForm;
