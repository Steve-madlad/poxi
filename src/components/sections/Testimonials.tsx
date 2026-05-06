'use client';

import { testimonials } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '../ui/card';

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="h-220 overflow-hidden">
      <div className="main-container px-5">
        <div className="section-heading">
          <div className="just-center">
            <div className="tag">Testimonials</div>
          </div>
          <h2 className="section-title">What our users say</h2>
          <p className="section-description">
            From intuitive design to powerful features, our app has been an essential tool for users
            around the world.
          </p>
        </div>

        <div className="just-center mt-10 max-h-160 gap-6 mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
          <TestimonialColumn duration={8} column={firstColumn} />
          <TestimonialColumn
            duration={5}
            reverse
            column={secondColumn}
            className="hidden! md:block!"
          />
          <TestimonialColumn duration={4} column={thirdColumn} className="hidden! lg:block!" />
        </div>
      </div>
    </section>
  );
}

function TestimonialColumn({
  column,
  className,
  duration = 10,
  reverse = false,
}: {
  column: typeof firstColumn;
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: reverse ? '0%' : '-33.33%',
        }}
        transition={{
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          duration: duration,
        }}
        initial={{ translateY: reverse ? '-33.33%' : '0' }}
        className="col max-w-xs gap-6 pb-6"
      >
        {[...column, ...column, ...column].map((testimonial, index) => (
          <Card key={index} className="p-5 shadow-lg">
            <div>
              <div>{testimonial.text}</div>
              <div className="align-center mt-5 gap-2">
                <Image
                  src={testimonial.imageSrc}
                  alt="user"
                  width={40}
                  height={40}
                  className="size-10 rounded-full"
                />
                <div className="col">
                  <div className="tracking-light leading-5 font-medium">{testimonial.name}</div>
                  <div className="tracking-light leading-5">{testimonial.username}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </motion.div>
    </div>
  );
}
