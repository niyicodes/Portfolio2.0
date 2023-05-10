import AnimatedText from "@/Components/AnimatedText";
import HireMe from "@/Components/HireMe";
import { LinkArrow } from "@/Components/Icons";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"


export default function Home() {
 return (
  <main className="flex items-center text-dark w-full min-h-screen">
   <section className="flex items-center justify-between w-full">
    <div className="w-1/2">
     <Image src={profilePic} alt="Niyicodes" className="w-full h-auto" />
    </div>
    <div className="w-1/2 flex flex-col items-center self-center">
     <AnimatedText
      text="Turning Vision Into Reality With Code And Design."
      className="!text-6xl !text-left"
     />
     <p className="my-4 text-base font-medium">
      As a skilled frontend developer, I am dedicated to turning ideas into
      innovative web applications. Explore my latest projects, showcasing my
      expertise in React.js and web development.
     </p>
     <div className="flex items-center self-start mt-2">
      <Link
       href="/elijah'sresume.pdf"
       target="_blank"
       className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
       download={true}
      >
       Resume <LinkArrow className="w-6 ml-1"/>
      </Link>
      <Link href="mailto:officiallyomoniyi@gmail.com" target="_blank" className="ml-4 text-lg font-medium capitalize text-dark underline">
       Contact
      </Link>
     </div>
    </div>
   </section>
   <HireMe />
   <div className="absolute right-8 bottom-0 inline-block w-24 ">
     <Image src={lightBulb} alt={"niyicodes"} className="w-full h-auto" />
   </div>
  </main>
 );
}
