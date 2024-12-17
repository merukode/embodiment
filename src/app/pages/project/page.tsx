"use client"
import { MusicPlayer } from '@/app/components/MusicPlayer'
import React from 'react'
import { songs } from '@/app/components/hooks/songs'

function Page() {
    return (
        <main className='max-w-[1200px] mx-auto py-5 px-4 sm:px-6 lg:px-8'>
            {/* upper section */}
            <section className='grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4'>
                <div className='w-full h-72  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300'>
                    <MusicPlayer songs={songs} />
                </div>
                <div className='col-span-1 sm:col-span-3 w-full h-72 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
bg-[#FF7F50] rounded-xl transition-all duration-300 flex justify-center items-center'>
                    <h1 className='text-[6em] font-black tracking-widest italic'>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0s' }}>T</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.1s' }}>E</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.2s' }}>S</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.3s' }}>T</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.4s' }}>I</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.5s' }}>N</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.6s' }}>G</span>
                    </h1>
                </div>
            </section>
            {/* middle section */}
            <section className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
                <div className='col-span-1 sm:col-span-3  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300 w-full min-h-[216px] sm:min-h-[648px]'>
                    {/* Content for the large middle box */}
                </div>
                <div className='col-span-1 sm:flex sm:flex-col gap-4 w-full overflow-x-auto sm:overflow-x-visible'>
                    <div className='flex flex-row sm:flex-col gap-4 w-full sm:w-auto'>
                        <div className='flex-shrink-0 w-[calc(100vw-3rem)] sm:w-full h-72  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300'>
                            {/* Content for the first small box */}
                        </div>
                        <div className='flex-shrink-0 w-[calc(100vw-2rem)] sm:w-full h-72  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300'>
                            {/* Content for the second small box */}
                        </div>
                        <div className='flex-shrink-0 w-[calc(100vw-2rem)] sm:w-full h-72  border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]
 bg-[#FF7F50] rounded-xl transition-all duration-300'>
                            {/* Content for the third small box */}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page

