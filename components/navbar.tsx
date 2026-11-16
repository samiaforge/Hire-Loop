
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signOut, useSession } from "@/lib/auth-client";




const NAV_LINKS = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const pathname = usePathname();
  const {data:session} = useSession()


  const handleSignOut = async() =>{
    await signOut()

  }

  return (
    <header className="px-4 pt-8 md:px-10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-xl border border-black/[0.07] bg-[#1a1a1f] px-4 py-3 md:px-5">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.png"
            alt="Hireloop"
            width={110}
            height={36}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">

          {/* Navigation Links */}
          <div className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-white ${
                  pathname.startsWith(link.href)
                    ? "font-semibold text-white"
                    : "text-[#ededef]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-white/20" />

          {/* Buttons */}
          <div className="flex items-center gap-4">
             { session?.user ? 
             <>
              <span className="text-[#EDEDEF]">Welcome {session.user.name}</span>
              <Button
              onClick={handleSignOut}
                variant="ghost"
                className="text-sm font-semibold text-[#645bff] hover:bg-transparent hover:text-[#7a72ff]"
              >
                Sign Out
              </Button>
             </>
             : 
             <>
            <Link href="/auth/sign-in">
              <Button
                variant="ghost"
                className="text-sm font-semibold text-[#645bff] hover:bg-transparent hover:text-[#7a72ff]"
              >
                Sign In
              </Button>
            </Link>

            <Link href="/auth/sign-up">
              <Button className="rounded-lg bg-[#5c53fe] px-4 text-sm text-white shadow-[0_2px_10px_rgba(92,83,254,0.3)] hover:bg-[#6f67ff]">
                Get Started
              </Button>
              
            </Link>
            </>}
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white hover:bg-white/10 md:hidden"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="border-white/10 bg-[#1a1a1f] text-white"
          >
            <SheetTitle className="sr-only">
              Navigation Menu
            </SheetTitle>

            <div className="flex flex-col gap-6 p-4">

              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Hireloop"
                  width={110}
                  height={36}
                  className="h-9 w-auto"
                />
              </Link>

              <div className="flex flex-col gap-5">
                {NAV_LINKS.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={<Link href={link.href} />}
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </div>

              <div className="h-px bg-white/20" />

              <div className="flex flex-col gap-3">
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/auth/sign-in" />}
                >
                  Sign In
                </SheetClose>

                <SheetClose
                  nativeButton={false}
                  render={<Link href="/auth/sign-up" />}
                >
                  <Button className="w-full bg-[#5c53fe] text-white hover:bg-[#6f67ff]">
                    Get Started
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </nav>
    </header>
  );
}
