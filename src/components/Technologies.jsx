// src/Technologies.js
import { RiReactjsLine } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si"; // Next.js icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { SiExpress } from "react-icons/si"; // Express icon
import { SiMysql } from "react-icons/si"; // SQL icon
import { SiJavascript } from "react-icons/si"; // JavaScript icon
import { SiPython } from "react-icons/si"; // Python icon
import { SiFirebase } from "react-icons/si"; // Firebase icon
import { FaNodeJs } from "react-icons/fa"; // Node.js icon

function Technologies() {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl font-bold">Skills</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-black shadow-lg transition-transform transform hover:scale-105">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-black shadow-lg transition-transform transform hover:scale-105">
          <SiNextdotjs className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-black shadow-lg transition-transform transform hover:scale-105">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-green-600 shadow-lg transition-transform transform hover:scale-105">
          <SiMongodb className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-gray-900 shadow-lg transition-transform transform hover:scale-105">
          <SiExpress className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-blue-800 shadow-lg transition-transform transform hover:scale-105">
          <SiMysql className="text-7xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-yellow-500 shadow-lg transition-transform transform hover:scale-105">
          <SiJavascript className="text-7xl text-black" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-yellow-300 shadow-lg transition-transform transform hover:scale-105">
          <SiPython className="text-7xl text-blue-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-red-500 shadow-lg transition-transform transform hover:scale-105">
          <SiFirebase className="text-7xl text-yellow-300" />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
