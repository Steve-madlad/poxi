import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import PrimaryButton from '../ui/custom/PrimaryButton';

export default function Hero() {
  return (
    <section className="flex overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] p-5 pt-10 pb-20 md:px-10 md:pt-5 md:pb-10">
      <div className="main-container">
        <div className="items-center md:flex">
          <div className="md:w-119.5">
            <div className="inline-flex rounded-lg border border-[#222]/10 px-3 py-1 text-sm tracking-tight">
              Version 2.0 is here
            </div>
            <h1 className="mt-6 bg-linear-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
              Pathway to productivity
            </h1>
            <p className="mt-6 text-xl text-[0103DE]">
              Celebrate the joy of acomplishment with an app designed to track your progress,
              motivate your efforts and celebrate your success
            </p>

            <div className="align-center mt-7.5 gap-1">
              <PrimaryButton>Get for free</PrimaryButton>
              <PrimaryButton variant={"ghost"} className="hover:bg-transparent group gap-2">
                <span>Learn more</span>
                <MoveRight className='group-hover:translate-x-2  duration-150' />
              </PrimaryButton>
            </div>
            <div className=""></div>
          </div>

          <div className="relative mt-20 md:mt-0 md:h-162 md:flex-1">
            <Image
              src="/cog.png"
              width={400}
              height={500}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md:max-w-none w-full lg:top-10 lg:-right-60 xl:top-auto xl:right-5 xl:h-full xl:w-auto"
            />
            <Image
              src="/cylinder.png"
              width={220}
              height={220}
              alt="Cylinder image"
              className="-top-2 -left-32 hidden size-43 md:absolute md:right-80 md:block lg:-top-8 lg:left-auto lg:size-auto xl:right-150"
            />
            <Image
              src="/noodle.png"
              width={220}
              height={220}
              alt="Noodle image"
              className="absolute top-131 left-112 hidden rotate-30 xl:-right-5 xl:left-auto xl:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
