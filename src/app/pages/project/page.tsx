"use client"
import { MusicPlayer } from '@/app/components/MusicPlayer'
import React from 'react'
import { songs } from '@/app/components/hooks/songs'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

function Page() {
    return (
        <motion.main 
          className='max-w-[1200px] mx-auto py-5 px-4 sm:px-6 lg:px-8'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
            {/* upper section */}
            <motion.section className='grid grid-cols-1 sm:grid-cols-4 gap-4 mb-4' variants={containerVariants}>
                <motion.div 
                  className='w-full h-72 dark:border-[#00ff41] dark:shadow-[1px_0px_10px_-1px_rgba(0,255,27,0.75)]  dark:bg-[#171818] border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#FF7F50] rounded-xl'
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                    <MusicPlayer songs={songs} />
                </motion.div>
                <motion.div 
                  className='col-span-1 sm:col-span-3 w-full h-72 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#FF7F50] dark:border-[#00ff41] dark:shadow-[1px_0px_10px_-1px_rgba(0,255,27,0.75)]  dark:bg-[#171818] rounded-xl flex justify-center items-center'
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                    <h1 className='text-[6em] font-black tracking-widest italic'>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0s' }}>T</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.1s' }}>E</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.2s' }}>S</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.3s' }}>T</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.4s' }}>I</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.5s' }}>N</span>
                        <span className='inline-block animate-slide-left' style={{ animationDelay: '0.6s' }}>G</span>
                    </h1>
                </motion.div>
            </motion.section>
            {/* middle section */}
            <motion.section className='grid grid-cols-1 sm:grid-cols-4 gap-4' variants={containerVariants}>
                <motion.div 
                  className='col-span-1 sm:col-span-3 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#FF7F50] dark:border-[#00ff41] dark:shadow-[1px_0px_10px_-1px_rgba(0,255,27,0.75)]  dark:bg-[#171818] rounded-xl w-full min-h-[216px] sm:min-h-[648px]'
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                    {/* Content for the large middle box */}
                </motion.div>
                <motion.div className='col-span-1 sm:flex sm:flex-col gap-4 w-full overflow-x-auto sm:overflow-x-visible' variants={containerVariants}>
                    <motion.div className='flex flex-row sm:flex-col gap-4 w-full sm:w-auto' variants={containerVariants}>
                        <motion.div 
                          className='flex-shrink-0 w-[calc(100vw-3rem)] sm:w-full h-72 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#FF7F50] dark:border-[#00ff41] dark:shadow-[1px_0px_10px_-1px_rgba(0,255,27,0.75)]  dark:bg-[#171818] rounded-xl'
                          variants={itemVariants}
                          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        >
                            {/* Content for the first small box */}
                        </motion.div>
                        <motion.div 
                          className='flex-shrink-0 w-[calc(100vw-2rem)] sm:w-full h-72 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#FF7F50] dark:border-[#00ff41] dark:shadow-[1px_0px_10px_-1px_rgba(0,255,27,0.75)]  dark:bg-[#171818] rounded-xl'
                          variants={itemVariants}
                          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        >
                            {/* Content for the second small box */}
                        </motion.div>
                        <motion.div 
                          className='flex-shrink-0 w-[calc(100vw-2rem)] sm:w-full h-72 border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#FF7F50] dark:border-[#00ff41] dark:shadow-[1px_0px_10px_-1px_rgba(0,255,27,0.75)]  dark:bg-[#171818] rounded-xl'
                          variants={itemVariants}
                          whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                        >
                            {/* Content for the third small box */}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.section>
        </motion.main>
    )
}

export default Page

