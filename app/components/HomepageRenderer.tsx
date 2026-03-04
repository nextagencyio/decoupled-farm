'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Leaf, Sun, Droplets, Sprout, Heart, Truck } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const farmLifeItems = [
  { icon: Leaf, label: 'Organic Methods', description: 'No pesticides, ever' },
  { icon: Sun, label: 'Sun-Ripened', description: 'Harvested at peak flavor' },
  { icon: Droplets, label: 'Drip Irrigated', description: 'Water-wise farming' },
  { icon: Sprout, label: 'Heirloom Seeds', description: 'Heritage varieties' },
  { icon: Heart, label: 'Community First', description: 'Supporting local families' },
  { icon: Truck, label: 'Farm Delivery', description: 'Fresh to your door' },
]

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80&fit=crop', alt: 'Fresh organic produce from the farm' },
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80&fit=crop', alt: 'Rows of crops growing in the field' },
  { src: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80&fit=crop', alt: 'Farmer tending to the harvest' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80&fit=crop', alt: 'Farm animals grazing in the pasture' },
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Farm Life Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              The Sunstone Way
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every decision we make is guided by our commitment to the land, our animals, and our community.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {farmLifeItems.map((item) => (
              <div key={item.label} className="text-center group">
                <div className="w-20 h-20 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-100 transition-colors duration-300 border-2 border-primary-100">
                  <item.icon className="w-9 h-9 text-primary-600" />
                </div>
                <h3 className="font-semibold text-primary-900 text-sm mb-1">{item.label}</h3>
                <p className="text-gray-500 text-xs">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Life on the Farm
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A glimpse into our daily rhythms -- from sunrise chores to golden-hour harvests.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary-950/0 group-hover:bg-primary-950/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="relative bg-primary-950 text-white pt-20 pb-12">
        {/* Organic wavy divider */}
        <svg className="absolute -top-1 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 L0,0 Z" className="fill-stone-50" />
        </svg>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-800 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-accent-300" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Sunstone Family Farm</h3>
              </div>
              <p className="text-primary-200 mb-6 max-w-md leading-relaxed">
                Four generations of sustainable farming on 150 acres of rolling countryside. We grow food the way nature intended -- with care, patience, and respect for the land.
              </p>
              <div className="flex gap-3">
                <span className="inline-flex items-center bg-primary-900 rounded-full px-3 py-1 text-xs text-primary-200">
                  <Leaf className="w-3 h-3 mr-1" /> Certified Organic
                </span>
                <span className="inline-flex items-center bg-primary-900 rounded-full px-3 py-1 text-xs text-primary-200">
                  <Heart className="w-3 h-3 mr-1" /> Family Owned
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-white mb-4 text-lg">Visit Us</h4>
              <ul className="space-y-3 text-primary-200 text-sm">
                <li>4500 Sunstone Road</li>
                <li>Heritage Valley, PA 17601</li>
                <li className="pt-2 font-semibold text-accent-300">Farm Stand Hours</li>
                <li>Wed - Sun: 8am - 6pm</li>
                <li>Farm Tours: Sat 10am & 2pm</li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-semibold text-white mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-primary-200 text-sm">
                <li><a href="/products" className="hover:text-accent-300 transition-colors">Shop Produce</a></li>
                <li><a href="/seasons" className="hover:text-accent-300 transition-colors">Seasonal Guide</a></li>
                <li><a href="/recipes" className="hover:text-accent-300 transition-colors">Farm Recipes</a></li>
                <li><a href="/about" className="hover:text-accent-300 transition-colors">Our Story</a></li>
                <li><a href="/contact" className="hover:text-accent-300 transition-colors">Contact & Directions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-primary-300 text-sm">
            <p>&copy; {new Date().getFullYear()} Sunstone Family Farm. All rights reserved.</p>
            <p className="text-primary-400 text-xs">Grown with love in Heritage Valley</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
