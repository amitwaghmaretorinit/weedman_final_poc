/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function HomePageHeroSection(props: any) {
  const { backgroundImage, title, subtitle } = props
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="relative min-h-[600px] w-full">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0, 101, 58, 0.104), rgba(5, 64, 39, 0.4)),
            url('${backgroundImage.asset.url}')`,
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <div className="max-w-2xl space-y-6 mt-12 md:mt-24">
          {/* Heading */}
          <h1 className="font-bold tracking-tight text-white">
            <span className="block text-4xl sm:text-5xl md:text-6xl">{title}</span>
          </h1>

          {/* Subtext */}
          <p className="text-sm sm:text-base md:text-lg text-white/90">
            {subtitle}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
              <Input
                type="text"
                placeholder="Enter your address"
                className="w-full pl-10 rounded-r-none bg-white-50"
              />
            </div>
            <Button type="submit" className="mt-2 sm:mt-0 sm:rounded-l-none">
              GET STARTED
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}