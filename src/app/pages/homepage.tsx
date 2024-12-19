"use client"

import React from 'react'
import Link from 'next/link'
import { songs } from '../components/hooks/songs';
import { MusicPlayer } from '../components/MusicPlayer';
import DinoGame from '../components/DinoGame';
import { motion } from "framer-motion"

function Homepage() {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.2,
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  return (
    <main className="container mx-auto px-4 dark:bg-gray-900 transition-colors duration-200">
      {/* top section */}
      <section className='grid grid-cols-1 md:grid-cols-4 gap-4'>
        <motion.div
          className='border-black dark:border-gray-300 border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,0.2)] bg-[#FF7F50] dark:bg-gray-800 rounded-xl w-full h-72 md:h-full transition-colors duration-200'
          variants={boxVariants}
          custom={0}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <MusicPlayer songs={songs} />
        </motion.div>
        <motion.div
          className='col-span-1 md:col-span-3 border-black dark:border-gray-300 border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,0.2)] bg-[#FF7F50] dark:bg-gray-800 rounded-xl w-full h-72 p-8 transition-colors duration-200'
          variants={boxVariants}
          custom={1}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
        >
          <div className='flex gap-4 h-full'>
            {/* left image div */}
            <div className='w-[300px] border-black dark:border-gray-300 border-2 h-full bg-white dark:bg-gray-700 transition-colors duration-200'>

            </div>
            {/* right image div */}
            <div className='w-full border-black dark:border-gray-300 border-2 h-full bg-white dark:bg-gray-700 transition-colors duration-200'>

            </div>
          </div>
        </motion.div>
        {/* section tengah */}
        <motion.div
          className='col-span-1 md:col-span-4 border-black dark:border-gray-300 border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,0.2)] bg-[#FF7F50] dark:bg-gray-800 rounded-xl w-full h-72 transition-colors duration-200'
          variants={boxVariants}
          custom={2}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <DinoGame />
        </motion.div>
        {/* section bawah */}
        <motion.div
          className='col-span-1 md:col-span-2 border-black dark:border-gray-300 border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,0.2)] bg-[#FF7F50] dark:bg-gray-800 rounded-xl w-full h-72 transition-colors duration-200'
          variants={boxVariants}
          custom={3}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Bottom Left Box</h2>
            <p className="text-gray-800 dark:text-gray-200">This is some sample content for the bottom-left box.</p>
          </div>
        </motion.div>
        <motion.div
          className='col-span-1 md:col-span-2 border-black dark:border-gray-300 border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_rgba(255,255,255,0.2)] bg-[#FF7F50] dark:bg-gray-800 rounded-xl w-full h-72 transition-colors duration-200'
          variants={boxVariants}
          custom={4}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
        >
          <div className="p-4">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-2">Bottom Right Box</h2>
            <p className="text-gray-800 dark:text-gray-200">This is some sample content for the bottom-right box.</p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default Homepage

