import React from 'react'
import { Bento } from '~/app/_components/Bento'
import TierCard from '../_components/TierCard'

function Tiers() {
  return (
     <div className='py-10 text-black w-full sm:px-20 px-10 hero-bg'>
          <div className='flex justify-center my-20'>
            <p className='text-5xl font-semibold'>Choose Your Plan </p>
          </div>
         
          
          <div className='flex justify-center gap-10 flex-wrap'>
              <TierCard />
              <TierCard />
              <TierCard />
          </div>
         
          
    
   

     </div>
  )
}

export default Tiers