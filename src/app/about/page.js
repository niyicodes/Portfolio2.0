"use client";
import AnimatedText from "@/Components/AnimatedText";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../../public/images/profile/niyicodes.jpg";
import { useRef, useEffect } from "react";
import Skills from "@/Components/Skills";
import Experience from "@/Components/Experience";

const AnimatedNumbers = ({ value }) => {
 const ref = useRef(null);
 const motionValue = useMotionValue(0);
 const springValue = useSpring(motionValue, { duration: 3000 });
 const isInView = useInView(ref, { once: true });

 useEffect(()=>{
  if(isInView){
    motionValue.set(value);
  }
 },[isInView, value, motionValue])

 useEffect(() => {
  springValue.on("change", (latest) => {
   if (ref.current && latest.toFixed(0) <= value) {
    ref.current.textContent = latest.toFixed(0);
   }
  });
 }, [springValue, value]);

 return <span ref={ref}></span>;
};

const about = () => {
 return (
  <>
   <Head>
    <title>Niyicodes | About Page</title>
    <meta name="description" content="any description" />
   </Head>
   <main className="flex w-full flex-col items-center justify-center">
    <section className="w-full h-full inline-block z-0 p-32 pt-16">
     <AnimatedText text="Fueled with Passion" className="mb-16" />
     <div className="grid w-full grid-cols-8 gap-16">
      <div className="col-span-3 flex flex-col items-start justify-start">
       <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
        Biography
       </h2>
       <p className="font-medium">
        Hi, I'm Niyicodes, a web developer with a passion for creating
        beautiful, functional, and user-centered digital experiences. With 2+
        years of experience in the field. I am always looking for new and
        innovative ways to bring my clients' visions to life.
       </p>
       <p className="font-medium">
        I believe that design is about more than just making things look pretty
        it's about solving problems and creating intuitive, enjoyable
        experiences for users.
       </p>
       <p className="font-medium">
        While working on a website, I bring my commitment to design excellence
        and user-centered thinking to every project I work on. I look forward to
        the opportunity to bring my skills and passion to your next project.
       </p>
      </div>

      <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
       <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
       <Image
        src={profilePic}
        alt={"niyicodes"}
        className="w-full h-auto rounded-2xl"
       />
      </div>

      <div className="col-span-2 flex flex-col items-end justify-between">
       <div className="flex flex-col items-end justify-center">
        <span className="inline-block text-7xl font-bold">
         <AnimatedNumbers value={50} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75">
         satisfied clients
        </h2>
       </div>
       <div className="flex flex-col items-end justify-center">
        <span className="inline-block text-7xl font-bold">
         <AnimatedNumbers value={40} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75">
         projects completed
        </h2>
       </div>
       <div className="flex flex-col items-end justify-center">
        <span className="inline-block text-7xl font-bold">
         <AnimatedNumbers value={3} />+
        </span>
        <h2 className="text-xl font-medium capitalize text-dark/75">
         years of experience
        </h2>
       </div>
      </div>
     </div>
     <Skills />
     <Experience />
    </section>
   </main>
  </>
 );
};

export default about;
