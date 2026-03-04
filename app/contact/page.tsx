import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock, Leaf } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Sunstone Family Farm',
  description: 'Visit Sunstone Family Farm or get in touch. We\'d love to hear from you about farm products, tours, or events.',
  keywords: ['Contact Sunstone Family Farm', 'Farm Stand', 'Farm Tours', 'Get in Touch'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      {/* Nature-themed hero */}
      <section className="relative bg-primary-900 text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&fit=crop)' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 to-primary-900" />
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" className="fill-stone-50" />
        </svg>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-primary-300" />
            <span className="text-primary-200 text-sm font-medium">We&apos;d love to hear from you</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Visit the Farm</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Have questions about farm products, tours, or events? Come visit us or drop us a line.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@sunstonefarm.com</p>
                    <p className="text-gray-600">csa@sunstonefarm.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 234-5607</p>
                    <p className="text-sm text-gray-500">Monday to Sunday, 8 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Farm Location</h3>
                    <p className="text-gray-600">
                      4500 Sunstone Road<br />
                      Heritage Valley<br />
                      Lancaster, PA 17601
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Farm Stand Hours</h3>
                    <p className="text-gray-600">
                      Wednesday - Sunday: 8:00 AM - 6:00 PM<br />
                      Farm Tours: Saturday 10:00 AM & 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8">
              <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">Send us a Message</h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-stone-50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-2.5 border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-stone-50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-stone-50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-stone-50"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2.5 border border-stone-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-stone-50"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-full hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200 font-semibold text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-primary-50 rounded-2xl border border-primary-100 p-8">
            <div className="text-center">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-primary-900 mb-4">Join Our CSA Program</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Subscribe to our Community Supported Agriculture program for weekly boxes of the freshest seasonal produce, delivered to your door or available for pickup at the farm stand.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/products"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-700 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-200 font-semibold"
                >
                  Browse Products
                </a>
                <a
                  href="/seasons"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200 font-semibold"
                >
                  Seasonal Guide
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
