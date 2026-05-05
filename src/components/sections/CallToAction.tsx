import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import PrimaryButton from '../ui/custom/PrimaryButton';

export default function CallToAction() {
  return (
    <section className="bg-linear-to-b from-white to-[#d2dcff] py-24">
      <div className="main-container px-5">
        <div className="section-heading relative">
          <h2 className="section-title">For free today</h2>
          <p className="section-description mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and
            motivate your efforts.
          </p>
          <Image
            src="/star.png"
            className="absolute -top-34.25 -left-87.5"
            width={360}
            height={360}
            alt="Star Image"
          />
          <Image
            src="/spring.png"
            className="absolute -top-4.75 -right-82.75"
            width={360}
            height={360}
            alt="Spring Image"
          />
        </div>
        <div className="flex-center mt-10 gap-2">
          <PrimaryButton>Get for free</PrimaryButton>
          <PrimaryButton variant={'ghost'} className="group gap-2 rounded-sm hover:bg-transparent">
            <span>Learn more</span>
            <MoveRight className="duration-150 group-hover:translate-x-2" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
}
