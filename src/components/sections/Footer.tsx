import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-center text-sm text-[#bcbcbc]">
      <div className="main-container px-5">
        <div className="flex-center gap-4">
          <div className="relative inline-flex before:absolute before:-top-1 before:bottom-0 before:-left-1 before:size-[120%] before:animate-spin before:rounded-full before:bg-[linear-gradient(to_right,#F87BFF,#fb92cf,#ffdd9b,#c2f0b1,#2fd8fe)] before:blur">
            <Image src="/logosaas.png" className="relative" alt="logo" width={40} height={40} />
          </div>
          <p className="text-xl font-semibold">Poxi</p>
        </div>
        <div className="align-start mb-10 justify-center gap-6 sm:items-center!">
          <ul className="col mt-6 gap-6 sm:flex-row! sm:justify-center">
            <li className="align-start">
              <a href="#">About</a>
            </li>
            <li className="align-start">
              <a href="#">Features</a>
            </li>
            <li className="align-start">
              <a href="#">Customers</a>
            </li>
          </ul>
          <ul className="col mt-6 gap-6 sm:flex-row! sm:justify-center">
            <li className="align-start">
              <a href="#">Pricing</a>
            </li>
            <li className="align-start">
              <a href="#">Help</a>
            </li>
            <li className="align-start">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="just-center my-6 gap-6">
          <a href="#linkedin">
            <Image width={30} height={30} src="/social-linkedin.svg" alt="linkedin icon" />
          </a>
          <a href="#pinterest">
            <Image width={30} height={30} src="/social-pinterest.svg" alt="pinterest icon" />
          </a>
          <a href="#twitter" className="mt-1">
            <Image width={23} height={23} src="/social-x.svg" alt="x icon" />
          </a>
          <a href="#instagram">
            <Image width={30} height={30} src="/social-insta.svg" alt="instagram icon" />
          </a>
          <a href="#youtube">
            <Image width={30} height={30} src="/social-youtube.svg" alt="youtube icon" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Poxi Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
