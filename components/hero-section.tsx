
import { Button } from "@/components/ui/button";
import { Search, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import globe from "@/app/images/globe.png";

export function HeroSection() {
  return (
    <section className="relative min-h-[850px] overflow-hidden  px-4 pt-28">

      {/* Background Stars */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 10% 45%, #7770ff 50%, transparent 100%),
            radial-gradient(2px 2px at 20% 65%, #7770ff 50%, transparent 100%),
            radial-gradient(2px 2px at 80% 55%, #7770ff 50%, transparent 100%),
            radial-gradient(2px 2px at 90% 70%, #7770ff 50%, transparent 100%),
            radial-gradient(2px 2px at 65% 75%, #7770ff 50%, transparent 100%),
            radial-gradient(1px 1px at 35% 80%, #7770ff 50%, transparent 100%)
          `,
        }}
      />

     {/* <div className="pointer-events-none absolute bottom-[-180px] left-1/2 z-0 w-full -translate-x-1/2">
  <Image
    src={globe}
    alt="World Globe"
    width={1200}
    height={700}
    priority
    className="mx-auto h-auto w-[900px] max-w-none object-contain"
  />
</div> */}
      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">

        {/* Badge */}
        <div className="mb-7 flex w-full max-w-md items-center justify-center gap-3">

          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />

          <div className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[#171717]/90 px-4 py-2 text-xs">

            <Briefcase className="size-4 text-orange-400" />

            <span className="font-bold tracking-wide text-white">
              50,000+
            </span>

            <span className="text-gray-500">
              NEW JOBS THIS MONTH
            </span>

          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />

        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your next
          role — faster.
        </p>

        {/* Search Bar */}
        <div className="mt-9 flex w-full max-w-[560px] flex-col gap-2 rounded-xl border border-white/10 bg-[#111111] p-2 sm:flex-row sm:items-center sm:gap-0">

          {/* Job Search */}
          <div className="flex flex-1 items-center gap-3 px-3 py-2">
            <Search className="size-5 shrink-0 text-gray-300" />

            <input
              type="text"
              placeholder="Job title, skill or company"
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Divider */}
          <div className="hidden h-7 w-px bg-white/20 sm:block" />

          {/* Location Search */}
          <div className="flex flex-1 items-center gap-3 px-3 py-2">
            <MapPin className="size-5 shrink-0 text-gray-300" />

            <input
              type="text"
              placeholder="Location or Remote"
              className="w-full min-w-0 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Search Button */}
          <Button
            size="icon"
            className="size-11 shrink-0 rounded-lg bg-[#5c53fe] text-white hover:bg-[#6f67ff]"
          >
            <Search className="size-5" />
          </Button>

        </div>

        {/* Trending Positions */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">

          <span className="mr-1 text-xs text-gray-400">
            Trending Position
          </span>

          <span className="rounded-full border border-white/10 bg-[#202020] px-3 py-1.5 text-xs text-gray-200">
            Product Designer
          </span>

          <span className="rounded-full border border-white/10 bg-[#202020] px-3 py-1.5 text-xs text-gray-200">
            AI Engineering
          </span>

          <span className="rounded-full border border-white/10 bg-[#202020] px-3 py-1.5 text-xs text-gray-200">
            Dev-ops Engineer
          </span>

        </div>

      </div>

    </section>
  );
}
