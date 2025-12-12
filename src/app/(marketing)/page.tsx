"use client"
import React from 'react'
import { Hero } from './_component/Hero'
import { WhyChooseUs } from './_component/WhyChooseUs'
import { FeaturedPrograms } from './_component/FeaturedPrograms'
import { Testimonials } from './_component/Testimonial'
import { CallToAction } from './_component/CallToAction'


const page = () => {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <FeaturedPrograms/>
      <Testimonials/>
      <CallToAction/>
    </div>
  )
}

export default page
