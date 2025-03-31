import { RiReactjsLine } from "react-icons/ri"; // React
import { FaJava } from "react-icons/fa"; // Java
import { FaPython } from "react-icons/fa"; // Python
import { FaJs } from "react-icons/fa"; // JavaScript
import { FaLinux } from "react-icons/fa"; // Linux
import CLogo from "../assets/C_Logo.png"; // Importing the C logo image

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-black p-4 bg-black">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-black p-4 bg-black">
          <FaJava className="text-7xl text-red-600" />
        </div>
        <div className="rounded-2xl border-4 border-black p-4 bg-black">
          <FaPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-black p-4 bg-black">
          <FaJs className="text-7xl text-yellow-500" />
        </div>
        <div className="rounded-2xl border-4 border-black p-4 bg-black flex items-center justify-center">
          <img src={CLogo} alt="C Logo" className="h-20 w-20" />
        </div>
        <div className="rounded-2xl border-4 border-black p-4 bg-black">
          <FaLinux className="text-7xl text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
