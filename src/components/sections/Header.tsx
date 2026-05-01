'use client';

import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0">
      <div className="flex-center gap-3 bg-black py-3 text-sm text-white">
        <p className="hidden text-white/60 md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <MoveRight size={16} />
        </div>
      </div>
      <div className="p-5 md:px-10 flex-center">
        <div className="container">
          <div className="flex-between">
            <Image src="/logosaas.png" alt="logo" width={40} height={40} />
            {/* <MediumIcon></MediumIcon> */}
            <nav className="hidden items-center gap-6 text-black/60 md:flex">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <Button className="xy-center inline-flex rounded-lg bg-black p-4 font-medium tracking-tight text-white capitalize">Get for free</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
