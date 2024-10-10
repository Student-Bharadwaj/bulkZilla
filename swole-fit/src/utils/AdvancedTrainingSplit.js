export const advancedTrainingSplits = [
    {
      id: 1,
      name:'3-days',
      splitName: 'Push/Pull/Legs',
      days: [
        {
          day: 'Day 1',
          split: 'Push',
          exercises: [
            { name: 'Barbell Bench Press', sets: 5, reps: 6 },
            { name: 'Incline Dumbbell Press', sets: 4, reps: 8 },
            { name: 'Overhead Press', sets: 4, reps: 8 },
            { name: 'Tricep Dips', sets: 4, reps: 12 },
            { name: 'Lateral Raises (Superset)', sets: 3, reps: 15 },
            { name: 'Tricep Pushdowns (Superset)', sets: 3, reps: 15 }
          ]
        },
        {
          day: 'Day 2',
          split: 'Pull',
          exercises: [
            { name: 'Weighted Pull-ups', sets: 4, reps: 6 },
            { name: 'Barbell Rows', sets: 4, reps: 8 },
            { name: 'T-Bar Rows', sets: 4, reps: 10 },
            { name: 'Face Pulls', sets: 4, reps: 12 },
            { name: 'Hammer Curls (Superset)', sets: 4, reps: 10 },
            { name: 'Reverse Curls (Superset)', sets: 4, reps: 12 }
          ]
        },
        {
          day: 'Day 3',
          split: 'Legs',
          exercises: [
            { name: 'Back Squats', sets: 5, reps: 5 },
            { name: 'Deadlifts', sets: 5, reps: 5 },
            { name: 'Walking Lunges', sets: 4, reps: 12 },
            { name: 'Leg Press (Drop Set)', sets: 3, reps: 8, dropReps: 20 },
            { name: 'Calf Raises', sets: 5, reps: 20 }
          ]
        }
      ]
    },
    {
      id: 2,
      name:'2-days',
      splitName: 'Upper/Lower Body',
      days: [
        {
          day: 'Day 1',
          split: 'Upper Body',
          exercises: [
            { name: 'Incline Barbell Bench Press', sets: 5, reps: 6 },
            { name: 'Weighted Pull-ups', sets: 4, reps: 6 },
            { name: 'Overhead Press', sets: 4, reps: 8 },
            { name: 'Barbell Rows', sets: 4, reps: 8 },
            { name: 'Superset: Tricep Pushdowns + Bicep Curls', sets: 4, reps: 12 }
          ]
        },
        {
          day: 'Day 2',
          split: 'Lower Body',
          exercises: [
            { name: 'Deadlifts', sets: 5, reps: 5 },
            { name: 'Squats', sets: 5, reps: 5 },
            { name: 'Leg Press', sets: 4, reps: 10 },
            { name: 'Leg Curls (Superset)', sets: 4, reps: 12 },
            { name: 'Walking Lunges (Superset)', sets: 4, reps: 12 }
          ]
        }
      ]
    },
    {
        id: 3,
        name: '1-day',
        splitName:'Full Body',
        days: [
          {
            day: 'Day 1',
            split: 'Full Body',
            exercises: [
              { name: 'Deadlifts', sets: 4, reps: 6 },
              { name: 'Bench Press', sets: 4, reps: 8 },
              { name: 'Pull-ups', sets: 4, reps: 6 },
              { name: 'Squats', sets: 4, reps: 8 }
            ]
          }
        ]
      }
    
      
  ];
  