'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { useRef } from 'react';
import PrimaryButton from '../ui/custom/PrimaryButton';

export default function CallToAction() {
  const ctaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ['start end', 'end center'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotationStar = useTransform(scrollYProgress, [0, 1], ['0', '40deg']);
  return (
    <section ref={ctaRef} className="bg-linear-to-b from-white to-[#d2dcff] py-24">
      <div className="main-container px-5">
        <div className="section-heading relative">
          <h2 className="section-title">For free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and
            motivate your efforts.
          </p>
          <motion.img
            src="/star.png"
            className="absolute -top-30 -left-25 size-40 sm:-top-34.25 sm:-left-87.5 sm:size-90"
            width={360}
            height={360}
            alt="Star Image"
            style={{
              translateY,
              rotate: rotationStar,
            }}
          />
          <motion.img
            src="/spring.png"
            className="absolute -right-20 size-40 sm:-top-4.75 sm:-right-82.75 sm:size-90"
            width={360}
            height={360}
            alt="Spring Image"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex-center mt-10 gap-2">
          <PrimaryButton animateFill>Get for free</PrimaryButton>
          <PrimaryButton variant={'ghost'} className="group gap-2 rounded-sm hover:bg-transparent">
            <span>Learn more</span>
            <MoveRight className="duration-150 group-hover:translate-x-2" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
