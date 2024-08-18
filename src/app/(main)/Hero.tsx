import React from 'react'
import Anim from '../../../public/assets/animations/anim.gif'
import Image from 'next/image'

function Hero() {
  return (
  
      <div className='grid grid-cols-8 grid-flow-row hero-bg '>

        <div className='sm:col-span-4 lg:col-span-8 col-span-8  xl:col-span-4   w-full '>
       
         <div className='flex flex-col justify-start sm:ml-20 mt-10 p-10 py-40'>
            <p className='sm:text-8xl text-2xl mt-4 leading-snug'>Unlock Your Memory&#39;s Potential with Subvenio: Your Ultimate Flashcard Companion!
            </p>
          </div>
          
      </div>

        
      <div className='md:col-span-4 lg:col-span-8 xl:col-span-4 col-span-8  w-full inset-0 -z-10 h-ful bg-orange-100
       bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:30px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]
      '>
          <div className='flex flex-row justify-center sm:mr-20 mt-10 p-10 py-40 text-black'>
          <Image src={Anim} height={400} width={400} alt='animation' />
          <Image src={Anim} height={400} width={400} alt='animation' />
          <Image src={Anim} height={400} width={400} alt='animation' />
          </div>
        
        <div>
          <p className='text-3xl'>Start on </p>
        </div>
        </div>
        

     </div>
  
  )
}

export default Hero