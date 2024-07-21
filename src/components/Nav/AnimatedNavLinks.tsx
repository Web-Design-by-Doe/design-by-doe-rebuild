import { motion } from "framer-motion";
import Link from "next/link";
import { animatedLinkVariants } from "./framerMotionVariants";

export default function AnimatedNavLinks({
  title,
  href,
  isOpen,
  setIsOpen,
}: {
  title: string;
  href: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <motion.div
      variants={animatedLinkVariants}
      className="text-title uppercase"
    >
      <Link
        href={href}
        onClick={() => setIsOpen(!isOpen)}
        className="text-text hover:text-accent/70 duration-500"
      >
        {title}
      </Link>
    </motion.div>
  );
}
