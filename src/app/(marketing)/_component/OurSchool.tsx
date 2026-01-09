"use client";
import Image from "next/image";

export function OurSchool() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-6xl m-auto gap-12 items-center">
      <div>
        <p className="text-gray-800 leading-relaxed text-[18px]">
          Alpha Tech School is a tech hub dedicated to training individuals in
          practical, in-demand technology skills. With a strong foundation in
          hands-on, in-person learning, we are transitioning into a scalable
          digital platform that enables smooth student onboarding, efficient
          course management, and secure payment processing. This evolution
          positions Alpha Tech School to expand access to quality tech education
          across Nigeria, both online and offline.
        </p>
      </div>
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gray-100   transition-transform duration-500">
        <Image
          src="/images/class.jpg"
          alt="Our Class"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
