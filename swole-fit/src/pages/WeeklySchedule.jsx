import React, { useState } from 'react'
import { weeklySchedule } from '../utils/WeeklySchedule'


export default function WeeklySchedule() {

  return (
    <div className=' mt-14 flex flex-col gap-y-16'>
        {
  weeklySchedule.map((schedule)=>(
    <div className='text-center   ' key={schedule.id}>
        <p className='text-4xl text-blue-400 '>{schedule.splitName}</p>
        <div className=' mt-6 flex justify-evenly'>
        {
        schedule.dayWise.map((day,index)=>(
            <div key={index} className='min-w-fit bg-black p-10 rounded-lg cursor-pointer  '>
                <p className='text-2xl '>{day.day}</p>
                {
                    day.split==="Rest" ? <p className=' mt-2 text-xl text-gray-400 font-medium'>{day.split}</p>
                    : <p className=' mt-2 text-xl text-green-400 font-medium'>{day.split}</p>
                }
                
               
            </div>
            
        ))
       }
        </div>
     

    </div>

  ))

        }
    </div>
  )
}
