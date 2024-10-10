import React from "react";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="max-w-xl mx-auto min-h-[30rem] flex flex-col items-center justify-center gap-10 ">
        <div className="flex flex-col items-center ">
        <p className="text-2xl uppercase">it's time to get </p>
      <p className=" uppercase font-semibold text-8xl mb-5">
        mons<span className="text-blue-400">trous</span>
      </p>
      <p  className="text-xl font-light text-center">
        I hearby acknowledge that I may become{" "}
        <span className="text-blue-400">Unbelievably swolenormous</span> and accept all risks of becoming
        the local <span className="text-blue-400">mass monstrous zilla</span>,afflicted with severe  <span className="text-blue-400"> body

dismorphia </span> ,unable to fit through doors.
      </p>
        </div>
<Link to="splitWorkouts" className="text-xl border-2 border-blue-500 px-8 py-3 rounded-full blueshadow  hover:translate-y-px  duration-200 ">Accept & Begin</Link>
      
    </div>
  );
}
