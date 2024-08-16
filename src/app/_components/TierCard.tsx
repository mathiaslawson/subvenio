import React from 'react'
import { Button } from '~/components/ui/button'

function TierCard() {
  return (
      <div className='h-[full] shadow-lg rounded-xl w-[300px] text-black p-4 bg-opacity-20 bg-neutral-300 bg-blur-lg backdrop-blur-xl backdrop-saturate-150'>
          <div>
              <p className='text-2xl'>Basic</p>
              <p className='font-light mt-3 text-sm'>For personal use and exploration of AI technology.</p>
          </div>
          
          <div className='mt-20 flex text-2xl font-semibold'>
              <sub>$</sub>
              <p className='text-8xl font-semibold ml-2'>0</p>
          </div>

          <div className='w-full mt-10'>
            <Button variant="outline" className='w-full rounded-3xl'>Button</Button>
          </div>

          <div className='mt-8'>
              Create & Add Store Flash Cards
             
          </div>
            <div className='mt-3'>
              Create & Add Store Flash Cards
             
          </div>
            <div className='mt-3'>
              Create & Add Store Flash Cards
             
          </div>
          
      </div>
  )
}

export default TierCard