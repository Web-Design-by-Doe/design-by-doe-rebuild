import Link from "next/link";
import { navLinks } from "@/data/navLinks";
import HamburgerNav from "./HamburgerNav";

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-background to-transparent backdrop-blur-md shadow-background">
      <nav className="flex md:grid md:grid-cols-3 items-center py-4 px-8 max-w-[1668px] m-auto">
        <div className="flex justify-start">
          {/* replace with logo */}
          <Link href="/" className="text-2xl text-text font-semibold">
            Web Design by Doe
          </Link>
        </div>
        <div className="hidden md:flex justify-center">
          <ul className="flex gap-9">
            {navLinks.map(({ title, href }) => {
              if (href === "/contact" || href === "/") {
                return;
              }
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-text text-base font-normal hover:text-accent/70 duration-500"
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:flex justify-end">
          <Link href="/contact" className="outline-cta hidden md:flex">
            Contact
          </Link>
        </div>
      </nav>
      <HamburgerNav navLinks={navLinks} />
    </header>
  );
}
