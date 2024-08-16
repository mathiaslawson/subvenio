import React from 'react'

function Hero() {
  return (
  
      <div className='grid grid-cols-8 grid-flow-row hero-bg'>

        <div className='sm:col-span-4 lg:col-span-8 col-span-8  xl:col-span-4   w-full'>
       
         <div className='flex flex-col justify-start sm:ml-20 mt-10 p-10 py-40'>
            <p className='sm:text-8xl text-2xl mt-4 leading-snug'>Unlock Your Memory's Potential with Subvenio: Your Ultimate Flashcard Companion!
            </p>
          </div>
          
        </div>
        
      <div className='md:col-span-4 lg:col-span-8 xl:col-span-4 col-span-8  w-full bg-red-500'>
          <div className='flex flex-col justify-center sm:mr-20 mt-10 p-10 py-40'>
             This is the Right
          </div>
        
        
        </div>
        

     </div>
  
  )
}

export default Hero