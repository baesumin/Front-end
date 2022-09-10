import React from 'react'
import {Bars3BottomRightIcon} from '@heroicons/react/24/solid'
import NavButton from './NavButton'

const Header = () => {
  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center'>
      <div className='flex items-center space-x-2'>
        <img className='rounded-full h-20 w-20' src='https://i.imgur.com/4h7mAu7.png' alt=''/>
        <div>
          <h1 className='text-lg text-white font-bold'>PAPAFAM DRAW</h1>
          <p className='text-xs text-emerald-500 truncate'>User...</p>
        </div>
      </div>

      <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md'>
        <div className='bg-[#0a1f1c] p-4 space-x-2'>
          <NavButton title='Buy Tickets'/>
          <NavButton title='Logout'/>          
        </div>
      </div>

      <div className='flex flex-col ml-auto text-right'>
        <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer'/>
        <span className='md:hidden'>
          <NavButton title='Logout'/>
        </span>
      </div>

      
    </header>
  )
}

export default Header