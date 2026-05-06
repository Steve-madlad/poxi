'use client';

import { logos } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LogoTicker() {
  return (
    <div className="bg-white py-8 md:py-12">
      <div className="main-container">
        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: '-33.33%' }}
            transition={{ duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
            className="flex flex-none gap-14 pr-14"
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <Image
                className="logo-ticker-image"
                height={56}
                width={164}
                key={index}
                src={logo}
                alt="Logo"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
