import { motion } from "framer-motion";

const Skill = ({name, x,y}) => {
 return(
  <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light cursor-pointer py-3 px-6 shadow-dark absolute" whileHover={{scale:1.05}} initial={{x:0, y:0}} whileInView={{x:x, y:y}} transition={{duration:1.5}} viewport={{once: true}}>
    {name}
   </motion.div>
 )
}

const Skills = () => {
 return (
  <>
   <h2 className="font-bold text-8xl mt-64 w-full text-center">Stacks</h2>
   <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
   <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light cursor-pointer p-8 shadow-dark" whileHover={{scale:1.05}}>
    Wev
   </motion.div>
   <Skill name="CSS" x="-5vw" y="-10vw"/>
   <Skill name="HTML" x="-20vw" y="2vw"/>
   <Skill name="Javascript" x="20vw" y="6vw"/>
   <Skill name="NextJS" x="-20vw" y="-15vw"/>
   <Skill name="TailwindCSS" x="18vw" y="18vw"/>
   <Skill name="ReactJS" x="0vw" y="12vw"/>
   <Skill name="Redux" x="0vw" y="-20vw"/>
   <Skill name="Firebase" x="0vw" y="21vw"/>
   <Skill name="ChartJS" x="-25vw" y="18vw"/>
   <Skill name="styledComponents" x="15vw" y="-12vw"/>
   </div>
  </>
 );
};

export default Skills;
