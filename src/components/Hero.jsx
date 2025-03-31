import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Headshot.png";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="pb-20 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16"
            >
              Nabeu Habetaslassa
            </motion.h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className=" rounded-3xl"
              src={profilePic}
              alt="Nabeu Habetaslassa"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
