import { pricingTiers } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import PrimaryButton from '../ui/custom/PrimaryButton';

export default function Pricing() {
  return (
    <section className="overflow-x-hidden py-24">
      <div className="main-container relative px-5">
        <div className="section-heading px-5">
          <h2 className="section-title">Pricing</h2>
          <p className="section-description">
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <Image
          className="absolute -left-10 hidden md:block lg:-left-25 lg:size-70 2xl:size-87.5"
          src="/dollar-sign.png"
          width={350}
          height={350}
          alt="Dollar Sign"
        />
        <Image
          className="absolute top-40 -right-10 size-50 scale-y-[-1] lg:-right-50 lg:bottom-10 lg:size-70 2xl:size-87.5"
          src="/dollar-sign.png"
          width={350}
          height={350}
          alt="Dollar Sign"
        />
        <div className="col mt-40 items-center gap-15 lg:flex-row! lg:items-stretch lg:justify-center lg:gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={cn('w-full max-w-sm border border-[#f1f1f1] p-10', {
                "border-black bg-[url('/gloss6.png')] bg-center text-white shadow-2xl lg:-translate-y-20":
                  tier.inverse,
              })}
            >
              <div className="flex-between">
                <h3
                  className={cn('text-lg font-bold text-black/50', {
                    'text-white/60': tier.inverse,
                  })}
                >
                  {tier.title}
                </h3>
                {tier.popular && (
                  <div className="inline-flex rounded-xl border border-white/20 bg-black px-4 py-1 text-sm ring-1 ring-white/50">
                    <span className="bg-[linear-gradient(to_right,#dd7ddf,#3bffff,#71c2ef,#bbcb92,#e1cd86,#dd7dd7)] bg-clip-text font-medium text-transparent">
                      Popular
                    </span>
                  </div>
                )}
              </div>
              <div className="mt-7.5 flex items-baseline gap-1">
                <span className="text-4xl leading-none font-bold tracking-tighter">
                  ${tier.monthlyPrice}
                </span>
                <span
                  className={cn('font-bold tracking-tight text-black/60', {
                    'text-white/60': tier.inverse,
                  })}
                >
                  /mo
                </span>
              </div>
              <PrimaryButton
                className={cn('mt-7.5', { 'bg-secondary text-secondary-foreground': tier.inverse })}
              >
                {tier.buttonText}
              </PrimaryButton>
              <ul className="col mt-8 gap-5">
                {tier.features.map((feature, index) => (
                  <li
                    key={index}
                    className={cn('align-center gap-4 text-sm', {
                      'text-shadow-2xs': tier.inverse,
                    })}
                  >
                    <Check size={24} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
