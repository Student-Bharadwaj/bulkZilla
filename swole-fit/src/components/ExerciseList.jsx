import React from "react";

export default function ExerciseList(props) {
  const { level, setLevel, split, setSplit, selectedSplit } = props;

  return (
    <div className="mt-5">
      {selectedSplit.map((splitObj) => (
        <div className="mt-5" key={splitObj.id}>

          {/* <p className="mt-10 text-5xl font-normal text-blue-400">
            {splitObj.splitName}
          </p> */}
          <div className="flex justify-evenly flex-wrap mt-5   ">
            {splitObj.days.map((exercise,index) => (
              <div key={index} className=" w-1/2 py-4 flex flex-col gap-4 ">
                {/* <p className="   font-normal text-3xl">
                  {exercise.day}:
                </p> */}
                <p className="text-5xl text-blue-400 ">{exercise.split}</p>
             
                <div className="flex flex-col gap-4">
                {exercise.exercises.map((variation,index) => (
                  <div key={index} className="w-2/3 py-4  rounded-lg  bg-slate-950 mx-auto">
                    <div className="relative">
                    <div className="absolute   left-6">
                      <span className=" font-semibold text-3xl text-gray-400  ">{index+1})</span>
                      <span className="text-3xl ml-3 ">{variation.name}</span>
                    </div>

                    </div>
                    
                    
                    <div className=" mt-20 flex justify-evenly">
                    <p className="text-lg font-medium"><span className="font-normal text-gray-400">Sets</span> <br />{variation.sets}</p>
                    <p className="text-lg font-medium"><span className="font-normal text-gray-400">Reps</span> <br /> {variation.reps}</p>

                    </div>
                    
                  </div>
                ))}

                </div>
             
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
