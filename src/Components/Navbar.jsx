"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
 const path = usePathname();
 
 return (
  <Link href={href} className={`${className} relative group`}>
   {title}{" "}
   <span
    className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full tranition-[width] ease duration-300 ${
     path === href ? "w-full" : "w-0"
    }`}
   >
    &nbsp;
   </span>
  </Link>
 );
};

const Navbar = () => {
 return (
  <header className="w-full px-32 py-8 font-medium flex items-center justify-between text-black">
   <nav>
    <CustomLink href="/" title="Home" className="mr-4" />
    <CustomLink href="/about" title="About" className="mx-4" />
    <CustomLink href="/projects" title="Projects" className="mx-4" />
    <CustomLink href="/articles" title="Articles" className="ml-4" />
   </nav>
   <nav className="flex items-center justify-center flex-wrap">
    <motion.a href="https://twitter.com/_theVeran" target={"_blank"} whileTap={{scale: 0.9}} whileHover={{y: -2}} className={"w-6 mr-3"}>
     <TwitterIcon />
    </motion.a>
    <motion.a href="https://github.com/niyicodes" target={"_blank"}  whileTap={{scale: 0.9}} whileHover={{y: -2}} className={"w-6 mx-3"}>
     <GithubIcon />
    </motion.a>
    <motion.a href="https://linkedin.com/n/niyicodes" target={"_blank"}  whileTap={{scale: 0.9}} whileHover={{y: -2}} className={"w-6 ml-3"}>
     <LinkedInIcon />
    </motion.a>
   </nav>
   <div className="absolute left-[50%] top-2 translate-x-[-50%]">
    <Logo />
   </div>
  </header>
 );
};

export default Navbar;
