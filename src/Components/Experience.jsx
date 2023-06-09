import { motion, useScroll } from "framer-motion";
import {useRef} from "react"

const Details = ({ position, company, companyLink, time, address, work }) => {
 return (
  <li className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between">
   <div>
    <h3 className="capitalize font-bold text-2xl">
     {position}&nbsp; <a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a>
    </h3>
    <span className="capitalize font-medium text-dark/75">
     {time} | {address}
    </span>
    <p className="font-medium w-full">{work}</p>
   </div>
  </li>
 );
};

const Experience = () => {
 const ref = useRef()
 const{scrollYProgress}= useScroll(
  {
   target: ref,
   offset:["start end", "center start"]
  }
 )
 return (
  <div className="my-64">
   <h2 className="font-bold text-8xl mb-32 w-full text-center">Experience</h2>
   <div className="w-[75%] mx-auto relative">

    <motion.div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" style={{scaleY:scrollYProgress}}/>

    <ul className="w-full flex flex-col items-start justify-between ml-4">
     <Details
      position={"Frontend Developer"}
      company={"SideHustle"}
      time={"2022"}
      address={"Remote"}
      work={"Worked with other Interns to sharpen our skills"}
     />
     <Details
      position={"Frontend Developer"}
      company={"Exqure"}
      time={"2022-present"}
      address={"Remote"}
      work={
       "Working with a team of developers to build an ecommerce escrow startup to help business owners and customers have seemless transactions"
      }
     />
    </ul>
   </div>
  </div>
 );
};

export default Experience;
