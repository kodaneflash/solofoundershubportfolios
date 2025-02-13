'use client';

import React from 'react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Banner() {
  return (
    <div className="flex flex-col px-4 sm:flex-row gap-2 items-center justify-center w-full py-3 tracking-tight text-white font-medium bg-emerald-600 duration-200 transition-all  text-center group text-base md:text-lg">
      <span className="text-balance text-base font-medium">
        ✨ Join SoloFoundersHub for the resources to build a 7-figure online business ✨
      </span>
      <Button
        size="sm"
        asChild
        className="w-full sm:w-fit bg-white hover:bg-neutral-200 text-black h-8"
      >
        <Link href="https://solofoundershub.com/" target="_blank">
          Join Now
        </Link>
      </Button>
    </div>
  );
}
