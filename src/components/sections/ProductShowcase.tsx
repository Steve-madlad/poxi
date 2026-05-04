import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="overflow-x-clip bg-linear-to-b from-white to-[#d3dcff] py-24">
      <div className="main-container">
        <div className="section-heading px-5">
          <div className="just-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title">A more effective way to track progress</h2>
          <p className="section-description">
            Effortlessly turn your ideas into a fully functional, responsive Saas website in just
            minutes with this template.
          </p>
        </div>
        <div className="3xl:max-h-200 relative mx-auto mt-10 aspect-video max-h-100 w-full md:max-h-150 lg:max-h-165">
          <Image
            src="/product-image.png"
            fill
            alt="Product Image"
            className="object-contain"
            priority
          />
          <Image
            className="absolute -top-15 left-0 size-25 rotate-45 sm:size-35 md:top-auto md:-left-10 md:size-40 md:rotate-none lg:-left-5 lg:size-45 xl:size-60 2xl:left-35"
            src="/pyramid.png"
            alt="pramid"
            width={262}
            height={262}
          />
          <Image
            className="absolute right-0 -bottom-15 size-25 sm:size-35 md:-right-5 md:size-40 md:border-0 lg:-right-10 lg:size-45 xl:size-60 2xl:right-35"
            src="/tube.png"
            alt="tube"
            width={262}
            height={262}
          />
        </div>
      </div>
    </section>
  );
}
