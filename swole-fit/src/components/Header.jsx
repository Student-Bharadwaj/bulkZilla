import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full pt-10 flex justify-evenly items-center  ">
      <div className="font-semibold text-4xl text-blue-400">
        {" "}
        <NavLink to="/"  >
        <p className=" text-4xl text-white  font-extrabold tracking-wide leading-tight p-4 hover:text-blue-400  transition-colors duration-200">
  bulk<span className="text-slate-400">Zilla</span> 
</p>

        </NavLink>
      </div>
      <div className="flex justify-center gap-14 font-medium text-lg">
        <NavLink
          style={({ isActive }) => ({
            color: isActive && "#FFD700" ,
            fontSize:isActive && "1.2rem",
            
          })}
     
          className="hover:text-yellow-300  active:text-blue-500  duration-200  cursor-pointe"  
          to="/"
        >
          Home
        </NavLink>
        <NavLink
           style={({ isActive }) => ({
            color: isActive && "#FFD700" ,
            fontSize:isActive && "1.2rem",
          })}
          className="hover:text-yellow-300 active:text-blue-500 duration-200  cursor-pointer "
          to="splitWorkouts"
        >
          Split Workouts
        </NavLink>
        <NavLink
           style={({ isActive }) => ({
            color: isActive && "#FFD700" ,
            fontSize:isActive && "1.2rem",
          })}
          className="hover:text-yellow-300 active:text-blue-500  duration-200  cursor-pointer"
          to="weeklySchedule"
        >
          Weekly Schedules
        </NavLink>
      </div>
    </div>
  );
}
