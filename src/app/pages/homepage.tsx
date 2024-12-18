"use client"

import React from 'react'
import Link from 'next/link'
import { songs } from '../components/hooks/songs';
import { MusicPlayer } from '../components/MusicPlayer';
import DinoGame from '../components/DinoGame';

function Homepage() {
  return (
    <main className="container mx-auto px-4">
      {/* top section */}
      <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className=' border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300 w-full h-72 md:h-full'>
        <MusicPlayer songs={songs} />
        </div>
        <div className='col-span-1 md:col-span-3 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300 w-full h-72 p-8'>
          <div className='flex gap-4 h-full'>
            {/* left image div */}
            <div className='w-full border-black border-2 h-full'>

            </div>
            {/* right image div */}
            <div className='w-full border-black border-2 h-full'>

            </div>
          </div>
        </div>
        {/* section tengah */}
        <div className='col-span-1 md:col-span-4  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300 w-full h-72'>
          <DinoGame/>
        </div>
        {/* section bawah */}
        <div className='col-span-1 md:col-span-2  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300 w-full h-72'>
          {/* Content for the bottom-left box */}
        </div>
        <div className='col-span-1 md:col-span-2  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300 w-full h-72'>
          {/* Content for the bottom-right box */}
        </div>
      </section>
    </main>
  )
}

export default Homepage

