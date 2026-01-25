"use client";

import { CallToAction } from "../(marketing)/_component/CallToAction";
import CoreValuesSection from "../(marketing)/_component/CoreValuesSection";
import { FeaturedPrograms } from "../(marketing)/_component/FeaturedPrograms";
import { Hero } from "../(marketing)/_component/Hero";
import { OurSchool } from "../(marketing)/_component/OurSchool";
import Service from "../(marketing)/_component/Services";
import { Testimonials } from "../(marketing)/_component/Testimonial";
import { WhyChooseUs } from "../(marketing)/_component/WhyChooseUs";

export default function HomeSection() {
  return (
    <div>
      <Hero />
      <Service/>
      <WhyChooseUs />
      <FeaturedPrograms />
      <CoreValuesSection/>
      <OurSchool/>
      <Testimonials />
      <CallToAction />
    </div>
  );
}
