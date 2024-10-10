import React from "react";
import SplitSelector from "../components/SplitSelector";
import ExerciseList from "../components/ExerciseList";
import { BeginnerTrainingSplits } from "../utils/BeginnerTrainingSplit";
import { intermediateTrainingSplits } from "../utils/IntermediateTrainingSplit";
import { advancedTrainingSplits } from "../utils/AdvancedTrainingSplit";
import { useState } from "react";

export default function SplitDetails() {
  const [level, setLevel] = useState("Beginner");
  const [split, setSplit] = useState("3-days");
  const [selectedSplit, setSelectedSplit] = useState([]);
  const handleGenerateWorkouts = () => {
    if (level === "Beginner") {
      let fetchedSplit = BeginnerTrainingSplits.filter((splitObj) => {
        return splitObj.name === split;
      });
    
      setSelectedSplit(fetchedSplit);
      console.log(selectedSplit);
    }
    if (level === "Intermediate") {
      let fetchedSplit=intermediateTrainingSplits.filter((splitObj)=>{
        return splitObj.name === split;
      });
      setSelectedSplit(fetchedSplit);
      
    }
    if (level === "Advanced") {
      let fetchedSplit=advancedTrainingSplits.filter((splitObj)=>{
        return splitObj.name === split;
      });
      setSelectedSplit(fetchedSplit);

    }
  };
  return (
    <div className="text-center min-h-screen mt-14">
      <SplitSelector
        begSplits={BeginnerTrainingSplits}
        level={level}
        setLevel={setLevel}
        split={split}
        setSplit={setSplit}
        handleGenerateWorkouts={handleGenerateWorkouts}
      />
      <ExerciseList
        handleGenerateWorkouts={handleGenerateWorkouts}
        begSplits={BeginnerTrainingSplits}
        level={level}
        setLevel={setLevel}
        split={split}
        setSplit={setSplit}
        selectedSplit={selectedSplit}
      />
    </div>
  );
}
