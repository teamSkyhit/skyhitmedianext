"use client";

import { Star, Check, AlertTriangle, CheckCircle, Award } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  requirements: string;
}

interface HeroSectionProps {
  formData: FormData;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void;
  handleFormSubmit: (e: React.FormEvent) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  formData,
  handleInputChange,
  handleFormSubmit,
}) => {
  const router = useRouter();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
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
      )
      .then(
        () => {
          router.push('/thank-you'); // Redirect after success
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('Failed to send email.');
        }
      );
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-9">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 mt-7">
            {/* <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full border border-red-200">
              <AlertTriangle size={20} />////sd
              <span className="font-semibold">
                Tired of websites that look good but don't sell?
              </span>
            </div> */}

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Build Websites That Convert.
              <br />
              <span className="text-champagne-500">Not Just Look Pretty.</span>
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed">
              Stop losing customers to poorly designed websites. We create high-performance
              websites that turn visitors into paying customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <Star className="text-yellow-500" size={20} />
                <span className="font-semibold text-slate-700">Google Partner Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <Award className="text-yellow-500" size={20} />
                <span className="font-semibold text-slate-700">Award Winning Agency</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <Check className="text-green-500" size={20} />
                <span className="font-semibold text-slate-700">Certified Professionals</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <CheckCircle size={24} />
                <span className="font-bold text-lg">
                  Website Design and Development Starting at just ₹20,000* - Limited Time Offer!
                </span>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">🎯 Get Your Free Quote Now</h3>
                <p className="text-slate-600">Join 500+ businesses that chose growth</p>
              </div>
              <form className="space-y-4" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
                  required
                />
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Your Project Goal</option>
                  <option value="new-website">New Website</option>
                  <option value="redesign">Website Redesign</option>
                  <option value="ecommerce">E-commerce Store</option>
                  <option value="landing-page">Landing Page</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  name="requirements"
                  placeholder="Enter your requirements (What do you need help with?)"
                  rows={3}
                  value={formData.requirements}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-champagne-400 focus:outline-none transition-colors resize-vertical"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-champagne-500 hover:bg-champagne-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors transform hover:scale-105"
                >
                  📩 Get My Free Quote Now
                </button>
                <p className="text-center text-sm text-slate-500">
                  🔒 100% Free • No Spam • 24h Response
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
