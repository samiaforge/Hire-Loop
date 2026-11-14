
import Image from "next/image";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import globe from "@/app/images/globe1.png";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 65% 55% at 0% 0%, rgba(75,75,75,0.55), transparent 70%),
            radial-gradient(ellipse 65% 55% at 100% 0%, rgba(75,75,75,0.55), transparent 70%),
            linear-gradient(to bottom, #171717, #050505 55%, #000000)
          `,
        }}
      />

      {/* World Background Image */}
      <div className="pointer-events-none absolute left-1/2 top-0 z-0 w-full -translate-x-1/2">
        <Image
          src={globe}
          alt="World Background"
          priority
          className="
            mx-auto
            mt-40
            h-auto
            w-[100%]
            max-w-none
            object-contain
            sm:mt-70
            sm:w-auto
            md:mt-85
            md:w-full
            lg:mt-90
            lg:max-w-[1400px]
            xl:mt-90
          "
        />
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <HeroSection />
      </div>

    </main>
  );
}
