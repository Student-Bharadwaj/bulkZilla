export const intermediateTrainingSplits = [
    {
      id: 1,
      name:'3-days',
      splitName: 'Push/Pull/Legs',
      days: [
        {
          day: 'Day 1',
          split: 'Push',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 10 },
            { name: 'Incline Dumbbell Press', sets: 4, reps: 10 },
            { name: 'Overhead Press', sets: 3, reps: 10 },
            { name: 'Tricep Dips', sets: 3, reps: 12 },
            { name: 'Lateral Raises', sets: 3, reps: 15 }
          ]
        },
        {
          day: 'Day 2',
          split: 'Pull',
          exercises: [
            { name: 'Pull-ups', sets: 4, reps: 8 },
            { name: 'Barbell Rows', sets: 4, reps: 10 },
            { name: 'Dumbbell Rows', sets: 3, reps: 12 },
            { name: 'Face Pulls', sets: 3, reps: 12 },
            { name: 'Bicep Curls', sets: 4, reps: 12 }
          ]
        },
        {
          day: 'Day 3',
          split: 'Legs',
          exercises: [
            { name: 'Squats', sets: 5, reps: 8 },
            { name: 'Deadlifts', sets: 4, reps: 6 },
            { name: 'Lunges', sets: 3, reps: 12 },
            { name: 'Leg Curls', sets: 4, reps: 12 },
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
            { name: 'Bench Press', sets: 5, reps: 8 },
            { name: 'Pull-ups', sets: 4, reps: 8 },
            { name: 'Overhead Press', sets: 4, reps: 10 },
            { name: 'Barbell Rows', sets: 4, reps: 8 },
            { name: 'Bicep Curls', sets: 4, reps: 12 }
          ]
        },
        {
          day: 'Day 2',
          split: 'Lower Body',
          exercises: [
            { name: 'Deadlifts', sets: 4, reps: 6 },
            { name: 'Squats', sets: 5, reps: 8 },
            { name: 'Leg Press', sets: 4, reps: 10 },
            { name: 'Leg Curls', sets: 4, reps: 12 },
            { name: 'Calf Raises', sets: 5, reps: 20 }
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
  