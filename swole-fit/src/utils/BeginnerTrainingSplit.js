export const BeginnerTrainingSplits = [
    {
      id: 1,
      name: '3-days',
      splitName:'Push/Pull/Legs',
      days: [
        {
          day: 'Day 1',
          split: 'Push',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 8 },
            { name: 'Shoulder Press', sets: 3, reps: 10 },
            { name: 'Tricep Dips', sets: 3, reps: 12 }
          ]
        },
        {
          day: 'Day 2',
          split: 'Pull',
          exercises: [
            { name: 'Pull-ups', sets: 4, reps: 6 },
            { name: 'Barbell Rows', sets: 3, reps: 8 },
            { name: 'Bicep Curls', sets: 3, reps: 10 }
          ]
        },
        {
          day: 'Day 3',
          split: 'Legs',
          exercises: [
            { name: 'Squats', sets: 4, reps: 8 },
            { name: 'Lunges', sets: 3, reps: 10 },
            { name: 'Deadlifts', sets: 3, reps: 6 }
          ]
        }
      ]
    },
    {
      id: 2,
      name: '2-days',
      splitName:'Upper/Lower Body',
      days: [
        {
          day: 'Day 1',
          split: 'Upper Body',
          exercises: [
            { name: 'Bench Press', sets: 4, reps: 8 },
            { name: 'Pull-ups', sets: 4, reps: 6 },
            { name: 'Shoulder Press', sets: 3, reps: 10 }
          ]
        },
        {
          day: 'Day 2',
          split: 'Lower Body',
          exercises: [
            { name: 'Squats', sets: 4, reps: 8 },
            { name: 'Lunges', sets: 3, reps: 10 },
            { name: 'Calf Raises', sets: 4, reps: 15 }
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
  