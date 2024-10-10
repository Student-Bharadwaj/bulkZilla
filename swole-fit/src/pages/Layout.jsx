import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-slate-700 to-slate-950 text-white text-sm sm:text-base'>
        <Header/>
        <Outlet/>
    </div>
  )
}
