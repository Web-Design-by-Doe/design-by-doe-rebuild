import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/data/navLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-bg mt-20 md:mt-40">
      <div className="bg-background/70 backdrop-blur-xl w-full h-full pt-12 sm:pt-24 pb-4 px-4">
        <div className="max-w-4xl m-auto">
          <div className="flex flex-col items-start gap-4 sm:items-center duration-300">
            <div className="w-full">
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                width={100}
                height={30}
                className="pb-4 sm:pb-0 duration-300"
              />
            </div>
            <div className="flex flex-col-reverse sm:flex-row gap-4 sm:gap-12 duration-300">
              <div className="flex flex-col gap-2 sm:max-w-[370px] duration-300">
                <h3 className="text-title">Ready to get started?</h3>
                <p className="text-smallest">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="w-px bg-text/70 hidden sm:block duration-300" />
              <div className="flex flex-col gap-2">
                <p className="text-[20px] font-bold">Company</p>
                <ul className="flex flex-wrap gap-4 sm:gap-0 sm:flex-col text-[16px] font-light duration-300">
                  {navLinks.map((link) => (
                    <li
                      key={link.href}
                      className="text-text/50 hover:text-accent/70 duration-150"
                    >
                      <Link href={link.href}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col pt-12 sm:pt-16 sm:text-start sm:flex-row gap-2 sm:gap-4 text-smallest text-text/50 font-light duration-300">
              <p>© {currentYear} Web Design by Doe. All rights reserved.</p>
              <p className="hidden sm:block duration-300">|</p>
              <Link
                href="/privacy-policy"
                className="text-accent/50 hover:text-accent/70 hover:underline duration-100"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
