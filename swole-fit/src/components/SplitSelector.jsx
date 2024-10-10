import React, { useEffect, useState } from "react";

export default function SplitSelector(props) {
const {level,setLevel,split,setSplit,begSplits,handleGenerateWorkouts}=props;
  // useEffect(()=>{console.log(level);console.log(split)},[level,split]);

  return (
    <div>
      <div className="flex justify-evenly">
        <div className=" font-normal text-xl ">
          <label className="block mb-2" htmlFor="level">
            Select your Level:
          </label>
          <select
            className="bg-transparent  border-2 border-slate-400  px-8 py-2 rounded-lg   "
            name="level"
            id="level"
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          >
            <option className="bg-slate-800 text-white" value="Beginner">
              Beginner
            </option>
            <option className="bg-slate-800 text-white" value="Intermediate">
              Intermediate
            </option>
            <option className="bg-slate-800 text-white" value="Advanced">
              Advanced
            </option>
          </select>
        </div>
        <div className=" font-normal text-xl">
          <label className="block mb-2" htmlFor="split">
            {" "}
            Select your split:
          </label>
          <select
            className="bg-transparent border-2 border-slate-400  px-8 py-2 rounded-lg  "
            name="split"
            id="split"
            onChange={(e) => {
              setSplit(e.target.value);
            }}
          >
            <option className="bg-slate-800 text-white" value="3-days">
              Push/Pull/Legs
            </option>
            <option className="bg-slate-800 text-white" value="2-days">
              Upper/Lower body{" "}
            </option>
            <option className="bg-slate-800 text-white" value="1-day">
              Full body
            </option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={handleGenerateWorkouts} className=" mt-5 mr-4 text-xl border-2 border-slate-500 px-8 py-3 rounded-full  hover:border-blue-600  duration-200 ">
          Generate Workouts
        </button>
      </div>
    </div>
  );
}
