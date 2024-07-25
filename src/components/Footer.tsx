import Link from "next/link";
import Image from "next/image";

import { navLinks } from "@/data/navLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center">
      <div className="footer-grid  ">
        <div className="flex flex-col">
          <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
          <div>
            <h2>
              Ready to get started?
            </h2>
          <p className="text-smallest max-w-[370px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="hidden md:block  w-px bg-text"/>
        <div className="flex flex-col gap-[20px] max-w-[370px]">
          <h3 className="text-[16px]">Company</h3>
          <div className="flex md:flex-col gap-2 md:gap-0">

          {navLinks.map((link) => {
            return (
          

              <Link key={link.title} href={link.href} className="text-smallest text-text/70 font-light hover:text-accent/70 hover:underline duration-100">
                {link.title}
              </Link>
            
            )
          })}
          </div>

         
        </div>

      </div>
      <div className="flex gap-4 text-smallest text-text/50 font-light">
        <p>© {currentYear} Web Design by Doe. All rights reserved.</p>
        {"|"}
        <Link href="/privacy-policy" className="text-accent/50 hover:text-accent/70 hover:underline duration-100">
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}
