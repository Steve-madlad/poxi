import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <section className="to-[#d3dcff] bg-linear-to-b from-white py-24">
      <div className="main-container">
        <div className='mx-auto max-w-135'>
          <div className="just-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="bg-linear-to-b text-center text-3xl font-bold tracking-tighter from-black to-[#001e80] bg-clip-text text-transparent mt-5">
            A more effective way to track progress
          </h2>
          <p className="text-22px leading-30px text-center tracking-tight text-[#010d3e] mt-5">
            Effortlessly turn your ideas into a fully functional, responsive Saas website in just
            minutes with this template.
          </p>
        </div>
        <div className="relative w-full">
          <Image src="/product-image.png" fill sizes='100%' alt="Product Image" className="mt-10"/>
        </div>
      </div>
    </section>
  );
}
