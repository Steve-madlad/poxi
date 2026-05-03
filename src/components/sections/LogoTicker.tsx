import Image from 'next/image';

export default function LogoTicker() {
  const logos = [
    '/logo-acme.png',
    '/logo-apex.png',
    '/logo-celestial.png',
    '/logo-echo.png',
    '/logo-pulse.png',
    '/logo-quantum.png',
  ];

  return (
    <div className='py-8 bg-white md:py-12'>
      <div className="main-container">
        <div className="flex overflow-hidden mask-[linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex flex-none gap-14">
            {logos.map((logo, index) => (
              <Image
                className="logo-ticker-image"
                height={56}
                width={164}
                key={index}
                src={logo}
                alt="Logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
