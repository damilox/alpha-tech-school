"use client"

import { CallToAction } from "../(marketing)/_component/CallToAction"
import { FeaturedPrograms } from "../(marketing)/_component/FeaturedPrograms"
import { Hero } from "../(marketing)/_component/Hero"
import { Testimonials } from "../(marketing)/_component/Testimonial"
import { WhyChooseUs } from "../(marketing)/_component/WhyChooseUs"

export default function HomeSection() {
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
