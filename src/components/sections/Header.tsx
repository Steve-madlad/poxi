'use client';

import { Button } from '@/components/ui/button';
import { Menu, MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-sm">
      <div className="flex-center gap-3 bg-black py-3 text-sm text-white">
        <p className="hidden text-white/60 md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex items-center gap-1">
          <p>Get started for free</p>
          <MoveRight size={16} />
        </div>
      </div>
      <div className="flex-center p-5 md:px-10">
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
              <Button className="xy-center inline-flex rounded-lg bg-black p-4 font-medium tracking-tight text-white capitalize">
                Get for free
              </Button>
            </nav>

            <Button className='hover:bg-transparent md:hidden' variant={"ghost"}>
              <Menu className='size-7'/>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
