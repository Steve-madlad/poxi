'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { useRef } from 'react';
import PrimaryButton from '../ui/custom/PrimaryButton';

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start end', 'end start'],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="flex overflow-x-clip bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] p-5 pt-10 pb-20 md:px-10 md:pt-5 md:pb-10"
    >
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
              <PrimaryButton animateFill>Get for free</PrimaryButton>
              <PrimaryButton variant={'ghost'} className="group gap-2 hover:bg-transparent">
                <span>Learn more</span>
                <MoveRight className="duration-150 group-hover:translate-x-2" />
              </PrimaryButton>
            </div>
            <div className=""></div>
          </div>

          <div className="relative mt-20 md:mt-0 md:h-162 md:flex-1">
            <motion.img
              src="/cog.webp"
              width={400}
              height={500}
              alt="Cog image"
              className="w-full md:absolute md:h-full md:w-auto md:max-w-none lg:top-10 lg:-right-60 xl:top-auto xl:right-5 xl:h-full xl:w-auto"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 3,
                ease: 'easeInOut',
              }}
            />
            <motion.img
              src="/cylinder.png"
              width={216}
              height={216}
              alt="Cylinder image"
              className="-top-2 -left-32 hidden size-43 md:absolute md:right-80 md:block lg:-top-8 lg:left-auto lg:size-54 xl:right-150"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src="/noodle.webp"
              width={220}
              height={220}
              alt="Noodle image"
              className="absolute top-131 left-112 hidden xl:-right-5 xl:left-auto xl:block"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
