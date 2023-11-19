"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" sizes="h-8 w-8" className="sm:m-auto"/>
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          Creator AI
        </h1>
      </Link>
      <div className="flex items-center gap-x-2 ">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="absolute rounded-full -ml-16 px-7 -mt-5 z-50 bg-[#E449A3] border-none hover:bg-[#f082b1]" >
          Sign-up
          </Button>
        </Link>
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"} >
          <Button variant="outline" className="float-left rounded-[50px] px-10 mr-6 z-0 bg-[#885DF4] border-none hover:bg-[#71297a]">
          Sign-in
          </Button>
        </Link>
      </div>
    </nav>
  )
}